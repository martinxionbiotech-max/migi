// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import { isReleased } from './src/data/release-schedule.mjs';

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    // Staged release: pages whose wave date has not arrived are excluded from
    // the sitemap and marked noindex in the layout.
    sitemap({
      filter: (page) => isReleased(new URL(page).pathname),
    }),
  ],
  site: 'https://migibio.net',
});
