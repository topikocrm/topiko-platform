-- Add CRM-specific columns to the users table
-- Run this in Supabase SQL Editor

-- Add SDR assignment columns
ALTER TABLE users 
ADD COLUMN IF NOT EXISTS assigned_sdr_id TEXT,
ADD COLUMN IF NOT EXISTS assignment_date TIMESTAMP WITH TIME ZONE,
ADD COLUMN IF NOT EXISTS lead_status TEXT DEFAULT 'New';

-- Add lead pipeline status columns
ALTER TABLE users 
ADD COLUMN IF NOT EXISTS lead_pipeline_status TEXT DEFAULT 'New',
ADD COLUMN IF NOT EXISTS status_updated_at TIMESTAMP WITH TIME ZONE;

-- Add follow-up tracking columns
ALTER TABLE users 
ADD COLUMN IF NOT EXISTS next_followup_date TIMESTAMP WITH TIME ZONE,
ADD COLUMN IF NOT EXISTS followup_set_at TIMESTAMP WITH TIME ZONE;

-- Add notes columns
ALTER TABLE users 
ADD COLUMN IF NOT EXISTS lead_notes TEXT,
ADD COLUMN IF NOT EXISTS notes_updated_at TIMESTAMP WITH TIME ZONE;

-- Add general CRM tracking
ALTER TABLE users 
ADD COLUMN IF NOT EXISTS last_crm_update TIMESTAMP WITH TIME ZONE,
ADD COLUMN IF NOT EXISTS crm_updated_by TEXT;

-- Add index for better query performance
CREATE INDEX IF NOT EXISTS idx_users_assigned_sdr ON users(assigned_sdr_id);
CREATE INDEX IF NOT EXISTS idx_users_pipeline_status ON users(lead_pipeline_status);
CREATE INDEX IF NOT EXISTS idx_users_followup_date ON users(next_followup_date);
CREATE INDEX IF NOT EXISTS idx_users_lead_status ON users(lead_status);

-- IMPORTANT: Refresh the schema cache after adding columns
NOTIFY pgrst, 'reload schema';