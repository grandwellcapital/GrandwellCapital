import Link from 'next/link';
import { applyUrl, phone, photos, services, brand } from './site-data';
import { Icon } from './icons';

const heroPoints = [
  { ico: 'bolt', title: 'Fast Process', note: 'Short application, quick review' },
  { ico: 'user', title: 'Dedicated Advisor', note: 'One point of contact' },
  { ico: 'layers', title: 'Multiple Programs', note: 'Six ways to fund' },
  { ico: 'check', title: 'Clear Terms', note: 'Know before you sign' },
];

const welcome = [
  ['Direct, personal support', 'Talk to a real person who knows your file.'],
  ['Tailored solutions', 'Options matched to your revenue and goals.'],
  ['Direct & partner funding', 'Capital from us directly or our partner network.'],
  ['Speed & transparency', 'Straight answers on costs and timing.'],
];

const features = [
  ['chart', 'Competitive Options', 'Direct programs plus partner offers give you more than one option.'],
  ['clock', 'Quick & Easy', 'A short online application gets the process moving.'],
  ['swap', 'Flexible Structures', 'Daily, weekly or monthly repayment options are available.'],
  ['shield', 'Secure Process', 'Your information is protected and handled with care.'],
  ['edit', 'Apply in Minutes', 'Start with basic details. No lengthy paperwork up front.'],
  ['headset', 'Expert Consulting', 'Guidance on which product makes sense, and which does not.'],
];

const steps = [
  ['01', 'Apply Online', 'Complete a short application with basic business details.'],
  ['02', 'Get Reviewed', 'Your advisor reviews your file and matches you with providers.'],
  ['03', 'Review Your Offer', 'Compare terms side by side and ask any questions.'],
  ['04', 'Receive Funds', 'Accept the offer that works and complete funding steps.'],
];

const industries = [
  { name: 'Restaurants & Food', note: 'Kitchens, delis, cafés', img: photos.restaurant },
  { name: 'Retail & Storefronts', note: 'Shops and boutiques', img: photos.storefront },
  { name: 'Construction & Trades', note: 'Contractors and equipment', img: photos.equipment },
  { name: 'Trucking & Logistics', note: 'Fleets and owner-operators', img: photos.trucks },
];

export default function Home() {
  return <main>
    <section className="hero">
      <img className="hero-bg" src={photos.nightSkyline} alt="" />
      <div className="wrap on-dark">
        <div className="eyebrow">Business Funding · New York, NY</div>
        <h1>Fast, flexible <em>business funding</em> built around your next move.</h1>
        <p className="hero-lead">From working capital to equipment financing, Grandwell Capital gets business owners the capital they need, directly or through our partner network, with a dedicated advisor at every step.</p>
        <div className="actions">
          <a className="btn" href={applyUrl}>Get My Capital →</a>
          <a className="btn btn-ghost" href={phone.href}><Icon name="phone" size={17} />Call {phone.display}</a>
        </div>
        <div className="hero-points">{heroPoints.map(p => <div key={p.title}><span className="ico"><Icon name={p.ico} /></span><span><strong>{p.title}</strong><small>{p.note}</small></span></div>)}</div>
      </div>
    </section>

    <section className="section"><div className="wrap split">
      <div className="photo-stack">
        <img className="main" src={brand.consult} alt="A Grandwell advisor meeting with a business owner at our office" />
        <img className="inset" src={brand.team} alt="The Grandwell Capital team" />
        <div className="photo-badge"><span>6</span>funding programs under one roof</div>
      </div>
      <div>
        <div className="eyebrow">Welcome to Grandwell Capital</div>
        <h2>Your partner for smarter business financing.</h2>
        <p className="sub">Every business has a different story. We take the time to understand your cash flow, your goals and your timeline, then fund you directly or match you with the right partner program.</p>
        <div className="checks">{welcome.map(([t, d]) => <div key={t}><span className="tick">✓</span><span><b>{t}</b><small>{d}</small></span></div>)}</div>
        <div className="actions"><Link className="btn btn-navy" href="/about">About Grandwell →</Link><Link className="btn btn-outline" href="/contact">Talk to an Advisor</Link></div>
      </div>
    </div></section>

    <section className="section soft"><div className="wrap">
      <div className="center"><div className="eyebrow">How We Help</div><h2>Funding solutions for every stage of business.</h2><p className="sub">Whether you need capital this week or a long-term growth plan, we have a program to discuss.</p></div>
      <div className="service-grid">{services.map(s => <article className="service" key={s.slug}>
        <div className="service-img"><img src={s.img} alt="" loading="lazy" /><span className="service-ico" aria-hidden="true"><Icon name={s.icon} size={24} /></span></div>
        <div className="service-body"><h3>{s.name}</h3><p>{s.short}</p><Link className="text-link" href={`/financing#${s.slug}`}>View Details <Icon name="arrow" size={16} /></Link></div>
      </article>)}</div>
    </div></section>

    <section className="section feature-band on-dark">
      <img className="bg" src={photos.empireNight} alt="" />
      <div className="wrap">
        <div className="center"><div className="eyebrow">Why Grandwell</div><h2>Built for business owners who move fast.</h2><p className="sub">A simpler, more transparent way to secure capital.</p></div>
        <div className="feature-grid">{features.map(([i, t, d]) => <div className="feature" key={t}><div className="ico"><Icon name={i} size={28} /></div><h3>{t}</h3><p>{d}</p></div>)}</div>
      </div>
    </section>

    <section className="stats"><div className="wrap">
      <div className="stat"><strong>6</strong><span>Financing programs</span></div>
      <div className="stat"><strong>1</strong><span>Dedicated advisor per client</span></div>
      <div className="stat"><strong>5 min</strong><span>To start your application</span></div>
      <div className="stat"><strong>NYC</strong><span>Based in New York</span></div>
      <Link className="btn btn-navy" href="/contact">Talk to a Funding Specialist →</Link>
    </div></section>

    <section className="section"><div className="wrap">
      <div className="center"><div className="eyebrow">4 Simple Steps</div><h2>From application to funding.</h2><p className="sub">A clear process, with your advisor guiding you the whole way.</p></div>
      <div className="steps">{steps.map(([n, t, d]) => <div className="step" key={n}><div className="step-num">{n}</div><h3>{t}</h3><p>{d}</p></div>)}</div>
      <div className="center-actions"><a className="btn" href={applyUrl}>Get Funding →</a><Link className="btn btn-outline" href="/contact">Help Me Find Funding</Link></div>
    </div></section>

    <section className="section soft"><div className="wrap">
      <div className="center"><div className="eyebrow">Who We Fund</div><h2>Capital for the businesses that keep New York running.</h2></div>
      <div className="industry-grid">{industries.map(i => <div className="industry" key={i.name}><img src={i.img} alt="" loading="lazy" /><div><h3>{i.name}</h3><small>{i.note}</small></div></div>)}</div>
    </div></section>

    <section className="cta">
      <img src={photos.empireNight} alt="" loading="lazy" />
      <div className="wrap on-dark">
        <div><div className="eyebrow">Let&apos;s Build What&apos;s Next</div><h2>Ready to unlock capital for your business?</h2><p>Start your application today or speak with an advisor about the best path forward.</p></div>
        <div className="actions"><a className="btn" href={applyUrl}>Unlock Capital Now →</a><Link className="btn btn-ghost" href="/contact">Contact Us</Link></div>
      </div>
    </section>
  </main>;
}
