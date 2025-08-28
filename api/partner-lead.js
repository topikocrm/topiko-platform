import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client
const supabaseUrl = 'https://xssbtsfjtwjholygdbqo.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhzc2J0c2ZqdHdqaG9seWdkYnFvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTMxOTk5MjUsImV4cCI6MjA2ODc3NTkyNX0.eOSIHTpvllcH-fK6MARoe5HPiXlujsrzUWfAhmUh94k';
const supabase = createClient(supabaseUrl, supabaseKey);

export default async function handler(req, res) {
    // Handle CORS - Allow TopikoPartner.com and localhost for testing
    const allowedOrigins = [
        'https://topikopartner.com',
        'https://www.topikopartner.com',
        'http://localhost:3000',
        'http://localhost:3001',
        'http://127.0.0.1:3000'
    ];
    
    const origin = req.headers.origin;
    if (allowedOrigins.includes(origin)) {
        res.setHeader('Access-Control-Allow-Origin', origin);
    } else if (process.env.NODE_ENV === 'development') {
        // Allow any origin in development
        res.setHeader('Access-Control-Allow-Origin', '*');
    }
    
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Credentials', 'true');

    // Handle preflight
    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    // Only allow POST
    if (req.method !== 'POST') {
        return res.status(405).json({ 
            error: 'Method not allowed',
            message: 'This endpoint only accepts POST requests'
        });
    }

    try {
        const {
            // Basic partner information
            name,
            company_name,
            email,
            phone,
            website,
            
            // Partner details
            partner_type,
            business_category,
            employee_count,
            annual_revenue,
            
            // Address information
            address,
            city,
            state,
            country,
            pincode,
            
            // Partner goals and interests
            partnership_goals,
            target_market,
            current_challenges,
            interested_services,
            
            // UTM parameters (standard)
            utm_source,
            utm_medium,
            utm_campaign,
            utm_term,
            utm_content,
            
            // Partner-specific UTM parameters
            utm_partner_type,
            utm_partner_tier,
            utm_partner_region,
            utm_commission_model,
            utm_partner_campaign,
            utm_target_market,
            utm_tracking_code,
            
            // Additional tracking
            partner_id,
            referrer_url,
            landing_page,
            ip_address,
            user_agent,
            
            // Any custom parameters
            custom_params
        } = req.body;

        // Validate required fields
        if (!name || !email || !phone) {
            return res.status(400).json({ 
                error: 'Missing required fields',
                message: 'Name, email, and phone are required',
                required_fields: ['name', 'email', 'phone']
            });
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({ 
                error: 'Invalid email format',
                message: 'Please provide a valid email address'
            });
        }

        // Validate phone (Indian format - 10 digits)
        const phoneRegex = /^[6-9]\d{9}$/;
        const cleanPhone = phone.replace(/[\s\-\+\(\)]/g, '').replace(/^91/, '');
        if (!phoneRegex.test(cleanPhone)) {
            return res.status(400).json({ 
                error: 'Invalid phone number',
                message: 'Please provide a valid 10-digit Indian mobile number'
            });
        }

        // Prepare data for database
        const partnerData = {
            // Basic information
            name: name.trim(),
            email: email.toLowerCase().trim(),
            phone: cleanPhone,
            business_name: company_name ? company_name.trim() : null,
            
            // Mark as partner lead
            source: 'partner',
            lead_type: 'partner_registration',
            
            // Partner details
            partner_type: partner_type || null,
            website: website || null,
            employee_count: employee_count || null,
            annual_revenue: annual_revenue || null,
            
            // Address
            address: address || null,
            city: city || null,
            state: state || null,
            country: country || 'India',
            pincode: pincode || null,
            
            // Goals and interests
            partnership_goals: partnership_goals || null,
            target_market: target_market || null,
            current_challenges: current_challenges || null,
            interested_services: interested_services || null,
            
            // Standard UTM parameters
            utm_source: utm_source || 'partner_direct',
            utm_medium: utm_medium || 'partner',
            utm_campaign: utm_campaign || null,
            utm_term: utm_term || null,
            utm_content: utm_content || null,
            
            // Partner-specific UTM parameters
            utm_partner_type: utm_partner_type || null,
            utm_partner_tier: utm_partner_tier || null,
            utm_partner_region: utm_partner_region || null,
            utm_commission_model: utm_commission_model || null,
            
            // Store additional partner UTMs in custom_params
            custom_params: {
                ...(custom_params || {}),
                partner_campaign: utm_partner_campaign || null,
                target_market: utm_target_market || null,
                tracking_code: utm_tracking_code || null,
                partner_id: partner_id || null
            },
            
            // Tracking information
            referrer: referrer_url || req.headers.referer || null,
            ip_address: ip_address || req.headers['x-forwarded-for'] || req.connection.remoteAddress,
            user_agent: user_agent || req.headers['user-agent'] || null,
            landing_page: landing_page || null,
            
            // Metadata
            created_at: new Date().toISOString(),
            registration_completed: true,
            lead_status: 'New',
            lead_pipeline_status: 'Partner Lead',
            
            // Partner-specific status
            partner_status: 'Pending Review',
            partner_onboarding_status: 'Not Started'
        };

        // Check if partner already exists
        const { data: existingPartner, error: checkError } = await supabase
            .from('users')
            .select('id, email, partner_status')
            .eq('email', partnerData.email)
            .eq('source', 'partner')
            .single();

        if (existingPartner) {
            // Update existing partner record
            const { data: updatedPartner, error: updateError } = await supabase
                .from('users')
                .update({
                    ...partnerData,
                    updated_at: new Date().toISOString(),
                    registration_attempts: (existingPartner.registration_attempts || 0) + 1
                })
                .eq('id', existingPartner.id)
                .select()
                .single();

            if (updateError) {
                console.error('Error updating partner:', updateError);
                return res.status(500).json({ 
                    error: 'Database error',
                    message: 'Failed to update partner record'
                });
            }

            console.log('Partner updated successfully:', updatedPartner.id);
            
            return res.status(200).json({
                success: true,
                message: 'Partner information updated successfully',
                partner_id: updatedPartner.id,
                status: 'updated',
                partner_status: updatedPartner.partner_status
            });
        } else {
            // Create new partner record
            const { data: newPartner, error: insertError } = await supabase
                .from('users')
                .insert([partnerData])
                .select()
                .single();

            if (insertError) {
                console.error('Error creating partner:', insertError);
                
                // Check if it's a duplicate key error
                if (insertError.code === '23505') {
                    return res.status(409).json({ 
                        error: 'Duplicate entry',
                        message: 'A partner with this email already exists'
                    });
                }
                
                return res.status(500).json({ 
                    error: 'Database error',
                    message: 'Failed to create partner record',
                    details: insertError.message
                });
            }

            console.log('Partner created successfully:', newPartner.id);

            // Send welcome email notification (optional)
            // You can integrate with your email service here
            
            return res.status(201).json({
                success: true,
                message: 'Partner registration successful',
                partner_id: newPartner.id,
                status: 'created',
                partner_status: newPartner.partner_status,
                next_steps: [
                    'Our partnership team will review your application',
                    'You will receive an email within 24-48 hours',
                    'Once approved, you will get access to partner portal'
                ]
            });
        }
    } catch (error) {
        console.error('Partner API Error:', error);
        return res.status(500).json({ 
            error: 'Server error',
            message: 'An unexpected error occurred',
            details: process.env.NODE_ENV === 'development' ? error.message : undefined
        });
    }
}