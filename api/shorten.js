// Vercel Serverless Function for URL Shortening
// This creates a short URL and stores the mapping

export default async function handler(req, res) {
    // Enable CORS
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
    res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');
    
    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }
    
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }
    
    try {
        const { longUrl, campaignData } = req.body;
        
        if (!longUrl) {
            return res.status(400).json({ error: 'longUrl is required' });
        }
        
        // Generate short code
        const shortCode = generateShortCode();
        
        // In production, you would store this in a database
        // For now, we'll use Vercel KV or return a mock response
        const shortUrl = {
            shortCode: shortCode,
            shortUrl: `${process.env.VERCEL_URL || 'https://topiko.app'}/c/${shortCode}`,
            longUrl: longUrl,
            campaignData: campaignData || {},
            createdAt: new Date().toISOString(),
            clicks: 0
        };
        
        // TODO: Store in database
        // await storeUrlMapping(shortUrl);
        
        res.status(200).json(shortUrl);
        
    } catch (error) {
        console.error('Error creating short URL:', error);
        res.status(500).json({ error: 'Failed to create short URL' });
    }
}

function generateShortCode() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < 6; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
}