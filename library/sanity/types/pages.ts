type ContentTypes =
    | 'about_me'
    | 'articles'
    | 'hero_home'
    | 'hero_page'
    | 'projects';

interface PageContent {
    _type: ContentTypes;
}

interface SEO {
    meta_title: string;
    meta_description: string;
    meta_image: string;
}

interface Theme {
    theme: 'dark' | 'light' | 'custom';
    custom_theme?: {
        background: string;
        text: string;
    };
}

interface Page extends SEO, Theme {
    content: PageContent[];
}

export type PageData = Page | null;
