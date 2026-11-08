import { photos } from '../site-data';

// Blog content. Each post is a list of simple blocks so no markdown library is needed.
// Inline **bold** is supported in paragraphs and list items.
export type Block =
  | { h: string }
  | { p: string }
  | { ul: string[] }
  | { ol: string[] }
  | { table: { head: string[]; rows: string[][] } }
  | { formula: string };

export type Post = {
  slug: string;
  title: string;
  description: string;
  date: string; // YYYY-MM-DD
  readMinutes: number;
  category: string;
  img: string;
  cta: string;
  body: Block[];
};

export const posts: Post[] = [
  {
    slug: 'what-is-working-capital',
    title: 'What Is Working Capital? A Plain-English Guide for Small Business Owners',
    description: 'Working capital keeps your business running between paydays. Learn what it is, how to calculate it, and how to get more when cash runs tight.',
    date: '2026-11-08', readMinutes: 4, category: 'Working Capital', img: photos.owner,
    cta: 'Apply for working capital',
    body: [
      { p: 'Every business owner has felt it. Sales are good, customers are happy, but the bank account says otherwise. Payroll is Friday, a supplier wants payment upfront, and your biggest client pays in 60 days.' },
      { p: 'That gap is a working capital problem. And it is one of the most common reasons healthy businesses struggle.' },
      { h: 'What working capital actually means' },
      { p: 'Working capital is the money available to run your business day to day. The simple formula is:' },
      { formula: 'Current assets − current liabilities = working capital' },
      { p: 'Current assets are cash, money customers owe you, and inventory. Current liabilities are bills due within the next year: rent, payroll, supplier invoices, loan payments.' },
      { p: 'If the number is positive, you can cover your short-term obligations. If it is negative or close to zero, one slow month can put you in a bind.' },
      { h: 'Why profitable businesses still run short' },
      { p: 'Profit and cash are not the same thing. A business can be profitable on paper and still run out of cash because:' },
      { ul: ['Customers pay on 30, 60 or 90-day terms', 'You buy inventory months before you sell it', 'Sales are seasonal, but rent and payroll are not', 'A big new contract needs money upfront before it pays'] },
      { h: 'Ways to boost working capital' },
      { ol: [
        '**Speed up what you are owed.** Send invoices the same day, offer a small discount for early payment, and follow up on late accounts.',
        '**Slow down what you owe.** Ask suppliers for longer terms, especially if you have paid on time for years.',
        '**Cut slow-moving inventory.** Stock sitting on shelves is cash you cannot use.',
        '**Get outside working capital.** When the gap is bigger than you can close on your own, funding fills it.',
      ] },
      { h: 'Working capital funding options' },
      { p: 'Grandwell Capital helps businesses access working capital through several products, depending on your revenue, time in business and needs:' },
      { ul: [
        '**Business lines of credit:** draw what you need, when you need it',
        '**Short-term working capital loans:** a lump sum repaid over a set term',
        '**Merchant cash advances:** an advance against future sales, often available when banks say no',
      ] },
      { p: 'The right choice depends on how fast you need the money, how long you need it, and how steady your revenue is. That is what we help you sort out.' },
      { h: 'Ready to close the gap?' },
      { p: 'If cash flow is holding your business back, a quick application is the first step. There is no cost to apply, and a Grandwell specialist will walk you through the options you qualify for.' },
    ],
  },
  {
    slug: 'alternatives-to-bank-loans',
    title: 'The Bank Said No. Now What? 5 Alternatives to a Bank Loan',
    description: 'Turned down for a bank loan? You still have options. Here are five ways small businesses get funded when the bank says no.',
    date: '2026-11-08', readMinutes: 4, category: 'Business Funding', img: photos.storefront,
    cta: 'See what your business qualifies for',
    body: [
      { p: 'Getting turned down by your bank stings. You have been a customer for years, your business is running, and still the answer is no.' },
      { p: 'You are not alone. Banks turn down a large share of small business loan requests, and the reasons often have little to do with whether your business is good. They have to do with the bank\'s rules.' },
      { h: 'Why banks say no' },
      { ul: [
        '**Time in business.** Many banks want two or more years of history.',
        '**Credit score.** A few late payments from a tough year can sink an application.',
        '**Collateral.** Banks often want property or equipment to secure the loan.',
        '**Paperwork and timing.** Bank approvals can take weeks or months. Your opportunity might not wait.',
        '**Industry.** Restaurants, trucking, construction and retail are often seen as higher risk.',
      ] },
      { h: '5 alternatives to a bank loan' },
      { p: '**1. Alternative business loans.** Non-bank lenders look at your actual revenue and cash flow, not just your credit score. Decisions are faster and requirements are more flexible.' },
      { p: '**2. Business line of credit.** A revolving credit line lets you draw funds when you need them and pay interest only on what you use. Good for uneven cash flow.' },
      { p: '**3. Merchant cash advance (MCA).** An MCA is not a loan. A funder advances cash in exchange for a share of your future sales. Approval is based mostly on your sales history, so it can work for owners with less-than-perfect credit.' },
      { p: '**4. Equipment financing.** Need a truck, oven or machine? The equipment itself secures the financing, which often makes approval easier.' },
      { p: '**5. Invoice factoring.** If customers owe you money on unpaid invoices, you can sell those invoices for cash now instead of waiting 30 to 90 days.' },
      { h: 'How to choose' },
      { p: 'Ask yourself three questions:' },
      { ol: ['How fast do I need the money?', 'What will I use it for, and how long until it pays off?', 'How steady are my monthly deposits?'] },
      { p: 'Short-term needs fit short-term funding. Long-term investments fit longer terms. A good funding partner will tell you which fits instead of pushing one product.' },
      { h: 'Get a second opinion' },
      { p: 'Grandwell Capital is a direct lender and broker based in New York. We fund some deals ourselves and match others with a network of funding partners, so one "no" does not end the conversation.' },
    ],
  },
  {
    slug: 'mca-vs-term-loan-vs-line-of-credit',
    title: 'Merchant Cash Advance vs. Term Loan vs. Line of Credit: Which Is Right for You?',
    description: 'MCA, term loan or line of credit? Compare how each works, who it fits, and what to watch for before you choose small business funding.',
    date: '2026-11-08', readMinutes: 5, category: 'Business Funding', img: photos.meeting,
    cta: 'Compare your funding options',
    body: [
      { p: 'Three of the most common ways small businesses get funded are a merchant cash advance, a term loan and a business line of credit. They solve different problems. Picking the wrong one can cost you, so here is how they compare.' },
      { h: 'Quick comparison' },
      { table: {
        head: ['', 'Merchant cash advance', 'Term loan', 'Line of credit'],
        rows: [
          ['What it is', 'Advance on future sales', 'Lump sum borrowed', 'Revolving credit you draw from'],
          ['How you repay', 'Share of daily or weekly sales', 'Fixed payments over a set term', 'Pay back what you use'],
          ['Approval based on', 'Sales and deposit history', 'Credit, revenue, time in business', 'Credit, revenue, cash flow'],
          ['Speed', 'Often the fastest', 'Moderate', 'Moderate after setup'],
          ['Best for', 'Fast needs, flexible approval', 'Planned, one-time investments', 'Ongoing or seasonal cash gaps'],
        ],
      } },
      { h: 'Merchant cash advance' },
      { p: 'An MCA gives you cash now in exchange for a portion of your future sales. Because it is a purchase of future revenue rather than a loan, approval leans heavily on your sales history. That makes it an option for newer businesses or owners rebuilding credit.' },
      { p: '**Watch for:** the total payback amount. Always ask for it in writing and compare it to the amount you receive.' },
      { h: 'Term loan' },
      { p: 'A term loan gives you a lump sum that you repay in fixed installments. It is predictable, which makes budgeting easy.' },
      { p: '**Best for:** expansion, renovations, a second location, or a big purchase with a clear return.' },
      { h: 'Business line of credit' },
      { p: 'A line of credit works like a business credit card with better terms. You get a limit, draw what you need, repay it, and draw again.' },
      { p: '**Best for:** covering slow seasons, buying inventory ahead of a rush, or handling surprise expenses.' },
      { h: 'The honest answer' },
      { p: 'There is no single best product. The right one depends on how fast you need funds, what you are using them for, and your revenue pattern. Many businesses use more than one over time.' },
      { p: 'Grandwell Capital offers all three, plus equipment financing and debt consolidation. We\'ll lay out your options side by side so you can choose with full information.' },
    ],
  },
  {
    slug: 'business-funding-application-checklist',
    title: 'What You Need to Apply for Business Funding: The Complete Checklist',
    description: 'Get funded faster by having the right documents ready. Here is the checklist of what lenders and funders ask for when you apply.',
    date: '2026-11-08', readMinutes: 4, category: 'Applying', img: photos.handshake,
    cta: 'Start your application',
    body: [
      { p: 'The biggest delay in business funding usually isn\'t the funder. It is waiting on paperwork. Have these items ready and your application can move in days instead of weeks.' },
      { h: 'The basics (almost every application)' },
      { ul: [
        '**Business information:** legal name, address, EIN, entity type and start date',
        '**Owner information:** name, home address, ownership percentage and contact details',
        '**Bank statements:** the last 3 to 6 months of business bank statements (PDFs straight from your bank work best)',
        '**Funding request:** how much you need and what it is for',
        '**Government-issued ID** for each owner',
      ] },
      { h: 'Often requested' },
      { ul: [
        '**Credit authorization** so the funder can review your credit',
        '**Voided business check** for funding and payments',
        '**Credit card processing statements** if you take card payments',
      ] },
      { h: 'For larger or longer-term funding' },
      { ul: [
        'Business tax returns (last 1 to 2 years)',
        'Personal tax returns for owners',
        'Profit and loss statement and balance sheet',
        'Accounts receivable and payable reports',
        'Equipment quotes or invoices (for equipment financing)',
        'Statements for any current loans or advances (for consolidation)',
      ] },
      { h: '5 tips to get approved faster' },
      { ol: [
        '**Use your business bank account for business only.** Clean statements are easier to review.',
        '**Avoid overdrafts** in the months before you apply.',
        '**Be upfront about existing advances or loans.** Funders see them anyway, and honesty speeds things up.',
        '**Know your numbers:** average monthly revenue and what the funds will do for the business.',
        '**Answer calls and emails quickly.** Most delays come from waiting on one missing document.',
      ] },
      { h: 'Apply in minutes' },
      { p: 'Grandwell Capital\'s secure online application collects your business details and lets you upload statements directly. A specialist reviews your file and contacts you with options.' },
      { p: 'Questions about documents? Email submissions@grandwellcapital.com.' },
    ],
  },
  {
    slug: 'equipment-financing-guide',
    title: 'Equipment Financing: How to Get the Tools Your Business Needs Without Draining Cash',
    description: 'Need a truck, kitchen equipment or machinery? Equipment financing lets you buy now and pay over time while keeping your cash free.',
    date: '2026-11-08', readMinutes: 4, category: 'Equipment Financing', img: photos.equipment,
    cta: 'Apply for equipment financing',
    body: [
      { p: 'A new delivery truck, a commercial oven, a CNC machine, a dental chair. The right equipment can double what your business produces. The price tag can also wipe out your bank account.' },
      { p: 'Equipment financing lets you get the equipment now and pay for it over time, while the equipment helps you earn.' },
      { h: 'How equipment financing works' },
      { ol: ['You pick the equipment and get a quote from the seller.', 'A funder pays for it, fully or in part.', 'You make regular payments over an agreed term.', 'The equipment itself usually secures the financing.'] },
      { p: 'Because the equipment backs the deal, approval can be easier than an unsecured loan, even for newer businesses.' },
      { h: 'What you can finance' },
      { ul: ['Trucks, vans and trailers', 'Restaurant and commercial kitchen equipment', 'Construction and landscaping machinery', 'Medical, dental and salon equipment', 'Manufacturing and printing machines', 'Computers, POS systems and technology', 'New or used equipment, in many cases'] },
      { h: 'Why finance instead of paying cash?' },
      { ul: [
        '**Keep your cash for operations.** Payroll, inventory and marketing still need funding.',
        '**Start earning right away.** The equipment can pay for itself as you use it.',
        '**Predictable payments** make budgeting easier.',
        '**Possible tax benefits.** Ask your accountant about Section 179 and depreciation rules for your situation.',
      ] },
      { h: 'Before you apply' },
      { p: 'Have the equipment quote or invoice, recent business bank statements, and basic business information ready. Knowing how the equipment will increase revenue helps make the case.' },
      { h: 'Finance your next piece of equipment' },
      { p: 'Grandwell Capital helps businesses across industries finance new and used equipment. Tell us what you need and we\'ll find terms that fit your cash flow.' },
    ],
  },
  {
    slug: 'business-debt-consolidation',
    title: 'Juggling Multiple Advances? How Business Debt Consolidation Can Help',
    description: 'Multiple daily payments eating your cash flow? Learn how business debt consolidation can combine them into one payment that\'s easier to manage.',
    date: '2026-11-08', readMinutes: 4, category: 'Debt Consolidation', img: photos.restaurant,
    cta: 'Get a free consolidation review',
    body: [
      { p: 'It often starts with one advance to cover a slow month. Then a second to handle a big order. Before long, three or four daily payments are pulling from your account, and there is barely enough left to run the business.' },
      { p: 'If that sounds familiar, consolidation may help.' },
      { h: 'What is business debt consolidation?' },
      { p: 'Consolidation replaces several existing loans or advances with one new funding product. Instead of multiple payments to multiple funders, you make one payment, ideally on a longer schedule that leaves more cash in your account each week.' },
      { h: 'Signs it might be time' },
      { ul: ['You have two or more advances or loans with daily or weekly payments', 'Payments take a large share of your deposits', 'You are taking new advances just to keep up with old ones', 'You are having trouble keeping track of balances and due dates', 'Overdrafts or bounced payments are starting to happen'] },
      { h: 'How it can help' },
      { ul: ['**One payment** instead of many', '**Better cash flow** when the new term is longer', '**Simpler bookkeeping** and fewer surprises', '**A path out of the cycle** instead of stacking more advances'] },
      { h: 'What to watch for' },
      { p: 'Consolidation is not right for every business. Compare the total cost of the new funding with what you would pay by finishing your current advances. A reputable funder will show you both numbers and tell you honestly if consolidating does not make sense.' },
      { h: 'What you\'ll need' },
      { ul: ['Recent business bank statements (3 to 6 months)', 'A list of current advances or loans, with balances and payment amounts', 'Your most recent statements or payoff letters from each funder'] },
      { h: 'Talk to Grandwell Capital' },
      { p: 'Grandwell Capital reviews your full picture, current positions and cash flow, and shows you whether consolidation can lower your payment pressure.' },
    ],
  },
  {
    slug: 'how-fast-can-you-get-business-funding',
    title: 'How Fast Can You Get Business Funding? A Realistic Timeline',
    description: 'Need business funding fast? Here\'s how long bank loans, alternative loans and merchant cash advances usually take, and how to speed things up.',
    date: '2026-11-08', readMinutes: 4, category: 'Applying', img: photos.trucks,
    cta: 'Apply now and get a fast decision',
    body: [
      { p: 'When a business needs money, it usually needs it soon. A broken cooler, a big order, a slow month before the busy season. So the first question owners ask is: how fast?' },
      { p: 'The honest answer: it depends on the product and how ready your paperwork is. Here is what to expect.' },
      { h: 'Typical timelines' },
      { table: {
        head: ['Funding type', 'Typical time to funds'],
        rows: [
          ['Merchant cash advance', 'Often 1 to 3 business days'],
          ['Alternative working capital loan', 'A few days to about a week'],
          ['Business line of credit', 'About 1 to 2 weeks to set up, then fast draws'],
          ['Equipment financing', 'A few days to 2 weeks'],
          ['Traditional bank loan', 'Several weeks to a few months'],
          ['SBA loan', 'Often 1 to 3 months or more'],
        ],
      } },
      { p: 'These are general ranges, not promises. Every file is different.' },
      { h: 'What slows funding down' },
      { ul: ['Missing or unreadable bank statements', 'Ownership details that don\'t match records', 'Unexplained large deposits or transfers', 'Slow replies to the funder\'s questions', 'Existing advances that weren\'t mentioned upfront'] },
      { h: 'How to get funded faster' },
      { ol: [
        '**Apply online** with complete information.',
        '**Upload your last 3 to 6 months of business bank statements** at the same time.',
        '**Keep your phone close.** A quick call to verify details can save a day.',
        '**Be honest** about existing loans or advances.',
        '**Sign promptly** once you have reviewed and agreed to the offer.',
      ] },
      { h: 'Fast, but not careless' },
      { p: 'Speed matters, but so does understanding what you are signing. Always review the total payback, payment schedule and any fees before you accept. A good funder will answer every question.' },
      { h: 'Need funding this week?' },
      { p: 'Grandwell Capital funds some deals directly and works with a network of partners, which helps us move quickly when your file is complete.' },
    ],
  },
  {
    slug: 'ways-to-use-working-capital-to-grow',
    title: '7 Smart Ways to Use Working Capital to Grow Your Business',
    description: 'Working capital isn\'t just for emergencies. Here are seven ways small businesses use funding to grow revenue, from holiday inventory to hiring.',
    date: '2026-11-08', readMinutes: 4, category: 'Growth', img: photos.bridge,
    cta: 'Apply today at Grandwell Capital',
    body: [
      { p: 'Most people think of business funding as a lifeline for tough times. The smartest owners use it differently: as a tool to grab opportunities they would otherwise miss.' },
      { p: 'Here are seven ways businesses put working capital to work.' },
      { h: '1. Stock up before the busy season' },
      { p: 'The holidays, summer, back-to-school. If your sales spike at certain times, buying inventory early, often at better prices, means you never say "sold out" during your best weeks.' },
      { h: '2. Take on a bigger contract' },
      { p: 'Landed a big client but need to buy materials or hire before they pay? Working capital bridges the gap so you can say yes.' },
      { h: '3. Hire before you are overwhelmed' },
      { p: 'Growing businesses often wait too long to hire. Funding lets you bring on help before service starts slipping.' },
      { h: '4. Take supplier discounts' },
      { p: 'Many suppliers offer discounts for paying early or buying in bulk. Those savings can add up to more than the cost of funding.' },
      { h: '5. Market your business' },
      { p: 'A marketing push, a new website or a local ad campaign brings in customers. Funding lets you invest now and earn it back over the following months.' },
      { h: '6. Upgrade equipment or technology' },
      { p: 'Faster equipment, a better POS system or new software can save hours every week and help you serve more customers.' },
      { h: '7. Cover payroll during slow months' },
      { p: 'Keeping good employees through a slow season is cheaper than hiring and training new ones when business picks back up.' },
      { h: 'The rule of thumb' },
      { p: 'Use funding for things that will make more money than they cost. Have a plan for how the investment pays back, and pick a product with terms that match that timeline.' },
      { h: 'Put your next opportunity in motion' },
      { p: 'Grandwell Capital provides working capital, lines of credit, term loans, equipment financing and merchant cash advances to businesses ready to grow.' },
    ],
  },
];

export const getPost = (slug: string) => posts.find(p => p.slug === slug);

export const formatDate = (d: string) =>
  new Date(`${d}T12:00:00Z`).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric', timeZone: 'UTC' });
