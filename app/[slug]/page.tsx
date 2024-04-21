import { notFound } from 'next/navigation';
import { client } from '@cms/client';
import { page, slugs } from '@cms/queries';
import { PageData } from '@cms/types/pages';
import { Header } from '@components/Header/Header';

export async function generateStaticParams() {
    const pages = await client.fetch(slugs);
    return pages;
}

export default async function Page({ params }: { params: { slug: string } }) {
    const data = await client.fetch<PageData>(page, {
        slug: params.slug,
    });
    if (!data) {
        return notFound();
    }
    console.log(data);

    return <Header />;
}
