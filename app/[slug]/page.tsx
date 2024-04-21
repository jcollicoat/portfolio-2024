import { notFound } from 'next/navigation';
import { client } from '@cms/client';
import { page, slugs } from '@cms/queries';
import { PageType } from '@cms/types';
import { Header } from '@components/Header/Header';

export async function generateStaticParams() {
    const pages = await client.fetch(slugs);
    return pages;
}

export default async function Page({ params }: { params: { slug: string } }) {
    const data = await client.fetch<PageType>(page, {
        slug: params.slug,
    });
    if (!data.page) {
        return notFound();
    }
    console.log(data.page);

    return <Header />;
}
