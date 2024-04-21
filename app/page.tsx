import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { client } from '@cms/client';
import { homepage, homepageMeta } from '@cms/queries';
import { PageData, SEO } from '@cms/types/pages';
import { Header } from '@components/Header/Header';

export async function generateMetadata(): Promise<Metadata> {
    const { meta_title, meta_description, meta_image } =
        await client.fetch<SEO>(homepageMeta);

    return {
        title: meta_title,
        description: meta_description,
        openGraph: {
            type: 'website',
            description: meta_description,
            images: meta_image,
            siteName: 'Joseph Collicoat',
            title: meta_title,
            url: 'https://josephcollicoat.com',
        },
    };
}

export default async function HomePage() {
    const data = await client.fetch<PageData>(homepage);
    if (!data) {
        return notFound();
    }
    console.log(data);

    return <Header />;
}
