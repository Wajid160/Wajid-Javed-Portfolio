export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const { session_id, message, source } = req.body;

        // Ensure the environment variable is set
        const n8nWebhookUrl = process.env.N8N_CHAT_WEBHOOK_URL;

        if (!n8nWebhookUrl) {
            console.error('N8N_CHAT_WEBHOOK_URL is not set');
            return res.status(500).json({ error: 'Server configuration error' });
        }

        const response = await fetch(n8nWebhookUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                session_id,
                message,
                source: source || 'portfolio',
            }),
        });

        if (!response.ok) {
            console.error(`n8n webhook error: ${response.status} ${response.statusText}`);
            return res.status(response.status).json({ error: 'Error connecting to AI service' });
        }

        const data = await response.json();
        return res.status(200).json(data);

    } catch (error) {
        console.error('Proxy error:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
}
