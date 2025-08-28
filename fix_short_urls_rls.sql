-- Fix Row Level Security (RLS) policies for short_urls table
-- This fixes the "new row violates row-level security policy" error

-- ========================================
-- Option 1: Disable RLS (Quickest Fix)
-- ========================================
-- Uncomment this line if you want to disable RLS completely
-- ALTER TABLE short_urls DISABLE ROW LEVEL SECURITY;

-- ========================================
-- Option 2: Create Proper RLS Policies (Recommended)
-- ========================================

-- First, check if RLS is enabled
DO $$ 
BEGIN
    -- Check RLS status
    IF EXISTS (
        SELECT 1 FROM pg_tables 
        WHERE tablename = 'short_urls' 
        AND rowsecurity = true
    ) THEN
        RAISE NOTICE 'RLS is enabled on short_urls table. Creating policies...';
    ELSE
        RAISE NOTICE 'RLS is not enabled on short_urls table.';
    END IF;
END $$;

-- Drop existing policies to start fresh
DROP POLICY IF EXISTS "Allow all operations on short_urls" ON short_urls;
DROP POLICY IF EXISTS "Enable insert for all users" ON short_urls;
DROP POLICY IF EXISTS "Enable read for all users" ON short_urls;
DROP POLICY IF EXISTS "Enable update for all users" ON short_urls;
DROP POLICY IF EXISTS "Enable delete for all users" ON short_urls;

-- Create a permissive policy for all operations
-- This allows anyone to create, read, update short URLs
CREATE POLICY "Enable all operations for short_urls" ON short_urls
    FOR ALL
    USING (true)
    WITH CHECK (true);

-- Alternative: Create separate policies for each operation
-- (Comment out the above policy and uncomment these if you prefer granular control)

-- -- Allow anyone to INSERT (create new short URLs)
-- CREATE POLICY "Enable insert for all users" ON short_urls
--     FOR INSERT
--     WITH CHECK (true);

-- -- Allow anyone to SELECT (view short URLs)
-- CREATE POLICY "Enable read for all users" ON short_urls
--     FOR SELECT
--     USING (true);

-- -- Allow anyone to UPDATE their own short URLs (optional)
-- CREATE POLICY "Enable update for all users" ON short_urls
--     FOR UPDATE
--     USING (true)
--     WITH CHECK (true);

-- -- Allow anyone to DELETE (optional, you might want to restrict this)
-- CREATE POLICY "Enable delete for all users" ON short_urls
--     FOR DELETE
--     USING (true);

-- ========================================
-- Verify the fix
-- ========================================

-- Check if policies exist
SELECT 
    schemaname,
    tablename,
    policyname,
    permissive,
    roles,
    cmd,
    qual,
    with_check
FROM pg_policies
WHERE tablename = 'short_urls';

-- Test insert (this should work now)
-- INSERT INTO short_urls (short_code, long_url, campaign_name, created_by, utm_source, utm_medium)
-- VALUES ('TEST123', 'https://example.com', 'Test Campaign', 'test@example.com', 'test', 'test')
-- ON CONFLICT (short_code) DO NOTHING;

-- ========================================
-- Success message
-- ========================================
-- RLS policies have been fixed!
-- You should now be able to create campaign URLs without errors.
-- 
-- If you still get errors, run this command to disable RLS completely:
-- ALTER TABLE short_urls DISABLE ROW LEVEL SECURITY;