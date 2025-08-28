import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: 'https://blog.lorspi.com/',
<<<<<<< HEAD
    base: '/',
=======
    base: '/blog/',
>>>>>>> d14384583de2989c60f43290978dd723ad175a9e
    vite: {
        plugins: [tailwindcss()]
    },
    integrations: [mdx(), sitemap()]
});