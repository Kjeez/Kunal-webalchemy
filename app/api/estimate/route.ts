import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Ported from the legacy root api/estimate.js Vercel function.

const CORS_HEADERS = {
  'Access-Control-Allow-Credentials': 'true',
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET,OPTIONS,POST',
  'Access-Control-Allow-Headers': 'Content-Type',
};

const json = (body: unknown, status: number) =>
  NextResponse.json(body, { status, headers: CORS_HEADERS });

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

  const { name, email, phone, service, subService, subject } = body;
  if (!name || !email || !phone) {
    return json({ success: false, message: 'Name, email, and phone required' }, 400);
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
      subject: `New Estimate: ${service || 'General'} - ${name}`,
      html: `<h2>New Estimate Request</h2><p><b>Service:</b> ${service || 'General'} ${subService ? '- ' + subService : ''}</p><p><b>Name:</b> ${name}</p><p><b>Email:</b> ${email}</p><p><b>Phone:</b> ${phone}</p><p><b>Brief:</b> ${subject || 'N/A'}</p>`,
    });

    return json({ success: true, message: 'Request submitted!' }, 200);
  } catch (error) {
    console.error(error);
    return json({ success: false, message: 'Failed to submit.' }, 500);
  }
}
