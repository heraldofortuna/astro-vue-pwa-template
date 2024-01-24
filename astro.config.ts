import { defineConfig } from 'astro/config';

// Astro integration imports
import vue from '@astrojs/vue';
import AstroPWA from '@vite-pwa/astro';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import compress from 'astro-compress';

// Helper imports
import { manifest, seoConfig } from './utils/seoConfig';

export default defineConfig({
  site: seoConfig.baseURL,
  integrations: [vue(), AstroPWA(), tailwind(), sitemap(), compress()],
  vite: {
    plugins: [
      AstroPWA({
        registerType: 'autoUpdate',
        manifest,
        workbox: {
          globDirectory: 'dist',
          globPatterns: [
            '**/*.{js,css,svg,png,jpg,jpeg,gif,webp,woff,woff2,ttf,eot,ico}',
          ],
          // Don't fallback on document based (e.g. `/some-page`) requests
          // This removes an errant console.log message from showing up.
          navigateFallback: null,
        },
      }),
    ],
  },
});
