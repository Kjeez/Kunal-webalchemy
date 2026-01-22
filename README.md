<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/1ZHDGaRZgjVOtOZ3eQcbjZ72P5Kdqx6I0

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in `.env.local` to your Gemini API key
3. (Forms / Email) Configure mail environment variables (Vercel Functions + local backend use these):

   - `MAIL_USER`: Gmail address (sender)
   - `MAIL_PASS`: Gmail app password (recommended) or SMTP password
   - `MAIL_RECIPIENT`: Where leads should be delivered
   - `SMTP_ALLOW_SELF_SIGNED`: set to `true` only if your local network MITMs TLS and you see `self-signed certificate in certificate chain`

4. Run the API server locally (for `/api/contact` and `/api/estimate`):

   - `cd server`
   - `npm install`
   - `npm run dev`

5. Run the frontend (Vite on `http://127.0.0.1:3000`):

   - `npm run dev`
