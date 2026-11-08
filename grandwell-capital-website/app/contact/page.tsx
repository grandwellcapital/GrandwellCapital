'use client';
import { useState, type FormEvent } from 'react';
import Script from 'next/script';

export default function Contact() {
  const [busy, setBusy] = useState(false);
  const [status, setStatus] = useState('');
  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const values = Object.fromEntries(new FormData(form).entries());
    const token = String(values['cf-turnstile-response'] || '');
    if (!token) { setStatus('Please complete the security check.'); return; }
    setBusy(true); setStatus('');
    try {
      const response = await fetch('/api/lead', {
        method: 'POST', headers: {'Content-Type':'application/json'},
        body: JSON.stringify({
          business: values.business, name: values.name, phone: values.phone,
          email: values.email, revenue: values.revenue || '',
          amount: values.amount || '', message: values.message || '',
          consent: values.consent, website: values.website || '',
          turnstileToken: token
        })
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || 'Unable to send inquiry.');
      form.reset();
      setStatus('Thank you. Your inquiry has been submitted.');
    } catch(error) {
      setStatus(error instanceof Error ? error.message : 'Unable to send inquiry.');
    } finally {
      window.turnstile?.reset();
      setBusy(false);
    }
  }
  return <main>
    <section className="pagehead"><div className="wrap"><div className="eyebrow">CONTACT GRANDWELL</div><h1>Let's talk about your business.</h1><p>Tell us what you're looking for and we'll be in touch.</p></div></section>
    <section className="section"><div className="wrap">
      <h2>Request a financing conversation</h2>
      <p className="sub">A quick inquiry is all it takes to get started. Do not enter Social Security numbers, bank account information, or other sensitive documents here.</p>
      <form className="form" onSubmit={submit}>
        <div className="field full"><label htmlFor="business">Business name *</label><input id="business" name="business" maxLength={120} required /></div>
        <div className="field"><label htmlFor="name">Your name *</label><input id="name" name="name" maxLength={120} required /></div>
        <div className="field"><label htmlFor="phone">Phone *</label><input id="phone" name="phone" type="tel" maxLength={30} required /></div>
        <div className="field full"><label htmlFor="email">Email *</label><input id="email" name="email" type="email" maxLength={254} required /></div>
        <div className="field"><label htmlFor="revenue">Approximate monthly revenue</label><select id="revenue" name="revenue" defaultValue=""><option value="">Select range</option><option>Under $25,000</option><option>$25,000–$50,000</option><option>$50,000–$100,000</option><option>$100,000–$250,000</option><option>Over $250,000</option></select></div>
        <div className="field"><label htmlFor="amount">Funding requested</label><input id="amount" name="amount" maxLength={30} placeholder="e.g. $100,000" /></div>
        <div className="field full"><label htmlFor="message">How can we help?</label><textarea id="message" name="message" maxLength={1000} /></div>
        <div className="field full"><label><input type="checkbox" name="consent" value="yes" required style={{width:'auto',marginRight:8}} />I agree Grandwell Capital may contact me by phone or email about my inquiry. *</label></div>
        <div className="field full" style={{position:'absolute',left:'-9999px'}} aria-hidden="true"><label htmlFor="website">Website</label><input id="website" name="website" tabIndex={-1} autoComplete="off" /></div>
        <div className="field full"><Script src="https://challenges.cloudflare.com/turnstile/v0/api.js" strategy="afterInteractive" />{siteKey ? <div className="cf-turnstile" data-sitekey={siteKey} data-theme="light" /> : <p role="alert">Security verification is not configured.</p>}</div>
        <div className="field full"><button className="btn" type="submit" disabled={busy || !siteKey}>{busy?'Sending...':'Send Inquiry →'}</button>{status && <p role="status" className="status">{status}</p>}</div>
      </form>
      <p className="notice">All financing is subject to underwriting review and approval. Submission does not guarantee approval or financing.</p>
    </div></section>
  </main>;
}

declare global { interface Window { turnstile?: { reset: () => void } } }
