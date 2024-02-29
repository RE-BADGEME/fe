import type { Metadata } from 'next';
import Script from 'next/script';
import React from 'react';
import ClientProvider from '@/components/Provider/ClientProvider';
import './globals.css';
import GAProvider from '@/components/Provider/GAProvider';

export const metadata: Metadata = {
  title: 'REBADGE-ME | README TABLE for Skill Badge',
  description:
    'README TABLE for Skill Badge, REBADGE-ME streamlines the process of adding attractive and informative skill badges from https://shields.io/ to your README.md file, making your profile stand out!',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="OIR4wZ8wR29Lo-Aue-IjqJ71QaHjHcq1gMNw2vYgJzg"
        />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <Script
        id="google-analytics"
        src="https://www.googletagmanager.com/gtag/js?id=G-46PJBDZTCH"
        strategy="afterInteractive"
      />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-46PJBDZTCH');
        `}
      </Script>
      <GAProvider />
      <body className="font-basic">
        <ClientProvider>{children}</ClientProvider>
      </body>
    </html>
  );
}
