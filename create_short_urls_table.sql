-- Create short_urls table for campaign URL management
-- Run this in Supabase SQL Editor

CREATE TABLE IF NOT EXISTS short_urls (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  short_code VARCHAR(50) UNIQUE NOT NULL,
  long_url TEXT NOT NULL,
  
  -- Campaign Details
  campaign_name VARCHAR(255),
  created_by VARCHAR(255), -- Team member who created it
  
  -- UTM Parameters (for easy querying)
  utm_source VARCHAR(100),
  utm_medium VARCHAR(100),
  utm_campaign VARCHAR(255),
  utm_state VARCHAR(100),
  utm_language VARCHAR(50),
  utm_category VARCHAR(100),
  utm_agent VARCHAR(100),
  utm_content VARCHAR(255),
  utm_term VARCHAR(255),
  
  -- Custom parameters as JSON
  custom_params JSONB,
  
  -- Analytics
  clicks INTEGER DEFAULT 0,
  unique_clicks INTEGER DEFAULT 0,
  last_clicked TIMESTAMP,
  
  -- Metadata
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),
  is_active BOOLEAN DEFAULT true,
  notes TEXT
);

-- Create indexes for performance
CREATE INDEX idx_short_code ON short_urls(short_code);
CREATE INDEX idx_campaign_name ON short_urls(campaign_name);
CREATE INDEX idx_created_by ON short_urls(created_by);
CREATE INDEX idx_utm_source ON short_urls(utm_source);
CREATE INDEX idx_utm_campaign ON short_urls(utm_campaign);
CREATE INDEX idx_created_at ON short_urls(created_at DESC);

-- Create a view for analytics
CREATE OR REPLACE VIEW campaign_analytics AS
SELECT 
  s.campaign_name,
  s.short_code,
  s.utm_source,
  s.utm_medium,
  s.utm_campaign,
  s.created_by,
  s.clicks,
  s.created_at,
  COUNT(DISTINCT u.id) as leads_generated,
  CASE 
    WHEN s.clicks > 0 THEN ROUND((COUNT(DISTINCT u.id)::DECIMAL / s.clicks) * 100, 2)
    ELSE 0
  END as conversion_rate
FROM short_urls s
LEFT JOIN users u ON u.utm_campaign = s.utm_campaign 
  AND u.utm_source = s.utm_source
GROUP BY s.id, s.campaign_name, s.short_code, s.utm_source, 
         s.utm_medium, s.utm_campaign, s.created_by, s.clicks, s.created_at;

-- Grant permissions (adjust based on your needs)
GRANT ALL ON short_urls TO authenticated;
GRANT ALL ON campaign_analytics TO authenticated;