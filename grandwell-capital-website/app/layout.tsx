import './globals.css';
import Link from 'next/link';
import type { Metadata } from 'next';
import { applyUrl, brand, email, location, phone, services } from './site-data';
import { Icon } from './icons';


export const metadata: Metadata = {
  metadataBase: new URL('https://grandwellcapital.com'),
  title: 'Grandwell Capital | Business Funding & Financing Solutions',
  openGraph: { siteName: 'Grandwell Capital', images: [{ url: '/brand/banner1.jpg', width: 1672, height: 941, alt: 'Grandwell Capital business financing solutions' }] },
  description: 'Grandwell Capital helps business owners access working capital, lines of credit, equipment financing, term loans and more with personal, New York-based guidance.',
};

function Brand() {
  return <Link className="brand" href="/" aria-label="Grandwell Capital home"><span className="brand-mark">G</span><span className="brand-text">GRANDWELL<small>CAPITAL</small></span></Link>;
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><head><link rel="preconnect" href="https://fonts.googleapis.com" /><link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" /><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Playfair+Display:wght@600;700&display=swap" /></head><body>
    <div className="topbar"><div className="wrap">
      <div className="topbar-items"><a href={`mailto:${email}`}><Icon name="mail" size={15} />{email}</a><a href={phone.href}><Icon name="phone" size={15} />{phone.display}</a></div>
      <div className="topbar-items hide-sm"><span><Icon name="pin" size={15} />{location}</span><span>Direct funding &amp; partner programs</span></div>
    </div></div>
    <header className="site-header"><div className="wrap nav">
      <Brand />
      <nav className="menu" aria-label="Main navigation">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <div className="dropdown"><span tabIndex={0}>Services ▾</span><div className="dropdown-panel">
          {services.map(s => <Link key={s.slug} href={`/financing#${s.slug}`}>{s.name}</Link>)}
        </div></div>
        <Link href="/blog">Blog</Link>
        <Link href="/contact">Contact Us</Link>
        <a className="btn" href={applyUrl}>Apply Now</a>
      </nav>
      <details className="mobile-menu"><summary>Menu ☰</summary><nav aria-label="Mobile navigation">
        <Link href="/">Home</Link><Link href="/about">About</Link><Link href="/financing">Services</Link><Link href="/blog">Blog</Link><Link href="/contact">Contact Us</Link>
        <a className="btn" href={applyUrl}>Apply Now</a>
      </nav></details>
    </div></header>

    {children}

    <footer className="site-footer"><div className="wrap">
      <div className="footer-grid">
        <div><img src={brand.logo} alt="Grandwell Capital" style={{ width: 220, marginBottom: 18, borderRadius: 8 }} /><p>Grandwell Capital is a New York business funding company providing capital directly and through trusted partners, so owners can grow, operate and seize opportunity.</p><a className="btn" href={applyUrl}>Get Funded →</a></div>
        <div><h4>Quick Links</h4><ul><li><Link href="/">Home</Link></li><li><Link href="/about">About Us</Link></li><li><Link href="/financing">Services</Link></li><li><Link href="/blog">Blog</Link></li><li><Link href="/contact">Contact</Link></li><li><a href={applyUrl}>Apply Now</a></li></ul></div>
        <div><h4>Services</h4><ul>{services.map(s => <li key={s.slug}><Link href={`/financing#${s.slug}`}>{s.name}</Link></li>)}</ul></div>
        <div><h4>Contact</h4><ul><li>{location}</li><li><a href={`mailto:${email}`}>{email}</a></li><li><a href={phone.href}>{phone.display}</a></li></ul></div>
      </div>
      <p className="disclaimer">Grandwell Capital provides business financing directly and through its network of funding partners. All financing is subject to underwriting review and approval. Rates, terms, amounts and timing vary by program and applicant, and no approval or funding is guaranteed.</p>
      <div className="footer-bottom"><span>© {new Date().getFullYear()} Grandwell Capital LLC. All rights reserved.</span><span>Photography via Unsplash</span></div>
    </div></footer>

    <aside className="float-cta" aria-label="Quick funding"><div><small>NEED FAST FUNDING?</small><strong className="hide-sm">Start your application in minutes</strong></div><a className="btn" href={applyUrl}>Get Funding Now</a></aside>
  </body></html>;
}
