import Link from 'next/link';
import type { Metadata } from 'next';
import { applyUrl, brand } from '../site-data';
import { posts } from './posts';

export const metadata: Metadata = {
  title: 'Business Funding Blog | Grandwell Capital',
  description: 'Plain-English guides on working capital, merchant cash advances, equipment financing, consolidation and applying for small business funding.',
  alternates: { canonical: '/blog' },
  openGraph: { title: 'The Grandwell Capital Blog', description: 'Plain-English guides on business funding from Grandwell Capital.', url: '/blog', images: [brand.banner], siteName: 'Grandwell Capital' },
};

export default function Blog() {
  return <main>
    <section className="pagehead"><img src={brand.office} alt="" /><div className="wrap">
      <div className="eyebrow">Insights</div>
      <h1>The Grandwell Capital Blog</h1>
      <p>Straight answers on business funding: what each option is, what it costs you to wait, and how to get approved faster.</p>
    </div></section>

    <section className="section soft"><div className="wrap">
      <div className="service-grid blog-grid">
        {posts.map(p => <Link key={p.slug} href={`/blog/${p.slug}`} className="service blog-card">
          <div className="service-img"><img src={p.cover} alt={p.title} loading="lazy" /></div>
          <div className="service-body">
            <div className="blog-meta">{p.category} · {p.readMinutes} min read</div>
            <h3>{p.title}</h3>
            <p>{p.description}</p>
            <span className="text-link">Read article →</span>
          </div>
        </Link>)}
      </div>
      <div className="center-actions"><a className="btn" href={`${applyUrl}/?utm_source=blog&utm_medium=index`}>Apply for Funding →</a></div>
    </div></section>
  </main>;
}
