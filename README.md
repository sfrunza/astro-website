# Phoenix Moving Website - Astro

A professional moving company website built with Astro, featuring comprehensive SEO optimization and analytics integration.

## Features

- **SEO Optimized**: Complete meta tags, structured data, sitemap, and robots.txt
- **Analytics Integration**: Google Analytics 4, Google Tag Manager, Facebook Pixel, Hotjar
- **Modern UI**: Built with shadcn/ui components
- **Performance**: Fast, static site generation with Astro
- **Structured Data**: JSON-LD markup for better search engine understanding

## SEO Components

### SEOHead Component

The main SEO component that handles all meta tags, Open Graph, Twitter Cards, and structured data.

```astro
---
import SEOHead from '@/components/SEOHead.astro';

const seoData = {
  title: "Page Title",
  description: "Page description",
  keywords: "keyword1, keyword2",
  image: "/og-image.jpg",
  type: "website",
  noindex: false,
  nofollow: false
};
---

<SEOHead {...seoData} />
```

### Analytics Component

Handles all analytics tracking including Google Analytics, Google Tag Manager, Facebook Pixel, and custom events.

```astro
---
import Analytics from '@/components/Analytics.astro';
---

<Analytics
  enableTracking={true}
  googleAnalyticsId="G-XXXXXXXXXX"
  googleTagManagerId="GTM-XXXXXXX"
  facebookPixelId="123456789"
  hotjarId="1234567"
/>
```

### JsonLd Component

For adding structured data to pages.

```astro
---
import JsonLd from '@/components/JsonLd.astro';

const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Page Title"
};
---

<JsonLd data={structuredData} />
```

## Configuration

### Site Configuration (`src/config/site.ts`)

Update the site configuration with your business information:

```typescript
export const SITE = {
  title: 'Your Business Name',
  description: 'Your business description',
  url: 'https://yourdomain.com',
  googleAnalyticsId: 'G-XXXXXXXXXX', // Your GA4 ID
  googleTagManagerId: 'GTM-XXXXXXX', // Your GTM ID
  // ... other settings
};
```

### Environment Variables

Create a `.env` file for sensitive data:

```env
PUBLIC_GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX
PUBLIC_GOOGLE_TAG_MANAGER_ID=GTM-XXXXXXX
PUBLIC_FACEBOOK_PIXEL_ID=123456789
PUBLIC_HOTJAR_ID=1234567
```

## Usage Examples

### Basic Page

```astro
---
import MainLayout from '@/layouts/MainLayout.astro';

const pageData = {
  title: "Page Title",
  description: "Page description",
  keywords: "keyword1, keyword2"
};
---

<MainLayout {...pageData}>
  <!-- Your page content -->
</MainLayout>
```

### Page with Custom Analytics

```astro
---
import MainLayout from '@/layouts/MainLayout.astro';

const pageData = {
  title: "Page Title",
  description: "Page description",
  enableAnalytics: true,
  googleAnalyticsId: "G-CUSTOMID",
  facebookPixelId: "123456789"
};
---

<MainLayout {...pageData}>
  <!-- Your page content -->
</MainLayout>
```

### Page with Structured Data

```astro
---
import MainLayout from '@/layouts/MainLayout.astro';
import JsonLd from '@/components/JsonLd.astro';

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Article Title",
  "author": {
    "@type": "Person",
    "name": "Author Name"
  }
};
---

<MainLayout
  title="Article Title"
  description="Article description"
  structuredData={structuredData}
>
  <JsonLd data={structuredData} />
  <!-- Your page content -->
</MainLayout>
```

## Analytics Events

The system automatically tracks:

- **Form submissions**: Any form with `data-form-name` attribute
- **Phone clicks**: Links with `tel:` protocol
- **Email clicks**: Links with `mailto:` protocol
- **CTA clicks**: Buttons with `data-cta` attribute

### Custom Event Tracking

```javascript
// Track custom events
if (typeof gtag !== 'undefined') {
  gtag('event', 'custom_event', {
    event_category: 'engagement',
    event_label: 'button_click',
  });
}
```

## SEO Features

### Automatic Features

- Meta tags (title, description, keywords)
- Open Graph tags
- Twitter Card tags
- Canonical URLs
- Robots meta tags
- Structured data (JSON-LD)
- Sitemap generation
- Robots.txt generation

### Manual Features

- Custom structured data per page
- Alternate language support
- Article-specific meta tags
- Noindex/nofollow control

## Performance

- Preconnect to external domains
- Optimized script loading
- Static site generation
- Minimal JavaScript

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment

The site generates static files that can be deployed to any hosting service:

- Vercel
- Netlify
- GitHub Pages
- AWS S3
- Any static hosting service

## Customization

### Adding New Analytics Providers

Edit `src/components/Analytics.astro` to add new tracking providers.

### Custom Structured Data

Create new structured data schemas in `src/config/site.ts` or pass them directly to pages.

### Styling

The site uses Tailwind CSS with shadcn/ui components. Customize styles in `src/styles/globals.css`.

## Support

For questions or issues, please refer to:

- [Astro Documentation](https://docs.astro.build)
- [shadcn/ui Documentation](https://ui.shadcn.com)
- [Google Analytics Documentation](https://developers.google.com/analytics)
