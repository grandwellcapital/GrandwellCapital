
'use client';

import { useState, type FormEvent } from 'react';
import Script from 'next/script';export default function Apply() {
  const [status, setStatus] = useState('');
  const [busy, setBusy] = useState(false);
  const [step, setStep] = useState(1);
const turnstileSiteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setBusy(true);
    setStatus('');

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const out = await res.json();

      if (!res.ok) {
        throw new Error(out.error || 'Unable to send application.');
      }

      setStatus(
        'Your application inquiry has been received. We will be in touch.'
      );

      form.reset();
      setStep(1);
    } catch (err) {
      setStatus(
        err instanceof Error ? err.message : 'Unable to send application.'
      );
    } finally {
      setBusy(false);
    }
  }

  return (
    <main>
      <section className="pagehead">
        <div className="wrap">
          <div className="eyebrow">GRANDWELL CAPITAL</div>
          <h1>Business financing application</h1>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <p className="sub">
            Tell us about your business and financing needs. This is a
            preliminary application inquiry, not a credit decision or
            approval. Do not enter Social Security numbers, EINs, bank
            account numbers, or upload financial documents here.
          </p>

          <p className="notice">
            Section {step} of 3 —{' '}
            {step === 1
              ? 'Business details'
              : step === 2
              ? 'Owner and financing details'
              : 'Review and submit'}
          </p>

          <form className="form" onSubmit={submit}>
            <div className="field full">
              <label htmlFor="business">Legal business name *</label>
              <input
                id="business"
                name="business"
                required
                maxLength={120}
              />
            </div>

            <div className="field">
              <label htmlFor="dba">DBA / trade name</label>
              <input id="dba" name="dba" maxLength={120} />
            </div>

            <div className="field">
              <label htmlFor="entityType">Entity type</label>
              <select id="entityType" name="entityType" defaultValue="">
                <option value="">Select</option>
                <option>LLC</option>
                <option>Corporation</option>
                <option>Sole Proprietorship</option>
                <option>Partnership</option>
                <option>Other</option>
              </select>
            </div>

            <div className="field full">
              <label htmlFor="businessAddress">
                Business street address
              </label>
              <input
                id="businessAddress"
                name="businessAddress"
                maxLength={160}
              />
            </div>

            <div className="field">
              <label htmlFor="city">City</label>
              <input id="city" name="city" maxLength={80} />
            </div>

            <div className="field">
              <label htmlFor="state">State</label>
              <input id="state" name="state" maxLength={40} />
            </div>

            <div className="field">
              <label htmlFor="zip">ZIP code</label>
              <input id="zip" name="zip" maxLength={15} />
            </div>

            <div className="field">
              <label htmlFor="industry">Industry / business type</label>
              <input id="industry" name="industry" maxLength={100} />
            </div>

            <div className="field">
              <label htmlFor="yearsInBusiness">Years in business</label>
              <input
                id="yearsInBusiness"
                name="yearsInBusiness"
                maxLength={30}
                placeholder="e.g. 5"
              />
            </div>

            <div className="field">
              <label htmlFor="ownership">Ownership percentage</label>
              <input
                id="ownership"
                name="ownership"
                maxLength={10}
                placeholder="e.g. 100%"
              />
            </div>

            <div className="field">
              <label htmlFor="name">
                Owner / primary contact name *
              </label>
              <input
                id="name"
                name="name"
                required
                maxLength={120}
              />
            </div>

            <div className="field">
              <label htmlFor="phone">Phone *</label>
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                maxLength={30}
              />
            </div>

            <div className="field full">
              <label htmlFor="email">Email *</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                maxLength={254}
              />
            </div>

            <div className="field">
              <label htmlFor="revenue">
                Approximate monthly revenue
              </label>
              <select id="revenue" name="revenue" defaultValue="">
                <option value="">Select range</option>
                <option>Under $25,000</option>
                <option>$25,000–$50,000</option>
                <option>$50,000–$100,000</option>
                <option>$100,000–$250,000</option>
                <option>Over $250,000</option>
              </select>
            </div>

            <div className="field">
              <label htmlFor="amount">Financing requested</label>
              <input
                id="amount"
                name="amount"
                maxLength={30}
                placeholder="e.g. $100,000"
              />
            </div>

            <div className="field full">
              <label htmlFor="purpose">Financing purpose</label>
              <select id="purpose" name="purpose">
                <option>Working Capital</option>
                <option>Merchant Cash Advance</option>
                <option>Term Loan</option>
                <option>Line of Credit</option>
                <option>Equipment Financing</option>
                <option>Reverse Consolidation</option>
                <option>Refinancing / Consolidation</option>
                <option>Other</option>
              </select>
            </div>

            <div className="field">
              <label htmlFor="existingAdvances">
                Existing MCA / financing positions
              </label>
              <select
                id="existingAdvances"
                name="existingAdvances"
                defaultValue=""
              >
                <option value="">Select</option>
                <option>None</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4 or more</option>
              </select>
            </div>

            <div className="field">
              <label htmlFor="weeklyPayments">
                Approximate total weekly financing payments
              </label>
              <input
                id="weeklyPayments"
                name="weeklyPayments"
                maxLength={40}
                placeholder="e.g. $3,000"
              />
            </div>

            <div className="field full">
              <label htmlFor="message">
                Additional information
              </label>
              <textarea
                id="message"
                name="message"
                maxLength={1000}
              />
            </div>

            <div className="field full">
              <label>
                <input
                  type="checkbox"
                  name="consent"
                  value="yes"
                  required
                  style={{ width: 'auto', marginRight: 8 }}
                />
                I agree that Grandwell Capital may contact me by
                phone or email about this financing inquiry. *
              </label>

              <p className="notice">
                Grandwell Capital is a financing broker, not a
                direct lender. Submission does not guarantee
                approval or constitute authorization for a
                credit check. Additional disclosures and
                authorization will be provided if you proceed.
              </p>
            </div>

            <div className="field full">
              <label
                htmlFor="website"
                style={{ position: 'absolute', left: '-9999px' }}
              >
                Website
              </label>
              <input
                id="website"
                name="website"
                autoComplete="off"
                tabIndex={-1}
                style={{ position: 'absolute', left: '-9999px' }}
              />
            </div>
<div className="field full">
  <Script
    src="https://challenges.cloudflare.com/turnstile/v0/api.js"
    strategy="afterInteractive"
  />
  {turnstileSiteKey && (
    <div
      className="cf-turnstile"
      data-sitekey={turnstileSiteKey}
      data-theme="light"
    />
  )}
</div>            <div className="field full">
              <button
                className="btn"
                type="submit"
                disabled={busy}
              >
                {busy
                  ? 'Sending...'
                  : 'Submit Application Inquiry →'}
              </button>

              {status && (
                <p className="status" role="status">
                  {status}
                </p>
              )}
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
