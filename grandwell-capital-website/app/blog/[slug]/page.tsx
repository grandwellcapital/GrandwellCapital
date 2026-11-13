import Link from 'next/link';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { applyUrl } from '../../site-data';
import { type Block, formatDate, getPost, posts } from '../posts';

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return posts.map(p => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: `${post.title} | Grandwell Capital`,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: { type: 'article', title: post.title, description: post.description, url: `/blog/${post.slug}`, images: [{ url: post.cover, width: 1200, height: 630, alt: post.title }], publishedTime: post.date, siteName: 'Grandwell Capital' },
    twitter: { card: 'summary_large_image', title: post.title, description: post.description, images: [post.cover] },
  };
}

// Renders inline **bold** without a markdown library.
function Inline({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return <>{parts.map((part, i) => part.startsWith('**') && part.endsWith('**') ? <strong key={i}>{part.slice(2, -2)}</strong> : part)}</>;
}

function Render({ block }: { block: Block }) {
  if ('h' in block) return <h2>{block.h}</h2>;
  if ('p' in block) return <p><Inline text={block.p} /></p>;
  if ('ul' in block) return <ul>{block.ul.map((t, i) => <li key={i}><Inline text={t} /></li>)}</ul>;
  if ('ol' in block) return <ol>{block.ol.map((t, i) => <li key={i}><Inline text={t} /></li>)}</ol>;
  if ('formula' in block) return <p className="article-formula">{block.formula}</p>;
  return <div className="article-table"><table>
    <thead><tr>{block.table.head.map((c, i) => <th key={i}>{c}</th>)}</tr></thead>
    <tbody>{block.table.rows.map((r, i) => <tr key={i}>{r.map((c, j) => j === 0 ? <th key={j} scope="row">{c}</th> : <td key={j}>{c}</td>)}</tr>)}</tbody>
  </table></div>;
}

export default async function Article({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();
  const apply = `${applyUrl}/?utm_source=blog&utm_medium=article&utm_campaign=${post.slug}`;
  const more = posts.filter(p => p.slug !== post.slug).slice(0, 3);
  const jsonLd = {
    '@context': 'https://schema.org', '@type': 'BlogPosting',
    headline: post.title, description: post.description, image: `https://grandwellcapital.com${post.cover}`,
    datePublished: post.date, dateModified: post.date,
    author: { '@type': 'Organization', name: 'Grandwell Capital' },
    publisher: { '@type': 'Organization', name: 'Grandwell Capital' },
    mainEntityOfPage: `https://grandwellcapital.com/blog/${post.slug}`,
  };

  return <main>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    <section className="pagehead"><img src={post.img} alt="" /><div className="wrap">
      <div className="eyebrow"><Link href="/blog">Blog</Link> · {post.category}</div>
      <h1>{post.title}</h1>
      <p>{formatDate(post.date)} · {post.readMinutes} min read</p>
    </div></section>

    <section className="section"><div className="wrap article-wrap">
      <article className="article">
        <img className="article-cover" src={post.cover} alt={post.title} />
        {post.body.map((b, i) => <Render key={i} block={b} />)}
        <div className="article-cta">
          <div><strong>Ready to talk funding?</strong><span>No cost to apply. A Grandwell specialist will walk you through your options.</span></div>
          <a className="btn" href={apply}>{post.cta} →</a>
        </div>
        <p className="notice">This article is general information, not financial, legal or tax advice. All financing is subject to underwriting review and approval. Rates, terms, amounts and timing vary by program and applicant, and no approval or funding is guaranteed.</p>
      </article>
    </div></section>

    <section className="section soft"><div className="wrap">
      <div className="center"><div className="eyebrow">Keep Reading</div><h2>More from the blog</h2></div>
      <div className="service-grid blog-grid">
        {more.map(p => <Link key={p.slug} href={`/blog/${p.slug}`} className="service blog-card">
          <div className="service-img"><img src={p.cover} alt={p.title} loading="lazy" /></div>
          <div className="service-body">
            <div className="blog-meta">{p.category} · {p.readMinutes} min read</div>
            <h3>{p.title}</h3>
            <span className="text-link">Read article →</span>
          </div>
        </Link>)}
      </div>
    </div></section>
  </main>;
}
