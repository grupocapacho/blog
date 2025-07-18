export type Image = {
    src: string;
    alt?: string;
    caption?: string;
};

export type Link = {
    text: string;
    href: string;
};

export type Hero = {
    title?: string;
    text?: string;
    image?: Image;
    actions?: Link[];
};

export type Subscribe = {
    title?: string;
    text?: string;
    formUrl: string;
};

export type SiteConfig = {
    website: string;
    logo?: Image;
    title: string;
    subtitle?: string;
    description: string;
    image?: Image;
    headerNavLinks?: Link[];
    footerNavLinks?: Link[];
    socialLinks?: Link[];
    hero?: Hero;
    subscribe?: Subscribe;
    postsPerPage?: number;
    projectsPerPage?: number;
};

const siteConfig: SiteConfig = {
    website: 'https://lorspi.com/blog/',
    title: 'UX Plenamente: Experiencias, Opiniones y Tips',
    subtitle: 'Reflexiones reales y consejos prácticos para mejorar la experiencia de usuario, desde mi mirada personal.',
    description: 'Reflexiones reales y consejos prácticos para mejorar la experiencia de usuario, desde mi mirada personal.',
    image: {
        src: 'ux-plenamente.jpg',
        alt: 'A pen on a book - Photo by Swanky Fella on Unsplash'
    },
    headerNavLinks: [
        {
            text: 'Inicio',
            href: '/blog/'
        },
        {
            text: 'Temas',
            href: '/blog/tags'
        }
    ],
    footerNavLinks: [
        {
            text: 'Acerca de mi',
            href: 'https://lorspi.com/'
        }
    ],
    socialLinks: [
        {
            text: 'Behance',
            href: 'https://www.behance.net/lorspi'
        },
        {
            text: 'LinkedIn',
            href: 'https://www.linkedin.com/in/lorspi/'
        }
    ],
    postsPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;
