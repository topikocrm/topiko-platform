-- Add Digital Readiness specific columns to short_urls and users tables
-- Run this in Supabase SQL Editor

-- ========================================
-- PART 1: Add Digital Readiness columns to short_urls table
-- ========================================

-- Add Digital Readiness specific UTM fields to short_urls
ALTER TABLE short_urls 
ADD COLUMN IF NOT EXISTS utm_business_type TEXT,
ADD COLUMN IF NOT EXISTS utm_industry TEXT;

-- ========================================
-- PART 2: Add Digital Readiness columns to users table  
-- ========================================

-- Add Digital Readiness specific UTM parameters to users
ALTER TABLE users 
ADD COLUMN IF NOT EXISTS utm_business_type TEXT,
ADD COLUMN IF NOT EXISTS utm_industry TEXT;

-- ========================================
-- PART 3: Create indexes for better query performance
-- ========================================

-- Drop existing indexes if they exist (to avoid errors)
DROP INDEX IF EXISTS idx_short_urls_business_type;
DROP INDEX IF EXISTS idx_short_urls_industry;
DROP INDEX IF EXISTS idx_users_business_type;
DROP INDEX IF EXISTS idx_users_industry;
DROP INDEX IF EXISTS idx_digitalreadiness_analytics;

-- Create indexes for Digital Readiness queries
CREATE INDEX idx_short_urls_business_type ON short_urls(utm_business_type);
CREATE INDEX idx_short_urls_industry ON short_urls(utm_industry);
CREATE INDEX idx_users_business_type ON users(utm_business_type);
CREATE INDEX idx_users_industry ON users(utm_industry);

-- Create compound index for Digital Readiness analytics
CREATE INDEX idx_digitalreadiness_analytics ON users(source, utm_business_type, utm_industry, created_at);

-- ========================================
-- PART 4: Create views for Digital Readiness analytics
-- ========================================

-- Drop existing views if they exist
DROP VIEW IF EXISTS digitalreadiness_analytics;
DROP VIEW IF EXISTS digitalreadiness_campaign_performance;

-- Create a view for Digital Readiness analytics
CREATE VIEW digitalreadiness_analytics AS
SELECT 
    id,
    name,
    email,
    phone,
    business_name,
    utm_business_type,
    utm_industry,
    utm_source,
    utm_medium,
    utm_campaign,
    custom_params,
    landing_url,
    landing_timestamp,
    created_at,
    updated_at,
    city,
    state,
    country
FROM users
WHERE source = 'digitalreadiness'
ORDER BY created_at DESC;

-- Create a view for Digital Readiness campaign performance
CREATE VIEW digitalreadiness_campaign_performance AS
SELECT 
    s.short_code,
    s.campaign_name,
    s.created_by,
    s.utm_business_type,
    s.utm_industry,
    s.utm_source,
    s.utm_medium,
    s.utm_campaign,
    s.custom_params,
    s.clicks,
    s.is_active,
    s.created_at,
    COUNT(DISTINCT u.id) as assessment_completions,
    CASE 
        WHEN s.clicks > 0 THEN ROUND((COUNT(DISTINCT u.id)::numeric / s.clicks) * 100, 2)
        ELSE 0
    END as conversion_rate
FROM short_urls s
LEFT JOIN users u ON 
    u.utm_source = s.utm_source AND 
    u.utm_medium = s.utm_medium AND 
    u.utm_campaign = s.utm_campaign AND
    u.source = 'digitalreadiness'
WHERE s.source = 'digitalreadiness'
GROUP BY 
    s.short_code, s.campaign_name, s.created_by, 
    s.utm_business_type, s.utm_industry, s.utm_source,
    s.utm_medium, s.utm_campaign, s.custom_params,
    s.clicks, s.is_active, s.created_at
ORDER BY s.created_at DESC;

-- ========================================
-- PART 5: Create helper functions for Digital Readiness
-- ========================================

-- Drop existing function if it exists
DROP FUNCTION IF EXISTS get_digitalreadiness_stats();

-- Function to get Digital Readiness statistics
CREATE OR REPLACE FUNCTION get_digitalreadiness_stats()
RETURNS TABLE (
    total_campaigns BIGINT,
    active_campaigns BIGINT,
    total_clicks BIGINT,
    total_assessments BIGINT,
    overall_conversion_rate NUMERIC,
    business_types_stats JSON,
    industry_stats JSON,
    regional_stats JSON
) AS $$
BEGIN
    RETURN QUERY
    WITH campaign_counts AS (
        SELECT 
            COUNT(*) FILTER (WHERE source = 'digitalreadiness') as total_camp,
            COUNT(*) FILTER (WHERE source = 'digitalreadiness' AND is_active = true) as active_camp,
            SUM(clicks) FILTER (WHERE source = 'digitalreadiness') as total_cl
        FROM short_urls
    ),
    assessment_counts AS (
        SELECT 
            COUNT(*) FILTER (WHERE source = 'digitalreadiness') as total_assess
        FROM users
    ),
    business_type_stats AS (
        SELECT json_object_agg(utm_business_type, stats) as bt_stats
        FROM (
            SELECT 
                utm_business_type, 
                json_build_object(
                    'campaigns', COUNT(DISTINCT s.short_code),
                    'clicks', SUM(s.clicks),
                    'assessments', COUNT(DISTINCT u.id),
                    'conversion_rate', CASE 
                        WHEN SUM(s.clicks) > 0 THEN ROUND((COUNT(DISTINCT u.id)::numeric / SUM(s.clicks)) * 100, 2)
                        ELSE 0
                    END
                ) as stats
            FROM short_urls s
            LEFT JOIN users u ON u.utm_campaign = s.utm_campaign 
                AND u.utm_source = s.utm_source 
                AND u.source = 'digitalreadiness'
            WHERE s.source = 'digitalreadiness' 
                AND s.utm_business_type IS NOT NULL
            GROUP BY s.utm_business_type
        ) bt
    ),
    industry_stats AS (
        SELECT json_object_agg(utm_industry, stats) as ind_stats
        FROM (
            SELECT 
                utm_industry, 
                json_build_object(
                    'campaigns', COUNT(DISTINCT s.short_code),
                    'clicks', SUM(s.clicks),
                    'assessments', COUNT(DISTINCT u.id),
                    'conversion_rate', CASE 
                        WHEN SUM(s.clicks) > 0 THEN ROUND((COUNT(DISTINCT u.id)::numeric / SUM(s.clicks)) * 100, 2)
                        ELSE 0
                    END
                ) as stats
            FROM short_urls s
            LEFT JOIN users u ON u.utm_campaign = s.utm_campaign 
                AND u.utm_source = s.utm_source 
                AND u.source = 'digitalreadiness'
            WHERE s.source = 'digitalreadiness' 
                AND s.utm_industry IS NOT NULL
            GROUP BY s.utm_industry
        ) ind
    ),
    regional_stats AS (
        SELECT json_object_agg(region, stats) as reg_stats
        FROM (
            SELECT 
                s.custom_params->>'utm_region' as region,
                json_build_object(
                    'campaigns', COUNT(DISTINCT s.short_code),
                    'clicks', SUM(s.clicks),
                    'assessments', COUNT(DISTINCT u.id)
                ) as stats
            FROM short_urls s
            LEFT JOIN users u ON u.utm_campaign = s.utm_campaign 
                AND u.utm_source = s.utm_source 
                AND u.source = 'digitalreadiness'
            WHERE s.source = 'digitalreadiness' 
                AND s.custom_params->>'utm_region' IS NOT NULL
            GROUP BY s.custom_params->>'utm_region'
        ) reg
    )
    SELECT 
        cc.total_camp,
        cc.active_camp,
        COALESCE(cc.total_cl, 0),
        ac.total_assess,
        CASE 
            WHEN cc.total_cl > 0 THEN ROUND((ac.total_assess::numeric / cc.total_cl) * 100, 2)
            ELSE 0
        END,
        COALESCE(bts.bt_stats, '{}'::json),
        COALESCE(ins.ind_stats, '{}'::json),
        COALESCE(rs.reg_stats, '{}'::json)
    FROM campaign_counts cc
    CROSS JOIN assessment_counts ac
    CROSS JOIN business_type_stats bts
    CROSS JOIN industry_stats ins
    CROSS JOIN regional_stats rs;
END;
$$ LANGUAGE plpgsql;

-- ========================================
-- PART 6: Verification queries
-- ========================================

-- Verify Digital Readiness columns were added successfully
DO $$
DECLARE
    missing_columns TEXT[];
    required_columns TEXT[] := ARRAY[
        'utm_business_type', 'utm_industry'
    ];
    col TEXT;
BEGIN
    missing_columns := ARRAY[]::TEXT[];
    
    -- Check short_urls table
    FOREACH col IN ARRAY required_columns
    LOOP
        IF NOT EXISTS (
            SELECT 1 FROM information_schema.columns 
            WHERE table_name = 'short_urls' 
            AND column_name = col
        ) THEN
            missing_columns := array_append(missing_columns, 'short_urls.' || col);
        END IF;
    END LOOP;
    
    -- Check users table
    FOREACH col IN ARRAY required_columns
    LOOP
        IF NOT EXISTS (
            SELECT 1 FROM information_schema.columns 
            WHERE table_name = 'users' 
            AND column_name = col
        ) THEN
            missing_columns := array_append(missing_columns, 'users.' || col);
        END IF;
    END LOOP;
    
    IF array_length(missing_columns, 1) > 0 THEN
        RAISE NOTICE 'Warning: The following Digital Readiness columns are still missing: %', missing_columns;
    ELSE
        RAISE NOTICE 'Success: All Digital Readiness columns have been added!';
    END IF;
END $$;

-- ========================================
-- PART 7: Test the setup
-- ========================================

-- Test query to verify Digital Readiness columns exist
SELECT 
    table_name,
    column_name, 
    data_type,
    is_nullable
FROM information_schema.columns 
WHERE table_name IN ('users', 'short_urls')
AND column_name IN ('utm_business_type', 'utm_industry')
ORDER BY table_name, column_name;

-- Test the Digital Readiness stats function
SELECT * FROM get_digitalreadiness_stats();

-- ========================================
-- PART 8: Refresh schema cache
-- ========================================

-- IMPORTANT: Refresh the schema cache after adding columns
NOTIFY pgrst, 'reload schema';

-- ========================================
-- SUCCESS MESSAGE
-- ========================================
-- Digital Readiness tracking columns and infrastructure successfully added!
-- 
-- SUMMARY OF CHANGES:
-- ✅ Added utm_business_type and utm_industry columns to short_urls table
-- ✅ Added utm_business_type and utm_industry columns to users table
-- ✅ Created Digital Readiness analytics views
-- ✅ Created Digital Readiness statistics function
-- ✅ Added performance indexes for Digital Readiness queries
--
-- You can now:
-- 1. Track Digital Readiness campaigns separately from partners/customers
-- 2. Store business type and industry specific UTM parameters
-- 3. Analyze Digital Readiness performance with dedicated views
-- 4. Generate Digital Readiness statistics with helper functions
--
-- Next steps:
-- 1. Test Digital Readiness URL builder at /digitalreadiness-url-builder.html
-- 2. View analytics at /digitalreadiness-analytics.html
-- 3. Create test campaigns and verify data flows correctly