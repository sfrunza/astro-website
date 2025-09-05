import { SITE } from '@/config/site';

export async function GET() {
  const robotsTxt = `User-agent: *
Allow: /

# Sitemap
Sitemap: ${SITE.url}/sitemap.xml

# Disallow admin areas (if any)
Disallow: /admin/
Disallow: /private/

# Crawl-delay for respectful crawling
Crawl-delay: 1`;

  return new Response(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
} 