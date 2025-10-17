'use client';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { AnimatePresence, motion, type PanInfo } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import * as React from 'react';
import Autoplay from 'embla-carousel-autoplay';

interface LightboxProps {
  images: {
    image: string;
    width: number;
    height: number;
  }[];
  initialIndex?: number;
}

export function Lightbox({
  images,
  initialIndex = 0,
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
    <div>
      <Carousel
        opts={{
          align: 'start',
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 3000,
          }),
        ]}
      >
        <CarouselContent className='-ml-4'>
          {images.map((src, index) => (
            <CarouselItem
              key={index + 1}
              className='aspect-square overflow-hidden rounded-md md:basis-1/2 lg:basis-1/3 xl:basis-1/4'
            >
              <Image
                src={src.image}
                alt={`Image ${index + 1}`}
                className='h-full w-full cursor-pointer rounded-md bg-white object-cover p-1 transition-opacity hover:opacity-80'
                onClick={() => openLightbox(index)}
                width={src.width}
                height={src.height}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className='!bg-white !opacity-100' />
        <CarouselNext className='!bg-white !opacity-100' />
      </Carousel>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className='border-none bg-transparent p-0'>
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className='relative max-h-[95vh] px-12'
              >
                <motion.img
                  key={currentIndex}
                  src={images[currentIndex].image}
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
                    className='bg-opacity-50 hover:bg-opacity-75 pointer-events-auto rounded-full bg-black p-2 text-white transition-colors'
                  >
                    <ChevronLeft className='h-6 w-6' />
                  </button>
                  <button
                    onClick={nextImage}
                    className='bg-opacity-50 hover:bg-opacity-75 pointer-events-auto rounded-full bg-black p-2 text-white transition-colors'
                  >
                    <ChevronRight className='h-6 w-6' />
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </DialogContent>
      </Dialog>
    </div>
  );
}
