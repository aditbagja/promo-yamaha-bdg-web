import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import React from 'react';
import './globals.css';
import { domAnimation, LazyMotion } from 'framer-motion';

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
});

const Navbar = React.lazy(() => import('./components/Navbar'));
const Footer = React.lazy(() => import('./components/Footer'));
const NavbarMemo = React.memo(Navbar);
const FooterMemo = React.memo(Footer);

const ScrollToTop = React.lazy(() => import('@/components/ui/scrollToTop'));
const ScrollToTopMemo = React.memo(ScrollToTop);
const WhatsAppMe = React.lazy(() => import('./components/WhatsAppMe'));
const WhatsAppMeMemo = React.memo(WhatsAppMe);

export const metadata: Metadata = {
  metadataBase: new URL('https://promoyamahaspmbandung.com'),
  title:
    'Yamaha Surya Putra Motor Bandung | Promo Yamaha Surya Putra Motor Bandung',
  description:
    'Dealer resmi Yamaha Bandung. Temukan motor Yamaha terbaru, promo menarik, dan layanan purna jual terbaik di Yamaha Surya Putra Motor Bandung.',
  keywords: [
    'yamaha',
    'promo',
    'bandung',
    'promo yamaha bandung',
    'surya putra motor',
    'fuji dwi nila',
    'Fuji Dwi Nila',
    'Promo Motor Yamaha',
    'Promo Yamaha',
  ],
  authors: [{ name: 'Fuji Dwi Nila' }],
  openGraph: {
    title:
      'Yamaha Surya Putra Motor Bandung | Promo Yamaha Surya Putra Motor Bandung',
    description:
      'Temukan motor Yamaha terbaru dan promo menarik di Yamaha Surya Putra Motor Bandung.',
    url: 'https://promoyamahaspmbandung.com',
    siteName: 'Yamaha Surya Putra Motor Bandung',
    images: [
      {
        url: '/images/logo-spm.png',
        width: 1200,
        height: 630,
        alt: 'Yamaha Surya Putra Motor Bandung',
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },
  alternates: {
    canonical: 'https://promoyamahaspmbandung.com',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${poppins.className} antialiased`}>
        <NavbarMemo />
        <LazyMotion features={domAnimation}>{children}</LazyMotion>
        <ScrollToTopMemo />
        <FooterMemo />
        <WhatsAppMeMemo />
      </body>
    </html>
  );
}
