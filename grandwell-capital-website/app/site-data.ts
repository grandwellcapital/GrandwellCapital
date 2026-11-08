// Photos are free-to-use Unsplash images (Unsplash License), served from Unsplash's CDN.
const u = (id: string, w = 1600) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const photos = {
  skyline: u('photo-1497968978037-599ea9980d60', 2000), // Brooklyn skyline at sunrise — Romain Briaux
  bridge: u('photo-1652823633229-070c47d14575', 2000), // Brooklyn Bridge & NYC skyline — Connor Home
  meeting: u('photo-1633431302384-94c9ea026f9d'), // team meeting around laptop — Zest Tea
  handshake: u('photo-1549923746-c502d488b3ea'), // two men shaking hands — Sebastian Herrmann
  owner: u('photo-1687293233211-6b0cc3beba70'), // small business owner at counter — Omar Lopez
  storefront: u('photo-1612012060786-58a0bf29474c'), // small shop storefront — Piret Ilver
  restaurant: u('photo-1517198283896-3781548afb5d'), // diner cooks — rob walsh
  equipment: u('photo-1768085091650-e8e89ef57b76'), // excavator — Unsplash
};

export const applyUrl = 'https://apply.grandwellcapital.com';
export const phone = { display: '332-345-0903', href: 'tel:+13323450903' };
export const email = 'Sam@GrandwellCapital.com';

export const services = [
  { slug: 'working-capital', icon: '◈', name: 'Working Capital', short: 'Cover payroll, inventory and day-to-day operations without slowing down.', img: photos.owner,
    detail: 'Short-term capital for operating needs such as payroll, inventory, marketing or bridging seasonal gaps. Amounts and terms depend on revenue history and the financing provider.' },
  { slug: 'merchant-cash-advance', icon: '⟳', name: 'Merchant Cash Advance', short: 'Revenue-based funding that adjusts with your sales volume.', img: photos.storefront,
    detail: 'An advance purchased against a portion of future business receivables. Often available to businesses with consistent card or deposit volume. Structure and total cost vary by provider.' },
  { slug: 'line-of-credit', icon: '⇄', name: 'Business Line of Credit', short: 'Draw what you need, when you need it, and pay for what you use.', img: photos.meeting,
    detail: 'A flexible credit facility you can draw on as needs come up. Revolving and non-revolving structures are available depending on the provider and qualifications.' },
  { slug: 'term-loans', icon: '▤', name: 'Term Loans & SBA', short: 'Predictable payments for expansion, acquisitions and larger projects.', img: photos.handshake,
    detail: 'Financing with a set repayment schedule for bigger investments. We can also discuss SBA program paths for businesses that qualify.' },
  { slug: 'equipment-financing', icon: '⚙', name: 'Equipment Financing', short: 'Put new or used machinery, vehicles and tools to work now.', img: photos.equipment,
    detail: 'Fund eligible equipment purchases, often with the equipment itself serving as collateral. Suitable for construction, transportation, restaurants, medical and more.' },
  { slug: 'debt-consolidation', icon: '⊕', name: 'Debt Consolidation', short: 'Restructure existing obligations into a more manageable plan.', img: photos.restaurant,
    detail: 'Review existing advances or loans and explore whether a consolidation or alternative structure could improve cash flow. Availability depends on your current positions.' },
];
