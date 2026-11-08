import Link from 'next/link';

const solutions = [
  ['Working Capital', 'Flexible financing options for inventory, payroll, and everyday operating needs.'],
  ['Business Lines of Credit', 'Explore revolving access to capital for changing business needs.'],
  ['Business Term Loans', 'Review structured financing with predictable repayment terms.'],
  ['Equipment Financing', 'Invest in equipment and tools that help your business grow.'],
  ['Revenue-Based Funding', 'Explore funding solutions evaluated around business performance.'],
  ['Commercial Financing', 'Discuss larger financing needs and available business solutions.'],
];

export default function Home() {
  return <main>
    <section className="hero modern-hero">
      <div className="wrap hero-grid">
        <div>
          <div className="eyebrow">FINANCING THAT MOVES BUSINESS FORWARD</div>
          <h1>Capital for your next big move.</h1>
          <p>Business financing should start with understanding your goals. At Grandwell Capital, we help business owners explore financing solutions with personal attention and clear next steps.</p>
          <div className="actions">
            <Link className="btn" href="/apply">Explore Funding Options →</Link>
            <Link className="btn btn-outline" href="/financing">View Our Solutions</Link>
          </div>
          <p className="hero-fine">A straightforward conversation. Financing options tailored to your business.</p>
        </div>
        <aside className="hero-panel">
          <div className="panel-kicker">LET'S TALK BUSINESS</div>
          <h2>What could the right capital help you achieve?</h2>
          <p>Expansion, equipment, cash flow, or a new opportunity — tell us what you're working toward.</p>
          <Link className="btn" href="/contact">Request a Conversation →</Link>
          <span>No sensitive documents needed to start.</span>
        </aside>
      </div>
    </section>
    <section className="section"><div className="wrap">
      <div className="eyebrow">FINANCING SOLUTIONS</div>
      <h2>One business. More ways to move forward.</h2>
      <p className="sub">We help you explore options based on your business needs, not a one-size-fits-all pitch.</p>
      <div className="cards modern-cards">{solutions.map(([name, description]) =>
        <article className="card" key={name}><div className="card-accent" /><h3>{name}</h3><p>{description}</p><Link href="/financing">Explore solution →</Link></article>
      )}</div>
    </div></section>
    <section className="section soft"><div className="wrap">
      <div className="eyebrow">THE GRANDWELL APPROACH</div><h2>Relationships first. Financing with purpose.</h2>
      <p className="sub">We're here to understand where your business is today and where you want it to go — then help you evaluate potential financing paths.</p>
      <div className="steps">
        <div><div className="num">01</div><h3>Tell us your goals</h3><p>Share a few details about your business and financing needs.</p></div>
        <div><div className="num">02</div><h3>Review your options</h3><p>We'll discuss potential solutions and what may fit your situation.</p></div>
        <div><div className="num">03</div><h3>Move forward confidently</h3><p>Understand the terms and next steps before making a decision.</p></div>
      </div>
    </div></section>
    <section className="section final-cta"><div className="wrap">
      <div className="eyebrow">YOUR NEXT CHAPTER STARTS HERE</div>
      <h2>Let's find a smarter way forward.</h2>
      <p className="sub">Start with a simple inquiry or complete the funding application when you're ready.</p>
      <div className="actions"><Link className="btn" href="/contact">Talk to Grandwell →</Link><a className="btn btn-outline dark-outline" href="https://apply.grandwellcapital.com">Complete Application →</a></div>
    </div></section>
  </main>;
}
