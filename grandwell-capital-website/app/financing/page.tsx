import Link from 'next/link';
import { applyUrl, photos, services } from '../site-data';

export const metadata = { title: 'Financing Solutions | Grandwell Capital' };

export default function Financing() {
  return <main>
    <section className="pagehead"><img src={photos.skyline} alt="" /><div className="wrap">
      <div className="eyebrow">Our Services</div>
      <h1>Financing options for your next move.</h1>
      <p>Six funding programs, one dedicated advisor. Explore what each option is built for, then let us help you compare.</p>
    </div></section>

    {services.map((s, i) => <section key={s.slug} id={s.slug} className={`section${i % 2 ? ' soft' : ''}`}><div className="wrap split">
      <div style={{ order: i % 2 ? 2 : 0 }}><img src={s.img} alt="" loading="lazy" style={{ borderRadius: 14, aspectRatio: '4/3', objectFit: 'cover', width: '100%', boxShadow: 'var(--shadow)' }} /></div>
      <div>
        <div className="eyebrow">{String(i + 1).padStart(2, '0')} · Program</div>
        <h2>{s.name}</h2>
        <p className="sub">{s.detail}</p>
        <div className="actions" style={{ marginTop: 26 }}><a className="btn" href={applyUrl}>Apply Now →</a><Link className="btn btn-outline" href="/contact">Ask a Question</Link></div>
      </div>
    </div></section>)}

    <section className="section"><div className="wrap">
      <p className="notice">Grandwell Capital is a commercial financing brokerage. Product availability, costs, eligibility and repayment terms are set by the financing provider and depend on the applicant.</p>
    </div></section>
  </main>;
}
