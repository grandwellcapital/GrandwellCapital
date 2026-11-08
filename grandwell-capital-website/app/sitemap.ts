import type { MetadataRoute } from 'next';
import { posts } from './blog/posts';

const base = 'https://grandwellcapital.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ['', '/about', '/financing', '/contact', '/blog'].map(path => ({ url: `${base}${path}` }));
  const articles = posts.map(p => ({ url: `${base}/blog/${p.slug}`, lastModified: p.date }));
  return [...pages, ...articles];
}
