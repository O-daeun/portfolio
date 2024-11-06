import Header from '@/components/header';
import '@/styles/globals.css';
import type { Metadata } from 'next';
import Head from 'next/head';

export const metadata: Metadata = {
  title: 'Oh Daeun',
  description: '오다은의 포트폴리오',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <Head>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
