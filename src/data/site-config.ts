export type Image = {
    src: string;
    alt?: string;
    caption?: string;
};

export type Link = {
    text: string;
    href: string;
    target?: string;
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
    website: 'https://blog.lorspi.com/',
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
        },
        {
            text: 'Acerca de mi',
            href: 'https://lorspi.com/',
            target: '_blank'
        }
    ],
    footerNavLinks: [
        {
            text: 'Inicio',
            href: '/blog/'
        },
        {
            text: 'Temas',
            href: '/blog/tags'
        },
        {
            text: 'Acerca de mi',
            href: 'https://lorspi.com/',
            target: '_blank'
        }
    ],
    socialLinks: [
        {
            text: 'Behance',
            href: 'https://www.behance.net/lorspi',
            target: '_blank'
        },
        {
            text: 'LinkedIn',
            href: 'https://www.linkedin.com/in/lorspi/',
            target: '_blank'
        }
    ],
    postsPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;
