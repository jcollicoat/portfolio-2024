import { PageContent } from './sections';

export interface SEO {
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

interface Page extends Theme {
    content: PageContent[];
}

export type PageData = Page | null;
