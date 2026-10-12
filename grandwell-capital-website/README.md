# Grandwell Capital Website

Next.js website with an initial merchant inquiry form. No dashboard, file upload, or Fundara integration is included in this Stage 1 build.

## Local setup

1. Install Node.js 20+.
2. Run `npm install` and `npm run dev`.
3. Open http://localhost:3000.
4. Copy `.env.example` to `.env.local` and configure Resend credentials to enable lead email delivery.

## Vercel deployment

1. Upload these files to your **private** GitHub repository `grandwell-capital-website` (preserve folder structure).
2. In Vercel, choose **Add New > Project**, import the GitHub repository, and select Next.js.
3. Deploy to the initial `.vercel.app` URL. Do not connect the production domain yet.
4. In Resend, verify a sending domain/subdomain and configure SPF/DKIM as instructed by Resend. Do not overwrite existing Google Workspace MX, SPF, DKIM, or DMARC records. DNS records must be reviewed for conflicts.
5. In Vercel project Settings > Environment Variables, add `RESEND_API_KEY`, `LEAD_FROM_EMAIL` (verified sender address), and `LEAD_TO_EMAIL` (`Sam@GrandwellCapital.com`). Redeploy after adding variables.
6. Submit a test inquiry using non-sensitive dummy information and verify delivery, error handling, and reply-to.

## Production blockers

- Legal review of privacy policy, contact consent, financing disclosures, and any applicable commercial-financing regulations.
- Add robust rate limiting and bot protection before publicly advertising the form. The included honeypot is not sufficient by itself.
- Email-only lead storage is not a durable lead-management system; consider secure database storage in Stage 2.
- Replace typographic wordmark with approved logo artwork once available.
- Confirm all public financing claims and the brokerage's legal identity before launch.
- Do not send sensitive merchant documents through this form or plain email.
- Fundara CRM integration remains unverified and is not implemented.
