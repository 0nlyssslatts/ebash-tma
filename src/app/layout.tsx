import type { Metadata } from 'next';
import localFont from 'next/font/local';
import Script from 'next/script';

import './globals.css';
import ProviderLayout from '@/components/Provider/Provider';

export const metadata: Metadata = {
  title: 'EBASH',
  description: 'EBASH Telegram Mini App',
};

const blackout = localFont({
  src: [
    {
      path: '../../public/fonts/Blackout Sunrise.ttf',
    },
  ],
  variable: '--font-blackout',
  display: 'swap',
});

const montserrat = localFont({
  src: [
    {
      path: '../../public/fonts/Montserrat.ttf',
    },
  ],
  variable: '--font-montserrat',
  display: 'swap',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script src="https://telegram.org/js/telegram-web-app.js?56" strategy="beforeInteractive" />
      </head>
      <body
        style={{
          marginTop: 'var(--tg-content-safe-area-inset-top)',
        }}
        className={`${blackout.variable} ${montserrat.variable} font-sans h-100vh`}
      >
        <ProviderLayout>{children}</ProviderLayout>
      </body>
    </html>
  );
}
