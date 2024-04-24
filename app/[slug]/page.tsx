import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { client } from '@cms/client';
import { meta } from '@cms/meta';
import { page, pageMeta, pageSlugs } from '@cms/queries';
import { PageData } from '@cms/types/pages';
import { ContentMapper } from '@components/ContentMapper/ContentMapper';

export async function generateStaticParams() {
    return await client.fetch(pageSlugs);
}

export async function generateMetadata({
    params,
}: {
    params: { slug: string };
}): Promise<Metadata> {
    return await meta(pageMeta, params.slug);
}

export default async function Page({ params }: { params: { slug: string } }) {
    const data = await client.fetch<PageData>(page, {
        slug: params.slug,
    });
    if (!data) {
        return notFound();
    }
    console.log(data);

    return <ContentMapper sections={data.content} />;
}
