import type { Metadata } from 'next';
import React from 'react';
import { Inter } from 'next/font/google';
import ClientProvider from '@/components/Provider/ClientProvider';
import './globals.css';
import GAProvider from '@/components/Provider/GAProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'REBADGE-ME',
  description:
    'README SKILL Badge Generator, Specifically designed for React/NextJS developers',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <GAProvider />
      <body className={inter.className}>
        <ClientProvider>{children}</ClientProvider>
      </body>
    </html>
  );
}
