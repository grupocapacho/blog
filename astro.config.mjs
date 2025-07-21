import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig, partytown } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: 'https://lorspi.com/blog/',
    base: '/blog/',
    vite: {
        plugins: [tailwindcss()]
    },
    integrations: [mdx(), sitemap()],
    integrations: [partytown({ config: { forward: ['dataLayer.push'] } })]
});