# Kunal — portfolio site

Personal portfolio for Kunal (website developer & UI/UX designer), built on
the WebAlchemy Next.js design system. Lives on the `kunal-portfolio` branch;
`main` is still the WebAlchemy agency site.

Live: https://kunalwebdesigner.vercel.app

## Deploys

- Vercel project **kunalwebdesigner** builds the `kunal-portfolio` branch only.
  Every push to it goes live automatically; pushes to other branches are skipped
  by the project's ignored-build-step rule.
- webalchemy.in (Vercel project **kunal-webalchemy**) deploys from `main` and is
  unaffected by this branch.

## Run locally

Prerequisites: Node.js

1. `npm install`
2. `npm run dev`, then open http://localhost:3000

## Contact form email

The forms post to `/api/contact`, which sends mail via SMTP. Set these in the
kunalwebdesigner project (Settings → Environment Variables) and in `.env.local`
for local testing:

- `MAIL_USER`: sender address
- `MAIL_PASS`: app password / SMTP password
- `MAIL_RECIPIENT`: where enquiries are delivered
- `SMTP_ALLOW_SELF_SIGNED`: `true` only if your network intercepts TLS

Without them the forms fall back to sending the enquiry on WhatsApp.
