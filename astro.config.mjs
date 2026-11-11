// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// GitHub Pages: https://richardpessuti.github.io/lp-Remax/
// Com domínio próprio, use SITE=https://seu.dominio e BASE_PATH=/
export default defineConfig({
  site: process.env.SITE ?? 'https://richardpessuti.github.io',
  base: process.env.BASE_PATH ?? '/lp-Remax/',
  vite: { plugins: [tailwindcss()] },
});
