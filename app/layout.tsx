import type { Metadata } from 'next';
import '@styles/layout.scss';
import { DEFAULT_META } from '@cms/meta';
import { Header } from '@components/Header/Header';

export const metadata: Metadata = DEFAULT_META;

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="../public/favicon.png" key="" />
            </head>
            <body>
                <Header />
                <main>{children}</main>
            </body>
        </html>
    );
}
