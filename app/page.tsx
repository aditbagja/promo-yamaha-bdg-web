import React from 'react';

const Hero = React.lazy(() => import('./components/Hero'));
const Promo = React.lazy(() => import('./components/Promo'));
const Welcome = React.lazy(() => import('./components/Welcome'));
const Produk = React.lazy(() => import('./components/Produk'));
const Testimoni = React.lazy(() => import('./components/Testimony'));

export default function Home() {
  return (
    <main>
      <Hero />
      <Promo />
      <Welcome />
      <Produk />
      <Testimoni />
    </main>
  );
}
