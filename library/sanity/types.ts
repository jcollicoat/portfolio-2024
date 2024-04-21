export interface HeroHome {
    heading: string;
    intro: string;
    cta: string;
}

interface CustomTheme {
    background: string;
    text: string;
}

interface PageContent {
    _type: 'about_me' | 'articles' | 'hero_home' | 'hero_page' | 'projects';
}

export interface Page {
    meta_title: string;
    meta_description: string;
    meta_image: string;

    name: string;
    theme: 'dark' | 'light' | 'custom';
    custom_theme?: CustomTheme;

    content: PageContent[];
}
