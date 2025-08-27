export default async function handler(req, res) {
    // Handle CORS
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    // Handle preflight
    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    // Only allow POST
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { mobile, otp, message } = req.body;

    // Validate inputs
    if (!mobile || !otp || !message) {
        return res.status(400).json({ error: 'Missing required parameters' });
    }

    // Validate mobile number (10 digits)
    if (!/^[0-9]{10}$/.test(mobile)) {
        return res.status(400).json({ error: 'Invalid mobile number' });
    }

    // Prepare SMS API data
    const apikey = '3NwCuamS0SnyYDUw';
    const senderid = 'TOPIKO';

    const postData = {
        apikey: apikey,
        senderid: senderid,
        number: mobile,
        message: message,
        format: 'json'
    };

    try {
        // Send SMS via API
        const response = await fetch('http://msg.magictext.in/V2/http-api-post.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(postData)
        });

        if (response.ok) {
            const result = await response.text();
            console.log('SMS API Response:', result);
            
            return res.status(200).json({
                success: true,
                message: 'OTP sent successfully',
                otp: otp // Return OTP for verification
            });
        } else {
            console.error('SMS API Error:', response.status, response.statusText);
            return res.status(500).json({
                error: 'Failed to send OTP',
                details: `API returned ${response.status}`
            });
        }
    } catch (error) {
        console.error('Failed to send OTP:', error);
        return res.status(500).json({
            error: 'Server error',
            message: error.message
        });
    }
}