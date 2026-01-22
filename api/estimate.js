const nodemailer = require('nodemailer');

module.exports = async (req, res) => {
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
    console.error('Missing environment variables:', {
      MAIL_USER: !!process.env.MAIL_USER,
      MAIL_PASS: !!process.env.MAIL_PASS,
      MAIL_RECIPIENT: !!process.env.MAIL_RECIPIENT
    });
    return res.status(500).json({
      success: false,
      message: 'Server configuration error. Please contact support.'
    });
  }

  try {
    const { name, email, phone, service, subService, subject } = req.body;

    if (!name || !email || !phone) {
      return res.status(400).json({ success: false, message: 'Name, email, and phone are required' });
    }

    // Create transporter for each request (serverless best practice)
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS
      }
    });

    const subServiceText = subService ? `<br><span style="color: #94a3b8; font-size: 14px; margin-top: 8px; display: inline-block;">${subService}</span>` : '';
    const briefSection = subject ? `
              <table width="100%" style="margin-bottom: 15px;">
                <tr>
                  <td style="background: rgba(16, 185, 129, 0.1); border-radius: 12px; padding: 20px; border: 1px solid rgba(16, 185, 129, 0.2);">
                    <p style="color: #10b981; font-size: 11px; margin: 0 0 8px 0; text-transform: uppercase; font-weight: bold;">Project Brief</p>
                    <p style="color: #e2e8f0; font-size: 15px; margin: 0; line-height: 1.6;">${subject}</p>
                  </td>
                </tr>
              </table>` : '';

    const htmlTemplate = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #0a0e27;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #0a0e27; padding: 40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background: linear-gradient(135deg, #111633 0%, #0a0e27 100%); border-radius: 16px; border: 1px solid rgba(255,255,255,0.1); overflow: hidden;">
          <tr>
            <td style="background: linear-gradient(90deg, #10b981 0%, #06b6d4 100%); padding: 30px; text-align: center;">
              <h1 style="margin: 0; color: #0a0e27; font-size: 28px; font-weight: bold;">New Estimate Request</h1>
            </td>
          </tr>
          <tr>
            <td style="padding: 30px 30px 0 30px; text-align: center;">
              <span style="display: inline-block; background: linear-gradient(90deg, #06b6d4, #8b5cf6); color: white; padding: 8px 20px; border-radius: 20px; font-size: 14px; font-weight: bold;">
                ${service || 'General Inquiry'}
              </span>
              ${subServiceText}
            </td>
          </tr>
          <tr>
            <td style="padding: 30px;">
              <p style="color: #94a3b8; font-size: 14px; margin: 0 0 20px 0; text-transform: uppercase; letter-spacing: 2px;">Client Details</p>
              
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 15px;">
                <tr>
                  <td width="48%" style="background: rgba(255,255,255,0.05); border-radius: 12px; padding: 15px; vertical-align: top;">
                    <p style="color: #64748b; font-size: 11px; margin: 0 0 5px 0; text-transform: uppercase;">Name</p>
                    <p style="color: #ffffff; font-size: 16px; margin: 0; font-weight: 600;">${name || 'Not provided'}</p>
                  </td>
                  <td width="4%"></td>
                  <td width="48%" style="background: rgba(255,255,255,0.05); border-radius: 12px; padding: 15px; vertical-align: top;">
                    <p style="color: #64748b; font-size: 11px; margin: 0 0 5px 0; text-transform: uppercase;">Phone</p>
                    <p style="color: #ffffff; font-size: 16px; margin: 0; font-weight: 600;">${phone || 'Not provided'}</p>
                  </td>
                </tr>
              </table>
              
              <table width="100%" style="margin-bottom: 15px;">
                <tr>
                  <td style="background: rgba(255,255,255,0.05); border-radius: 12px; padding: 15px;">
                    <p style="color: #64748b; font-size: 11px; margin: 0 0 5px 0; text-transform: uppercase;">Email</p>
                    <p style="color: #ffffff; font-size: 16px; margin: 0; font-weight: 600;">${email || 'Not provided'}</p>
                  </td>
                </tr>
              </table>
              
              ${briefSection}
              
              <table width="100%" style="margin-top: 25px;">
                <tr>
                  <td align="center">
                    <a href="mailto:${email}" style="display: inline-block; background: linear-gradient(90deg, #06b6d4 0%, #10b981 100%); color: #0a0e27; padding: 14px 30px; border-radius: 10px; text-decoration: none; font-weight: bold; font-size: 14px;">
                      Reply to Client
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td style="background: rgba(255,255,255,0.02); padding: 20px 30px; text-align: center; border-top: 1px solid rgba(255,255,255,0.05);">
              <p style="color: #64748b; font-size: 12px; margin: 0;">WebAlchemy Lead</p>
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
      subject: `New Estimate Request: ${service || 'General'} - ${name}`,
      html: htmlTemplate
    });

    console.log(`Estimate email sent from ${name} for ${service}`);
    return res.status(200).json({ success: true, message: 'Request submitted successfully!' });
  } catch (error) {
    console.error('Email Error:', error.message);
    return res.status(500).json({ success: false, message: 'Failed to submit request. Please try again.' });
  }
};
