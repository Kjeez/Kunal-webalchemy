import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,POST');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') return res.status(200).end();
    if (req.method !== 'POST') return res.status(405).json({ success: false, message: 'Method not allowed' });

    if (!process.env.MAIL_USER || !process.env.MAIL_PASS || !process.env.MAIL_RECIPIENT) {
        return res.status(500).json({ success: false, message: 'Server configuration error.' });
    }

    try {
        const { name, email, phone, message } = req.body;
        if (!name || !email) return res.status(400).json({ success: false, message: 'Name and email required' });

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: { user: process.env.MAIL_USER, pass: process.env.MAIL_PASS },
            ...(process.env.SMTP_ALLOW_SELF_SIGNED === 'true'
                ? { tls: { rejectUnauthorized: false } }
                : {})
        });

        await transporter.sendMail({
            from: `"WebAlchemy" <${process.env.MAIL_USER}>`,
            to: process.env.MAIL_RECIPIENT,
            subject: `New Contact: ${name}`,
            html: `<h2>New Contact</h2><p><b>Name:</b> ${name}</p><p><b>Email:</b> ${email}</p><p><b>Phone:</b> ${phone || 'N/A'}</p><p><b>Message:</b> ${message || 'N/A'}</p>`
        });

        return res.status(200).json({ success: true, message: 'Sent!' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, message: 'Failed to send.' });
    }
}
