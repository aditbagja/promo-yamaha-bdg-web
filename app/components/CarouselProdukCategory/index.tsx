'use client';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import Link from 'next/link';
import { productCategories } from '../Produk/Produk.const';

const CarouselProdukCategory = () => {
  return (
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
      <CarouselContent className='mx-auto -ml-3 flex'>
        {productCategories.map((cat) => (
          <CarouselItem key={cat.key} className='md:basis-1/3 xl:basis-1/4'>
            <Link href={`/product-category/${cat.key}`}>
              <Image src={cat.image} alt={cat.key} width={300} height={300} />
            </Link>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className='!border-0 !bg-transparent !shadow-none' />
      <CarouselNext className='!border-0 !bg-transparent !shadow-none' />
    </Carousel>
  );
};

export default CarouselProdukCategory;
