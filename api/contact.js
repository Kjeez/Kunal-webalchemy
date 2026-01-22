import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  // Check environment variables
  if (!process.env.MAIL_USER || !process.env.MAIL_PASS || !process.env.MAIL_RECIPIENT) {
    console.error('Missing environment variables');
    return res.status(500).json({
      success: false,
      message: 'Server configuration error. Please contact support.'
    });
  }

  try {
    const { name, email, phone, message } = req.body;

    if (!name || !email) {
      return res.status(400).json({ success: false, message: 'Name and email are required' });
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS
      }
    });

    const messageSection = message ? `
              <table width="100%" style="margin-bottom: 20px;">
                <tr>
                  <td style="background: rgba(255,255,255,0.05); border-radius: 12px; padding: 20px; border-left: 4px solid #f59e0b;">
                    <p style="color: #64748b; font-size: 12px; margin: 0 0 5px 0; text-transform: uppercase;">Message</p>
                    <p style="color: #e2e8f0; font-size: 16px; margin: 0; line-height: 1.6;">${message}</p>
                  </td>
                </tr>
              </table>` : '';

    const htmlTemplate = `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="margin: 0; padding: 0; font-family: 'Segoe UI', sans-serif; background-color: #0a0e27;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #0a0e27; padding: 40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background: linear-gradient(135deg, #111633 0%, #0a0e27 100%); border-radius: 16px; border: 1px solid rgba(255,255,255,0.1);">
          <tr>
            <td style="background: linear-gradient(90deg, #06b6d4 0%, #2563eb 100%); padding: 30px; text-align: center;">
              <h1 style="margin: 0; color: #0a0e27; font-size: 28px;">New Contact Request</h1>
            </td>
          </tr>
          <tr>
            <td style="padding: 40px 30px;">
              <table width="100%" style="margin-bottom: 20px;">
                <tr><td style="background: rgba(255,255,255,0.05); border-radius: 12px; padding: 20px; border-left: 4px solid #06b6d4;">
                  <p style="color: #64748b; font-size: 12px; margin: 0 0 5px 0;">NAME</p>
                  <p style="color: #ffffff; font-size: 18px; margin: 0; font-weight: 600;">${name}</p>
                </td></tr>
              </table>
              <table width="100%" style="margin-bottom: 20px;">
                <tr><td style="background: rgba(255,255,255,0.05); border-radius: 12px; padding: 20px; border-left: 4px solid #8b5cf6;">
                  <p style="color: #64748b; font-size: 12px; margin: 0 0 5px 0;">EMAIL</p>
                  <p style="color: #ffffff; font-size: 18px; margin: 0; font-weight: 600;">${email}</p>
                </td></tr>
              </table>
              <table width="100%" style="margin-bottom: 20px;">
                <tr><td style="background: rgba(255,255,255,0.05); border-radius: 12px; padding: 20px; border-left: 4px solid #10b981;">
                  <p style="color: #64748b; font-size: 12px; margin: 0 0 5px 0;">PHONE</p>
                  <p style="color: #ffffff; font-size: 18px; margin: 0; font-weight: 600;">${phone || 'Not provided'}</p>
                </td></tr>
              </table>
              ${messageSection}
            </td>
          </tr>
          <tr>
            <td style="background: rgba(255,255,255,0.02); padding: 20px 30px; text-align: center; border-top: 1px solid rgba(255,255,255,0.05);">
              <p style="color: #64748b; font-size: 12px; margin: 0;">Sent from WebAlchemy Website</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;

    await transporter.sendMail({
      from: `"WebAlchemy Website" <${process.env.MAIL_USER}>`,
      to: process.env.MAIL_RECIPIENT,
      subject: `New Contact: ${name}`,
      html: htmlTemplate
    });

    return res.status(200).json({ success: true, message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Email Error:', error.message);
    return res.status(500).json({ success: false, message: 'Failed to send message. Please try again.' });
  }
}
