require('dotenv').config();
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Gmail SMTP Transporter
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS
    },
    ...(process.env.SMTP_ALLOW_SELF_SIGNED === 'true'
        ? { tls: { rejectUnauthorized: false } }
        : {})
});

// Verify transporter connection
transporter.verify((error, success) => {
    if (error) {
        console.error('SMTP Connection Error:', error);
    } else {
        console.log('SMTP Server is ready to send emails');
    }
});

// Email Templates
const getContactEmailTemplate = (data) => {
    const messageSection = data.message ? `
              <table width="100%" style="margin-bottom: 20px;">
                <tr>
                  <td style="background: rgba(255,255,255,0.05); border-radius: 12px; padding: 20px; border-left: 4px solid #f59e0b;">
                    <p style="color: #64748b; font-size: 12px; margin: 0 0 5px 0; text-transform: uppercase;">Message</p>
                    <p style="color: #e2e8f0; font-size: 16px; margin: 0; line-height: 1.6;">${data.message}</p>
                  </td>
                </tr>
              </table>` : '';

    return `
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
            <td style="background: linear-gradient(90deg, #06b6d4 0%, #2563eb 100%); padding: 30px; text-align: center;">
              <h1 style="margin: 0; color: #0a0e27; font-size: 28px; font-weight: bold;">New Contact Request</h1>
            </td>
          </tr>
          <tr>
            <td style="padding: 40px 30px;">
              <p style="color: #94a3b8; font-size: 14px; margin: 0 0 20px 0; text-transform: uppercase; letter-spacing: 2px;">Contact Details</p>
              
              <table width="100%" style="margin-bottom: 20px;">
                <tr>
                  <td style="background: rgba(255,255,255,0.05); border-radius: 12px; padding: 20px; border-left: 4px solid #06b6d4;">
                    <p style="color: #64748b; font-size: 12px; margin: 0 0 5px 0; text-transform: uppercase;">Name</p>
                    <p style="color: #ffffff; font-size: 18px; margin: 0; font-weight: 600;">${data.name || 'Not provided'}</p>
                  </td>
                </tr>
              </table>
              
              <table width="100%" style="margin-bottom: 20px;">
                <tr>
                  <td style="background: rgba(255,255,255,0.05); border-radius: 12px; padding: 20px; border-left: 4px solid #8b5cf6;">
                    <p style="color: #64748b; font-size: 12px; margin: 0 0 5px 0; text-transform: uppercase;">Email</p>
                    <p style="color: #ffffff; font-size: 18px; margin: 0; font-weight: 600;">${data.email || 'Not provided'}</p>
                  </td>
                </tr>
              </table>
              
              <table width="100%" style="margin-bottom: 20px;">
                <tr>
                  <td style="background: rgba(255,255,255,0.05); border-radius: 12px; padding: 20px; border-left: 4px solid #10b981;">
                    <p style="color: #64748b; font-size: 12px; margin: 0 0 5px 0; text-transform: uppercase;">Phone</p>
                    <p style="color: #ffffff; font-size: 18px; margin: 0; font-weight: 600;">${data.phone || 'Not provided'}</p>
                  </td>
                </tr>
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
};

const getEstimateEmailTemplate = (data) => {
    const subServiceText = data.subService ? `<br><span style="color: #94a3b8; font-size: 14px; margin-top: 8px; display: inline-block;">${data.subService}</span>` : '';
    const briefSection = data.subject ? `
              <table width="100%" style="margin-bottom: 15px;">
                <tr>
                  <td style="background: rgba(16, 185, 129, 0.1); border-radius: 12px; padding: 20px; border: 1px solid rgba(16, 185, 129, 0.2);">
                    <p style="color: #10b981; font-size: 11px; margin: 0 0 8px 0; text-transform: uppercase; font-weight: bold;">Project Brief</p>
                    <p style="color: #e2e8f0; font-size: 15px; margin: 0; line-height: 1.6;">${data.subject}</p>
                  </td>
                </tr>
              </table>` : '';

    return `
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
                ${data.service || 'General Inquiry'}
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
                    <p style="color: #ffffff; font-size: 16px; margin: 0; font-weight: 600;">${data.name || 'Not provided'}</p>
                  </td>
                  <td width="4%"></td>
                  <td width="48%" style="background: rgba(255,255,255,0.05); border-radius: 12px; padding: 15px; vertical-align: top;">
                    <p style="color: #64748b; font-size: 11px; margin: 0 0 5px 0; text-transform: uppercase;">Phone</p>
                    <p style="color: #ffffff; font-size: 16px; margin: 0; font-weight: 600;">${data.phone || 'Not provided'}</p>
                  </td>
                </tr>
              </table>
              
              <table width="100%" style="margin-bottom: 15px;">
                <tr>
                  <td style="background: rgba(255,255,255,0.05); border-radius: 12px; padding: 15px;">
                    <p style="color: #64748b; font-size: 11px; margin: 0 0 5px 0; text-transform: uppercase;">Email</p>
                    <p style="color: #ffffff; font-size: 16px; margin: 0; font-weight: 600;">${data.email || 'Not provided'}</p>
                  </td>
                </tr>
              </table>
              
              ${briefSection}
              
              <table width="100%" style="margin-top: 25px;">
                <tr>
                  <td align="center">
                    <a href="mailto:${data.email}" style="display: inline-block; background: linear-gradient(90deg, #06b6d4 0%, #10b981 100%); color: #0a0e27; padding: 14px 30px; border-radius: 10px; text-decoration: none; font-weight: bold; font-size: 14px;">
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
};

// API Routes

// Contact Form Endpoint
app.post('/api/contact', async (req, res) => {
    try {
        if (!process.env.MAIL_USER || !process.env.MAIL_PASS || !process.env.MAIL_RECIPIENT) {
            return res.status(500).json({ success: false, message: 'Server configuration error.' });
        }

        const { name, email, phone, message } = req.body;

        if (!name || !email) {
            return res.status(400).json({ success: false, message: 'Name and email are required' });
        }

        await transporter.sendMail({
            from: `"WebAlchemy Website" <${process.env.MAIL_USER}>`,
            to: process.env.MAIL_RECIPIENT,
            subject: `New Contact: ${name}`,
            html: getContactEmailTemplate({ name, email, phone, message })
        });

        console.log(`Contact email sent from ${name}`);
        res.json({ success: true, message: 'Message sent successfully!' });
    } catch (error) {
        console.error('Email Error:', error);
        res.status(500).json({ success: false, message: 'Failed to send message. Please try again.' });
    }
});

// Estimate Form Endpoint
app.post('/api/estimate', async (req, res) => {
    try {
        if (!process.env.MAIL_USER || !process.env.MAIL_PASS || !process.env.MAIL_RECIPIENT) {
            return res.status(500).json({ success: false, message: 'Server configuration error.' });
        }

        const { name, email, phone, service, subService, subject } = req.body;

        if (!name || !email || !phone) {
            return res.status(400).json({ success: false, message: 'Name, email, and phone are required' });
        }

        await transporter.sendMail({
            from: `"WebAlchemy Website" <${process.env.MAIL_USER}>`,
            to: process.env.MAIL_RECIPIENT,
            subject: `New Estimate Request: ${service || 'General'} - ${name}`,
            html: getEstimateEmailTemplate({ name, email, phone, service, subService, subject })
        });

        console.log(`Estimate email sent from ${name} for ${service}`);
        res.json({ success: true, message: 'Request submitted successfully!' });
    } catch (error) {
        console.error('Email Error:', error);
        res.status(500).json({ success: false, message: 'Failed to submit request. Please try again.' });
    }
});

// Health Check
app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', message: 'WebAlchemy API is running' });
});

// Start Server
app.listen(PORT, () => {
    console.log(`WebAlchemy API running on http://localhost:${PORT}`);
});
