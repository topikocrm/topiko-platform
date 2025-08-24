// Vercel Serverless Function for URL Redirection
// Handles short URL redirects and tracks clicks

// In-memory storage for demo (in production, use a database)
const urlMappings = {
    'DEMO01': 'https://topiko.app/lead-form.html?utm_source=demo&utm_medium=test&utm_campaign=demo_campaign',
    'TEST01': 'https://topiko.app/lead-form.html?utm_source=test&utm_medium=social&utm_campaign=test_campaign'
};

export default async function handler(req, res) {
    const { code } = req.query;
    
    if (!code) {
        return res.status(400).json({ error: 'Short code is required' });
    }
    
    try {
        // In production, fetch from database
        // const mapping = await getUrlMapping(code);
        const longUrl = urlMappings[code.toUpperCase()];
        
        if (!longUrl) {
            // Redirect to homepage if short code not found
            res.redirect(301, 'https://topiko.app');
            return;
        }
        
        // Track the click (async, don't wait)
        trackClick(code, req);
        
        // Redirect to the long URL
        res.redirect(301, longUrl);
        
    } catch (error) {
        console.error('Error handling redirect:', error);
        res.redirect(301, 'https://topiko.app');
    }
}

async function trackClick(shortCode, req) {
    try {
        const clickData = {
            shortCode: shortCode,
            clickedAt: new Date().toISOString(),
            userAgent: req.headers['user-agent'] || 'Unknown',
            referrer: req.headers['referer'] || 'Direct',
            ip: req.headers['x-forwarded-for'] || req.connection.remoteAddress
        };
        
        // TODO: Store click data in database
        console.log('Click tracked:', clickData);
        
    } catch (error) {
        console.error('Error tracking click:', error);
    }
}