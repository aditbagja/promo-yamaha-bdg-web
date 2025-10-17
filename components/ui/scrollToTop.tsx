'use client';

import { Icon } from '@iconify/react';
import { useEffect, useState } from 'react';

const ScrollToTop = () => {
  const isBrowser = () => globalThis.window;

  function scrollToTop() {
    if (!isBrowser()) return;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <button
      className={`scrollToTopButton bg-secondary fixed bottom-0 left-5 z-50 mr-6 mb-[71px] flex items-center gap-2 p-2 text-xs ${isVisible ? 'visible' : ''}`}
      onClick={scrollToTop}
    >
      <Icon icon='mdi:chevron-up' height={25} width={25} color='white' />
    </button>
  );
};

export default ScrollToTop;
