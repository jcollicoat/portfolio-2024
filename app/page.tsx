import { notFound } from 'next/navigation';
import { client } from '@cms/client';
import { homepage } from '@cms/queries';
import { Page } from '@cms/types';
import { Header } from '@components/Header/Header';

export default async function HomePage() {
    const data = await client.fetch<Page>(homepage);
    if (!data) {
        return notFound();
    }
    console.log(data);

    return <Header />;
}
