import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

export default defineConfig({
  integrations: [tailwind(), react()],
  base: '/',
  outDir: './dist',
  publicDir: './public',
  // site: 'https://skiresortsco.com',
  title: 'Colorado Ski Resorts Directory Directory',
  devToolbar: {
    enabled: false
  }
});