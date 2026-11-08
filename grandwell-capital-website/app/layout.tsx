import './globals.css';
import Link from 'next/link';
import type { Metadata } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import { applyUrl, email, phone, services } from './site-data';

const display = Playfair_Display({ subsets: ['latin'], weight: ['600', '700'], variable: '--font-display' });
const body = Inter({ subsets: ['latin'], variable: '--font-body' });

export const metadata: Metadata = {
  title: 'Grandwell Capital | Business Funding & Financing Solutions',
  description: 'Grandwell Capital helps business owners access working capital, lines of credit, equipment financing, term loans and more with personal, Brooklyn-based guidance.',
};

function Brand() {
  return <Link className="brand" href="/" aria-label="Grandwell Capital home"><span className="brand-mark">G</span><span className="brand-text">GRANDWELL<small>CAPITAL</small></span></Link>;
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en" className={`${display.variable} ${body.variable}`}><body>
    <div className="topbar"><div className="wrap">
      <div className="topbar-items"><a href={`mailto:${email}`}>✉ {email}</a><a href={phone.href}>☏ {phone.display}</a></div>
      <div className="topbar-items hide-sm"><span>Brooklyn, New York</span><span>Business financing brokerage</span></div>
    </div></div>
    <header className="site-header"><div className="wrap nav">
      <Brand />
      <nav className="menu" aria-label="Main navigation">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <div className="dropdown"><span tabIndex={0}>Services ▾</span><div className="dropdown-panel">
          {services.map(s => <Link key={s.slug} href={`/financing#${s.slug}`}>{s.name}</Link>)}
        </div></div>
        <Link href="/contact">Contact Us</Link>
        <a className="btn" href={applyUrl}>Apply Now</a>
      </nav>
      <details className="mobile-menu"><summary>Menu ☰</summary><nav aria-label="Mobile navigation">
        <Link href="/">Home</Link><Link href="/about">About</Link><Link href="/financing">Services</Link><Link href="/contact">Contact Us</Link>
        <a className="btn" href={applyUrl}>Apply Now</a>
      </nav></details>
    </div></header>

    {children}

    <footer className="site-footer"><div className="wrap">
      <div className="footer-grid">
        <div><Brand /><p>Grandwell Capital is a Brooklyn-based business financing brokerage helping owners find the right capital for growth, operations and opportunity.</p><a className="btn" href={applyUrl}>Get Funded →</a></div>
        <div><h4>Quick Links</h4><ul><li><Link href="/">Home</Link></li><li><Link href="/about">About Us</Link></li><li><Link href="/financing">Services</Link></li><li><Link href="/contact">Contact</Link></li><li><a href={applyUrl}>Apply Now</a></li></ul></div>
        <div><h4>Services</h4><ul>{services.map(s => <li key={s.slug}><Link href={`/financing#${s.slug}`}>{s.name}</Link></li>)}</ul></div>
        <div><h4>Contact</h4><ul><li>Brooklyn, New York</li><li><a href={`mailto:${email}`}>{email}</a></li><li><a href={phone.href}>{phone.display}</a></li></ul></div>
      </div>
      <p className="disclaimer">Grandwell Capital is a commercial financing brokerage, not a direct lender. All financing is subject to review and approval by third-party funding providers. Rates, terms, amounts and timing vary by provider and applicant, and no approval or funding is guaranteed.</p>
      <div className="footer-bottom"><span>© {new Date().getFullYear()} Grandwell Capital LLC. All rights reserved.</span><span>Photography via Unsplash</span></div>
    </div></footer>

    <aside className="float-cta" aria-label="Quick funding"><div><small>NEED FAST FUNDING?</small><strong className="hide-sm">Start your application in minutes</strong></div><a className="btn" href={applyUrl}>Get Funding Now</a></aside>
  </body></html>;
}
