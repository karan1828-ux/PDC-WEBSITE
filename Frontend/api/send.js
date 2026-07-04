export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, message } = req.body;

  if (!name || !email) {
    return res.status(400).json({ error: 'Name and email are required' });
  }

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Read the API key from environment variables (works in Vercel)
        'Authorization': `Bearer ${process.env.VITE_RESEND_API_KEY}`
      },
      body: JSON.stringify({
        from: 'Acme <onboarding@resend.dev>',
        to: ['delivered@resend.dev'], // Make sure to replace this with your verified email later
        subject: `New Contact Query from ${name}`,
        html: `
          <!DOCTYPE html>
          <html>
            <head>
              <meta charset="utf-8">
              <title>New Contact Request</title>
            </head>
            <body style="font-family: Arial, sans-serif; background-color: #f4f4f5; margin: 0; padding: 20px;">
              <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
                <div style="background-color: #0f274d; padding: 20px; text-align: center;">
                  <h2 style="color: #ffffff; margin: 0; font-size: 24px; letter-spacing: 1px;">New Contact Request</h2>
                </div>
                <div style="padding: 30px;">
                  <p style="margin: 0 0 15px; font-size: 16px; color: #334155;">You have received a new message from your website's contact form.</p>
                  
                  <div style="background-color: #f8fafc; border-left: 4px solid #f0a04b; padding: 15px; margin-bottom: 20px; border-radius: 0 4px 4px 0;">
                    <p style="margin: 0 0 10px; font-size: 14px;"><strong style="color: #0f274d;">Name:</strong> <span style="color: #475569;">${name}</span></p>
                    <p style="margin: 0; font-size: 14px;"><strong style="color: #0f274d;">Email:</strong> <a href="mailto:${email}" style="color: #f0a04b; text-decoration: none;">${email}</a></p>
                  </div>

                  <h3 style="color: #0f274d; font-size: 16px; margin: 0 0 10px; border-bottom: 1px solid #e2e8f0; padding-bottom: 5px;">Message Details</h3>
                  <p style="color: #334155; font-size: 15px; line-height: 1.6; margin: 0; white-space: pre-wrap;">${message}</p>
                </div>
                <div style="background-color: #f1f5f9; padding: 15px; text-align: center; border-top: 1px solid #e2e8f0;">
                  <p style="margin: 0; font-size: 12px; color: #64748b;">This email was generated from your website's contact form.</p>
                </div>
              </div>
            </body>
          </html>
        `
      })
    });

    if (response.ok) {
      const data = await response.json();
      return res.status(200).json(data);
    } else {
      const errorData = await response.text();
      console.error('Resend API error:', errorData);
      return res.status(response.status).json({ error: errorData });
    }
  } catch (error) {
    console.error('Network error:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
