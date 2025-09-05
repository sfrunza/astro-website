import { SITE } from '@/config/site';

export async function GET() {
  const pages = [
    '',
    '/pricing',
    '/privacy',
    '/terms',
    '/company-policy',
    // Add more pages as you create them
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages
      .map((page) => {
        const url = `${SITE.url}${page}`;
        const lastmod = new Date().toISOString();
        return `
            <url>
              <loc>${url}</loc>
              <lastmod>${lastmod}</lastmod>
              <changefreq>weekly</changefreq>
              <priority>${page === '' ? '1.0' : '0.8'}</priority>
            </url>`;
      })
      .join('')}
          </urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
} 