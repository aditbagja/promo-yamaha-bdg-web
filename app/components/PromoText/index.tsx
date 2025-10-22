'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TextAnimate } from '@/components/ui/text-animate';
import { getStyle } from '@/app/styles/styles';

export default function PromoText() {
  const words = ['Bulan ini', 'Termurah', 'Terbaik', 'Spektakuler'];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [words.length]);

  const style = getStyle();

  return (
    <h1 className={style.typography.title}>
      <span className='text-blue-800'>Promo Yamaha </span>
      <span className='text-secondary relative inline-block min-w-[90px]'>
        <AnimatePresence mode='wait'>
          <motion.span
            key={words[index]}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
          >
            <TextAnimate animation='slideLeft' by='character'>
              {words[index]}
            </TextAnimate>
          </motion.span>
        </AnimatePresence>
      </span>
    </h1>
  );
}
