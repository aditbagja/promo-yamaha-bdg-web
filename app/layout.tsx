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
  title: 'Yamaha Surya Putra Motor - Yamaha Surya Putra Motor Bandung',
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
