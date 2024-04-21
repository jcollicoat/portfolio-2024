import type { Metadata } from 'next';
import '@styles/layout.scss';

export const metadata: Metadata = {
    title: 'Joseph Collicoat',
    description: 'Welcome to my portfolio',
};

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
            <body>{children}</body>
        </html>
    );
}
