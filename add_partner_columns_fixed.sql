-- Add Partner-specific columns to users and short_urls tables
-- FIXED VERSION - Adds all missing columns first
-- Run this in Supabase SQL Editor

-- ========================================
-- PART 1: Add ALL missing columns to users table
-- ========================================

-- Add basic address fields if they don't exist
ALTER TABLE users 
ADD COLUMN IF NOT EXISTS address TEXT,
ADD COLUMN IF NOT EXISTS city TEXT,
ADD COLUMN IF NOT EXISTS state TEXT,
ADD COLUMN IF NOT EXISTS country TEXT DEFAULT 'India',
ADD COLUMN IF NOT EXISTS pincode TEXT;

-- Add source field to distinguish customer vs partner
ALTER TABLE users 
ADD COLUMN IF NOT EXISTS source TEXT DEFAULT 'customer',
ADD COLUMN IF NOT EXISTS lead_type TEXT;

-- Add partner-specific UTM parameters
ALTER TABLE users 
ADD COLUMN IF NOT EXISTS utm_partner_type TEXT,
ADD COLUMN IF NOT EXISTS utm_partner_tier TEXT,
ADD COLUMN IF NOT EXISTS utm_partner_region TEXT,
ADD COLUMN IF NOT EXISTS utm_commission_model TEXT;

-- Add partner business information
ALTER TABLE users 
ADD COLUMN IF NOT EXISTS partner_type TEXT,
ADD COLUMN IF NOT EXISTS website TEXT,
ADD COLUMN IF NOT EXISTS employee_count TEXT,
ADD COLUMN IF NOT EXISTS annual_revenue TEXT;

-- Add partner goals and interests
ALTER TABLE users 
ADD COLUMN IF NOT EXISTS partnership_goals TEXT,
ADD COLUMN IF NOT EXISTS target_market TEXT,
ADD COLUMN IF NOT EXISTS current_challenges TEXT,
ADD COLUMN IF NOT EXISTS interested_services TEXT;

-- Add partner status tracking
ALTER TABLE users 
ADD COLUMN IF NOT EXISTS partner_status TEXT DEFAULT 'Pending Review',
ADD COLUMN IF NOT EXISTS partner_onboarding_status TEXT DEFAULT 'Not Started',
ADD COLUMN IF NOT EXISTS partner_approved_date TIMESTAMP WITH TIME ZONE,
ADD COLUMN IF NOT EXISTS partner_approved_by TEXT;

-- Add tracking fields
ALTER TABLE users 
ADD COLUMN IF NOT EXISTS landing_page TEXT,
ADD COLUMN IF NOT EXISTS ip_address TEXT,
ADD COLUMN IF NOT EXISTS user_agent TEXT,
ADD COLUMN IF NOT EXISTS registration_attempts INT DEFAULT 0;

-- Add timestamp for updates
ALTER TABLE users 
ADD COLUMN IF NOT EXISTS updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW();

-- Add registration_completed if it doesn't exist
ALTER TABLE users 
ADD COLUMN IF NOT EXISTS registration_completed BOOLEAN DEFAULT false;

-- ========================================
-- PART 2: Add columns to short_urls table for partner campaigns
-- ========================================

-- Add partner-specific UTM fields to short_urls
ALTER TABLE short_urls 
ADD COLUMN IF NOT EXISTS utm_partner_type TEXT,
ADD COLUMN IF NOT EXISTS utm_partner_tier TEXT,
ADD COLUMN IF NOT EXISTS utm_partner_region TEXT,
ADD COLUMN IF NOT EXISTS utm_commission_model TEXT,
ADD COLUMN IF NOT EXISTS source TEXT DEFAULT 'customer';

-- ========================================
-- PART 3: Create indexes for better query performance
-- ========================================

-- Drop existing indexes if they exist (to avoid errors)
DROP INDEX IF EXISTS idx_users_source;
DROP INDEX IF EXISTS idx_users_partner_type;
DROP INDEX IF EXISTS idx_users_partner_tier;
DROP INDEX IF EXISTS idx_users_partner_status;
DROP INDEX IF EXISTS idx_users_lead_type;
DROP INDEX IF EXISTS idx_short_urls_source;
DROP INDEX IF EXISTS idx_short_urls_partner_type;
DROP INDEX IF EXISTS idx_partner_analytics;

-- Create indexes for partner queries
CREATE INDEX idx_users_source ON users(source);
CREATE INDEX idx_users_partner_type ON users(partner_type);
CREATE INDEX idx_users_partner_tier ON users(utm_partner_tier);
CREATE INDEX idx_users_partner_status ON users(partner_status);
CREATE INDEX idx_users_lead_type ON users(lead_type);

-- Create indexes for short_urls partner queries
CREATE INDEX idx_short_urls_source ON short_urls(source);
CREATE INDEX idx_short_urls_partner_type ON short_urls(utm_partner_type);

-- Create compound index for partner analytics
CREATE INDEX idx_partner_analytics ON users(source, partner_status, created_at);

-- ========================================
-- PART 4: Create or replace views for partner analytics
-- ========================================

-- Drop existing views if they exist
DROP VIEW IF EXISTS partner_analytics;
DROP VIEW IF EXISTS partner_campaign_performance;

-- Create a view for partner analytics
CREATE VIEW partner_analytics AS
SELECT 
    id,
    name,
    email,
    phone,
    business_name,
    partner_type,
    utm_partner_type,
    utm_partner_tier,
    utm_partner_region,
    utm_commission_model,
    partner_status,
    partner_onboarding_status,
    created_at,
    updated_at,
    city,
    state,
    website,
    employee_count,
    annual_revenue,
    partnership_goals,
    target_market,
    utm_source,
    utm_medium,
    utm_campaign
FROM users
WHERE source = 'partner'
ORDER BY created_at DESC;

-- Create a view for partner campaign performance
CREATE VIEW partner_campaign_performance AS
SELECT 
    s.short_code,
    s.campaign_name,
    s.created_by,
    s.utm_partner_type,
    s.utm_partner_tier,
    s.utm_partner_region,
    s.utm_commission_model,
    s.clicks,
    s.is_active,
    s.created_at,
    COUNT(DISTINCT u.id) as conversions,
    CASE 
        WHEN s.clicks > 0 THEN ROUND((COUNT(DISTINCT u.id)::numeric / s.clicks) * 100, 2)
        ELSE 0
    END as conversion_rate
FROM short_urls s
LEFT JOIN users u ON 
    u.utm_source = s.utm_source AND 
    u.utm_medium = s.utm_medium AND 
    u.utm_campaign = s.utm_campaign AND
    u.source = 'partner'
WHERE s.source = 'partner'
GROUP BY 
    s.short_code, s.campaign_name, s.created_by, 
    s.utm_partner_type, s.utm_partner_tier, s.utm_partner_region,
    s.utm_commission_model, s.clicks, s.is_active, s.created_at
ORDER BY s.created_at DESC;

-- ========================================
-- PART 5: Create RLS policies for partner data (if RLS is enabled)
-- ========================================

-- Check if RLS is enabled, if not skip this section
DO $$ 
BEGIN
    -- Enable Row Level Security (if not already enabled)
    IF NOT EXISTS (
        SELECT 1 FROM pg_tables 
        WHERE tablename = 'users' 
        AND rowsecurity = true
    ) THEN
        ALTER TABLE users ENABLE ROW LEVEL SECURITY;
    END IF;
    
    IF NOT EXISTS (
        SELECT 1 FROM pg_tables 
        WHERE tablename = 'short_urls' 
        AND rowsecurity = true
    ) THEN
        ALTER TABLE short_urls ENABLE ROW LEVEL SECURITY;
    END IF;
END $$;

-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Allow partner registration" ON users;
DROP POLICY IF EXISTS "Allow reading partner analytics" ON users;

-- Create policy for partner data insertion (allow from API)
CREATE POLICY "Allow partner registration" ON users
    FOR INSERT
    WITH CHECK (true);

-- Create policy for partner data selection (public read for analytics)
CREATE POLICY "Allow reading partner analytics" ON users
    FOR SELECT
    USING (true);

-- ========================================
-- PART 6: Create or replace helper functions
-- ========================================

-- Drop existing function if it exists
DROP FUNCTION IF EXISTS get_partner_stats();

-- Function to get partner statistics
CREATE OR REPLACE FUNCTION get_partner_stats()
RETURNS TABLE (
    total_partners BIGINT,
    active_partners BIGINT,
    pending_partners BIGINT,
    total_conversions BIGINT,
    partners_by_type JSON,
    partners_by_tier JSON,
    partners_by_region JSON
) AS $$
BEGIN
    RETURN QUERY
    WITH partner_counts AS (
        SELECT 
            COUNT(*) FILTER (WHERE source = 'partner') as total,
            COUNT(*) FILTER (WHERE source = 'partner' AND partner_status = 'Active') as active,
            COUNT(*) FILTER (WHERE source = 'partner' AND partner_status = 'Pending Review') as pending,
            COUNT(*) FILTER (WHERE source = 'partner' AND registration_completed = true) as conversions
        FROM users
    ),
    type_counts AS (
        SELECT json_object_agg(utm_partner_type, cnt) as by_type
        FROM (
            SELECT utm_partner_type, COUNT(*) as cnt
            FROM users
            WHERE source = 'partner' AND utm_partner_type IS NOT NULL
            GROUP BY utm_partner_type
        ) t
    ),
    tier_counts AS (
        SELECT json_object_agg(utm_partner_tier, cnt) as by_tier
        FROM (
            SELECT utm_partner_tier, COUNT(*) as cnt
            FROM users
            WHERE source = 'partner' AND utm_partner_tier IS NOT NULL
            GROUP BY utm_partner_tier
        ) t
    ),
    region_counts AS (
        SELECT json_object_agg(utm_partner_region, cnt) as by_region
        FROM (
            SELECT utm_partner_region, COUNT(*) as cnt
            FROM users
            WHERE source = 'partner' AND utm_partner_region IS NOT NULL
            GROUP BY utm_partner_region
        ) t
    )
    SELECT 
        pc.total,
        pc.active,
        pc.pending,
        pc.conversions,
        tc.by_type,
        ti.by_tier,
        rc.by_region
    FROM partner_counts pc
    CROSS JOIN type_counts tc
    CROSS JOIN tier_counts ti
    CROSS JOIN region_counts rc;
END;
$$ LANGUAGE plpgsql;

-- ========================================
-- PART 7: Verification queries
-- ========================================

-- Verify all columns were added successfully
DO $$
DECLARE
    missing_columns TEXT[];
    required_columns TEXT[] := ARRAY[
        'source', 'lead_type', 'city', 'state', 'country', 'address', 'pincode',
        'utm_partner_type', 'utm_partner_tier', 'utm_partner_region', 'utm_commission_model',
        'partner_type', 'website', 'employee_count', 'annual_revenue',
        'partnership_goals', 'target_market', 'current_challenges', 'interested_services',
        'partner_status', 'partner_onboarding_status', 'partner_approved_date', 'partner_approved_by',
        'landing_page', 'ip_address', 'user_agent', 'registration_attempts', 'updated_at'
    ];
    col TEXT;
BEGIN
    missing_columns := ARRAY[]::TEXT[];
    
    FOREACH col IN ARRAY required_columns
    LOOP
        IF NOT EXISTS (
            SELECT 1 FROM information_schema.columns 
            WHERE table_name = 'users' 
            AND column_name = col
        ) THEN
            missing_columns := array_append(missing_columns, col);
        END IF;
    END LOOP;
    
    IF array_length(missing_columns, 1) > 0 THEN
        RAISE NOTICE 'Warning: The following columns are still missing: %', missing_columns;
    ELSE
        RAISE NOTICE 'Success: All required columns have been added!';
    END IF;
END $$;

-- ========================================
-- PART 8: Test the setup
-- ========================================

-- Test query to verify partner columns exist
SELECT 
    column_name, 
    data_type,
    is_nullable,
    column_default
FROM information_schema.columns 
WHERE table_name = 'users' 
AND column_name IN (
    'source', 'city', 'state', 'utm_partner_type', 
    'utm_partner_tier', 'partner_status'
)
ORDER BY column_name;

-- Test the partner stats function
SELECT * FROM get_partner_stats();

-- ========================================
-- PART 9: Refresh schema cache
-- ========================================

-- IMPORTANT: Refresh the schema cache after adding columns
NOTIFY pgrst, 'reload schema';

-- ========================================
-- SUCCESS MESSAGE
-- ========================================
-- Partner tracking columns and infrastructure successfully added!
-- 
-- SUMMARY OF CHANGES:
-- ✅ Added address fields (city, state, country, address, pincode)
-- ✅ Added partner tracking fields
-- ✅ Added partner UTM parameters
-- ✅ Created analytics views
-- ✅ Created helper functions
-- ✅ Added performance indexes
--
-- You can now:
-- 1. Track partner registrations separately from customers
-- 2. Store partner-specific UTM parameters
-- 3. Analyze partner performance with dedicated views
-- 4. Generate partner statistics with helper functions
--
-- Next steps:
-- 1. Test partner registration at /partner-url-builder.html
-- 2. Submit test data through /api/partner-lead
-- 3. View analytics at /partner-analytics.html