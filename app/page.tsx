import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { client } from '@cms/client';
import { meta } from '@cms/meta';
import { homepage, homepageMeta } from '@cms/queries';
import { PageData } from '@cms/types/pages';
import { ContentMapper } from '@components/ContentMapper/ContentMapper';

export async function generateMetadata(): Promise<Metadata> {
    return await meta(homepageMeta);
}

export default async function HomePage() {
    const data = await client.fetch<PageData>(homepage);
    if (!data) {
        return notFound();
    }
    console.log(data);

    return <ContentMapper sections={data.content} />;
}
