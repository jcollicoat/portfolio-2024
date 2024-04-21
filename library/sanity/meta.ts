import { Metadata } from 'next';
import { client } from '@cms/client';
import { SEO } from '@cms/types/pages';

export const DEFAULT_META: Metadata = {
    title: 'Joseph Collicoat',
    description: 'Welcome to my portfolio, created with NextJS and Sanity CMS!',
    openGraph: {
        type: 'website',
        description:
            'Welcome to my portfolio, created with NextJS and Sanity CMS!',
        images: 'https://cdn.sanity.io/images/i55skkr4/production/b8ab9b8b355351b4c50b5b140ff48fd403d96678-1200x628.png',
        siteName: 'Joseph Collicoat',
        title: 'Joseph Collicoat',
        url: 'https://josephcollicoat.com',
    },
};

export const meta = async (
    query: string,
    slug: string = '',
): Promise<Metadata> => {
    const { meta_title, meta_description, meta_image } =
        await client.fetch<SEO>(query, { slug });

    if (!meta_title || !meta_description || !meta_image) {
        return DEFAULT_META;
    }

    return {
        title: meta_title,
        description: meta_description,
        openGraph: {
            ...DEFAULT_META.openGraph,
            description: meta_description,
            images: meta_image,
            title: meta_title,
        },
    };
};
