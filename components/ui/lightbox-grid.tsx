'use client';

import { Dialog, DialogContent } from '@/components/ui/dialog';
import { AnimatePresence, motion, type PanInfo } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import * as React from 'react';

interface LightboxProps {
  images: string[];
  initialIndex?: number;
  gridSize: string;
}

export function LightboxGrid({
  images,
  initialIndex = 0,
  gridSize,
}: Readonly<LightboxProps>) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [currentIndex, setCurrentIndex] = React.useState(initialIndex);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const handleDragEnd = (
    event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    if (info.offset.x > 100) {
      prevImage();
    } else if (info.offset.x < -100) {
      nextImage();
    }
  };

  return (
    <>
      <div className={`grid ${gridSize} gap-3`}>
        {images.map((src, index) => (
          <div key={index + 1} className='overflow-hidden'>
            <Image
              src={src}
              alt={`Image ${index + 1}`}
              className='h-full w-full cursor-pointer object-cover transition-opacity hover:opacity-80'
              onClick={() => openLightbox(index)}
              width={800}
              height={800}
            />
          </div>
        ))}
      </div>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className='border-none bg-transparent p-0'>
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className='relative h-full w-full'
              >
                <motion.img
                  key={currentIndex}
                  src={images[currentIndex]}
                  alt={`Full size image ${currentIndex + 1}`}
                  className='h-full w-full'
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                  drag='x'
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={1}
                  onDragEnd={handleDragEnd}
                />

                <div className='pointer-events-none absolute inset-0 flex items-center justify-between'>
                  <button
                    onClick={prevImage}
                    className='bg-opacity-50 hover:bg-opacity-75 pointer-events-auto rounded-full bg-white p-2 text-white transition-colors'
                  >
                    <ChevronLeft className='h-6 w-6 text-black' />
                  </button>
                  <button
                    onClick={nextImage}
                    className='bg-opacity-50 hover:bg-opacity-75 pointer-events-auto rounded-full bg-white p-2 text-white transition-colors'
                  >
                    <ChevronRight className='h-6 w-6 text-black' />
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </DialogContent>
      </Dialog>
    </>
  );
}
