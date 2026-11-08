import Link from 'next/link';
import { applyUrl, photos } from '../site-data';

export const metadata = { title: 'About | Grandwell Capital' };

const values = [
  ['Relationship first', 'We learn your business, not just your funding request, and stay available as you grow.'],
  ['Honest guidance', 'We explain costs, terms and trade-offs plainly, including when a product is not the right fit.'],
  ['Broad access', 'Our network of funding providers means more than one option to compare.'],
];

export default function About() {
  return <main>
    <section className="pagehead"><img src={photos.bridge} alt="" /><div className="wrap">
      <div className="eyebrow">About Us</div>
      <h1>A personal approach to business financing.</h1>
      <p>Brooklyn-based and built for owners who want straight answers and a partner who picks up the phone.</p>
    </div></section>

    <section className="section"><div className="wrap split">
      <div className="photo-stack">
        <img className="main" src={photos.handshake} alt="Two people shaking hands" />
        <img className="inset" src={photos.owner} alt="Small business owner at her counter" />
      </div>
      <div>
        <div className="eyebrow">Who We Are</div>
        <h2>Grandwell Capital</h2>
        <p className="sub">Grandwell Capital is a business financing brokerage based in Brooklyn, New York. We work with owners to understand their cash flow and goals, then help them explore working capital, lines of credit, term loans, equipment financing, merchant cash advances and consolidation options through our network of funding providers.</p>
        <p className="sub">We are a brokerage, not a direct lender. Financing decisions and terms are made by third-party providers, and our job is to help you find, understand and compare them.</p>
        <div className="actions" style={{ marginTop: 26 }}><a className="btn" href={applyUrl}>Apply Now →</a><Link className="btn btn-outline" href="/contact">Contact Us</Link></div>
      </div>
    </div></section>

    <section className="section soft"><div className="wrap">
      <div className="center"><div className="eyebrow">What We Stand For</div><h2>How we work with every client.</h2></div>
      <div className="cards">{values.map(([t, d]) => <div className="card" key={t}><h3>{t}</h3><p>{d}</p></div>)}</div>
    </div></section>
  </main>;
}
