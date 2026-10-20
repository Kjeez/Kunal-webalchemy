import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Ported from the legacy root api/contact.js Vercel function.

const CORS_HEADERS = {
  'Access-Control-Allow-Credentials': 'true',
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET,OPTIONS,POST',
  'Access-Control-Allow-Headers': 'Content-Type',
};

const json = (body: unknown, status: number) =>
  NextResponse.json(body, { status, headers: CORS_HEADERS });

const esc = (v: string) =>
  String(v).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!);

export async function OPTIONS() {
  return new NextResponse(null, { status: 200, headers: CORS_HEADERS });
}

export async function POST(req: Request) {
  if (!process.env.MAIL_USER || !process.env.MAIL_PASS || !process.env.MAIL_RECIPIENT) {
    return json({ success: false, message: 'Server configuration error.' }, 500);
  }

  let body: Record<string, string>;
  try {
    body = await req.json();
  } catch {
    return json({ success: false, message: 'Invalid JSON body' }, 400);
  }

  const { name, email, phone, message } = body;
  // The redesigned forms make email optional, so a phone number is enough.
  if (!name || (!email && !phone)) {
    return json({ success: false, message: 'Name and a phone number or email are required' }, 400);
  }

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: { user: process.env.MAIL_USER, pass: process.env.MAIL_PASS },
      ...(process.env.SMTP_ALLOW_SELF_SIGNED === 'true' ? { tls: { rejectUnauthorized: false } } : {}),
    });

    await transporter.sendMail({
      from: `"WebAlchemy" <${process.env.MAIL_USER}>`,
      to: process.env.MAIL_RECIPIENT,
      subject: `New Contact: ${name}`,
      html: `<h2>New Contact</h2><p><b>Name:</b> ${esc(name)}</p><p><b>Email:</b> ${esc(email || 'N/A')}</p><p><b>Phone:</b> ${esc(phone || 'N/A')}</p><p><b>Message:</b><br>${esc(message || 'N/A').replace(/\n/g, '<br>')}</p>`,
    });

    return json({ success: true, message: 'Sent!' }, 200);
  } catch (error) {
    console.error(error);
    return json({ success: false, message: 'Failed to send.' }, 500);
  }
}
