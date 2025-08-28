-- Add Partner-specific columns to users and short_urls tables
-- Run this in Supabase SQL Editor

-- ========================================
-- PART 1: Add columns to users table for partner data
-- ========================================

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

-- Create indexes for partner queries
CREATE INDEX IF NOT EXISTS idx_users_source ON users(source);
CREATE INDEX IF NOT EXISTS idx_users_partner_type ON users(partner_type);
CREATE INDEX IF NOT EXISTS idx_users_partner_tier ON users(utm_partner_tier);
CREATE INDEX IF NOT EXISTS idx_users_partner_status ON users(partner_status);
CREATE INDEX IF NOT EXISTS idx_users_lead_type ON users(lead_type);

-- Create indexes for short_urls partner queries
CREATE INDEX IF NOT EXISTS idx_short_urls_source ON short_urls(source);
CREATE INDEX IF NOT EXISTS idx_short_urls_partner_type ON short_urls(utm_partner_type);

-- Create compound index for partner analytics
CREATE INDEX IF NOT EXISTS idx_partner_analytics ON users(source, partner_status, created_at);

-- ========================================
-- PART 4: Create views for partner analytics (optional)
-- ========================================

-- Create a view for partner analytics
CREATE OR REPLACE VIEW partner_analytics AS
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
CREATE OR REPLACE VIEW partner_campaign_performance AS
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
-- PART 5: Create RLS policies for partner data (optional)
-- ========================================

-- Enable Row Level Security (if not already enabled)
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE short_urls ENABLE ROW LEVEL SECURITY;

-- Create policy for partner data insertion (allow from API)
CREATE POLICY "Allow partner registration" ON users
    FOR INSERT
    WITH CHECK (source = 'partner' OR source = 'customer');

-- Create policy for partner data selection (public read for analytics)
CREATE POLICY "Allow reading partner analytics" ON users
    FOR SELECT
    USING (true);

-- ========================================
-- PART 6: Create helper functions
-- ========================================

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
    SELECT 
        COUNT(*) FILTER (WHERE source = 'partner') as total_partners,
        COUNT(*) FILTER (WHERE source = 'partner' AND partner_status = 'Active') as active_partners,
        COUNT(*) FILTER (WHERE source = 'partner' AND partner_status = 'Pending Review') as pending_partners,
        COUNT(*) FILTER (WHERE source = 'partner' AND registration_completed = true) as total_conversions,
        json_object_agg(DISTINCT utm_partner_type, type_count) FILTER (WHERE utm_partner_type IS NOT NULL) as partners_by_type,
        json_object_agg(DISTINCT utm_partner_tier, tier_count) FILTER (WHERE utm_partner_tier IS NOT NULL) as partners_by_tier,
        json_object_agg(DISTINCT utm_partner_region, region_count) FILTER (WHERE utm_partner_region IS NOT NULL) as partners_by_region
    FROM (
        SELECT 
            source, partner_status, registration_completed,
            utm_partner_type,
            COUNT(*) OVER (PARTITION BY utm_partner_type) as type_count,
            utm_partner_tier,
            COUNT(*) OVER (PARTITION BY utm_partner_tier) as tier_count,
            utm_partner_region,
            COUNT(*) OVER (PARTITION BY utm_partner_region) as region_count
        FROM users
    ) subquery;
END;
$$ LANGUAGE plpgsql;

-- ========================================
-- PART 7: Sample queries for testing
-- ========================================

-- Test query to verify partner columns exist
-- SELECT column_name, data_type 
-- FROM information_schema.columns 
-- WHERE table_name = 'users' 
-- AND column_name LIKE '%partner%';

-- Test query to get partner statistics
-- SELECT * FROM get_partner_stats();

-- Test query to view partner analytics
-- SELECT * FROM partner_analytics LIMIT 10;

-- ========================================
-- PART 8: Refresh schema cache
-- ========================================

-- IMPORTANT: Refresh the schema cache after adding columns
NOTIFY pgrst, 'reload schema';

-- ========================================
-- SUCCESS MESSAGE
-- ========================================
-- Partner tracking columns and infrastructure successfully added!
-- You can now:
-- 1. Track partner registrations separately from customers
-- 2. Store partner-specific UTM parameters
-- 3. Analyze partner performance with dedicated views
-- 4. Generate partner statistics with helper functions