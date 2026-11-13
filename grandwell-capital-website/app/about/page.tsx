import Link from 'next/link';
import { applyUrl, brand, photos } from '../site-data';

export const metadata = { title: 'About | Grandwell Capital' };

const values = [
  ['Relationship first', 'We learn your business, not just your funding request, and stay available as you grow.'],
  ['Honest guidance', 'We explain costs, terms and trade-offs plainly, including when a product is not the right fit.'],
  ['Broad access', 'Direct funding plus a partner network means more than one option to compare.'],
];

export default function About() {
  return <main>
    <section className="pagehead"><img src={photos.nightSkyline} alt="" /><div className="wrap">
      <div className="eyebrow">About Us</div>
      <h1>A personal approach to business financing.</h1>
      <p>New York-based and built for owners who want straight answers and a partner who picks up the phone.</p>
    </div></section>

    <section className="section"><div className="wrap split">
      <div className="photo-stack">
        <img className="main" src={brand.team} alt="The Grandwell Capital team at our office" />
        <img className="inset" src={brand.office} alt="Inside the Grandwell Capital office" />
      </div>
      <div>
        <div className="eyebrow">Who We Are</div>
        <h2>Grandwell Capital</h2>
        <p className="sub">Grandwell Capital is a business funding company based in New York, New York. We work with owners to understand their cash flow and goals, then provide working capital, lines of credit, term loans, equipment financing, merchant cash advances and consolidation options, funded directly by Grandwell or through our network of funding partners.</p>
        <p className="sub">Some programs are funded by Grandwell directly; others are placed with trusted partners. Either way, you get one point of contact and a clear explanation of your terms before you decide.</p>
        <div className="actions" style={{ marginTop: 26 }}><a className="btn" href={applyUrl}>Apply Now →</a><Link className="btn btn-outline" href="/contact">Contact Us</Link></div>
      </div>
    </div></section>

    <section className="section soft"><div className="wrap">
      <div className="center"><div className="eyebrow">What We Stand For</div><h2>How we work with every client.</h2></div>
      <div className="cards">{values.map(([t, d]) => <div className="card" key={t}><h3>{t}</h3><p>{d}</p></div>)}</div>
    </div></section>
  </main>;
}
