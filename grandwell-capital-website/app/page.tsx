import Link from 'next/link';

const services = [
  {icon:'↗',name:'Working Capital',detail:'Flexible capital to support payroll, inventory, operations, and growth.'},
  {icon:'▤',name:'Merchant Cash Advances',detail:'Explore revenue-based funding options for qualified businesses.'},
  {icon:'↔',name:'Business Lines of Credit',detail:'Access financing options designed for changing cash-flow needs.'},
  {icon:'▣',name:'Equipment Financing',detail:'Finance essential machinery, vehicles, and business equipment.'},
  {icon:'◇',name:'SBA & Term Loan Options',detail:'Review longer-term financing paths and potential SBA programs.'},
  {icon:'⊞',name:'Consolidation & Commercial',detail:'Discuss existing obligations, property, and larger capital needs.'},
];
const steps=[
  ['01','Tell Us About Your Business','Complete a short inquiry or funding application.'],
  ['02','Speak With a Specialist','We review your needs and discuss potential financing options.'],
  ['03','Review Your Options','Compare available terms and ask questions before moving forward.'],
  ['04','Move Forward','If approved and accepted, complete the next steps toward funding.'],
];
export default function Home(){
 return <main>
  <section className="pc-hero"><div className="wrap pc-hero-grid">
    <div className="pc-hero-copy"><div className="pc-overline">GRANDWELL CAPITAL · BUSINESS FINANCING</div>
      <h1>Business funding built around <em>your next move.</em></h1>
      <p>From everyday working capital to larger financing opportunities, we help business owners find a clear path forward with personal service and straightforward guidance.</p>
      <div className="actions"><a className="btn pc-primary" href="https://apply.grandwellcapital.com">Apply for Funding →</a><Link className="btn pc-light-outline" href="/contact">Talk to a Specialist</Link></div>
      <div className="pc-hero-points"><span>✓ Personal guidance</span><span>✓ Multiple funding solutions</span><span>✓ Clear next steps</span></div>
    </div>
    <aside className="pc-hero-card"><div className="pc-overline">FUNDING STARTS HERE</div><h2>Let's get your business moving.</h2><p>Tell us what you're looking to accomplish. We'll help you explore your next steps.</p><Link className="btn pc-primary" href="/contact">Request Funding Options →</Link><small>No obligation to submit an initial inquiry.</small></aside>
  </div></section>
  <section className="pc-trust"><div className="wrap pc-trust-row"><span>BUSINESS FINANCING</span><span>WORKING CAPITAL</span><span>GROWTH & EXPANSION</span><span>PERSONALIZED SUPPORT</span></div></section>
  <section className="section pc-intro"><div className="wrap pc-split"><div><div className="pc-overline">WELCOME TO GRANDWELL CAPITAL</div><h2>Your financing partner for what comes next.</h2><p>Every business has a different story. We take time to understand your goals, cash flow, and financing needs before discussing available solutions.</p><p>Whether you're investing in growth, managing operations, or exploring ways to restructure existing obligations, our focus is on building a lasting business relationship.</p><Link className="pc-text-link" href="/about">Get to know Grandwell →</Link></div><div className="pc-intro-visual"><div className="pc-visual-mark">G</div><div className="pc-visual-content"><span>GRANDWELL CAPITAL</span><strong>Capital with purpose.<br/>Partnership with perspective.</strong></div></div></div></section>
  <section className="section soft pc-services"><div className="wrap"><div className="pc-centered"><div className="pc-overline">OUR FINANCING SOLUTIONS</div><h2>Smart capital for every stage of business.</h2><p>Explore a range of business financing options with one dedicated point of contact.</p></div><div className="pc-service-grid">{services.map(s=><article className="pc-service" key={s.name}><div className="pc-service-icon" aria-hidden="true">{s.icon}</div><h3>{s.name}</h3><p>{s.detail}</p><Link href="/financing">Explore Options <span aria-hidden="true">→</span></Link></article>)}</div></div></section>
  <section className="section pc-benefits"><div className="wrap pc-split"><div><div className="pc-overline">THE GRANDWELL DIFFERENCE</div><h2>More than a funding transaction.</h2><p className="sub">We aim to be a resource you can return to as your business evolves. You'll have someone to speak with, questions answered, and a clear explanation of potential next steps.</p><Link className="btn pc-primary" href="/contact">Connect With Our Team →</Link></div><div className="pc-benefit-list"><div><strong>01</strong><span><b>Relationship-focused</b><small>We learn about your business, not just your funding request.</small></span></div><div><strong>02</strong><span><b>Multiple solutions</b><small>Explore options for short- and longer-term needs.</small></span></div><div><strong>03</strong><span><b>Clear communication</b><small>Understand the process and available terms before deciding.</small></span></div></div></div></section>
  <section className="section pc-process"><div className="wrap"><div className="pc-centered"><div className="pc-overline">HOW IT WORKS</div><h2>A simple path from inquiry to opportunity.</h2></div><div className="pc-process-grid">{steps.map(([n,title,detail])=><div className="pc-process-step" key={n}><div className="pc-step-num">{n}</div><h3>{title}</h3><p>{detail}</p></div>)}</div><div className="pc-center-actions"><a className="btn pc-primary" href="https://apply.grandwellcapital.com">Start Your Application →</a></div></div></section>
  <section className="pc-cta"><div className="wrap pc-cta-inner"><div><div className="pc-overline">LET'S BUILD WHAT'S NEXT</div><h2>Ready to move your business forward?</h2><p>Start a conversation with Grandwell Capital about your financing goals.</p></div><div className="actions"><a className="btn pc-primary" href="https://apply.grandwellcapital.com">Apply Now →</a><Link className="btn pc-light-outline" href="/contact">Contact Us</Link></div></div></section>
 </main>;
}