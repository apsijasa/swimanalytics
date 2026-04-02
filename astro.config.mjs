import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

const site = process.env.SITE ?? 'https://swimanalytics.org';

export default defineConfig({
  site,
  integrations: [
    tailwind(),
    ...(site ? [sitemap()] : []),
  ],
});
