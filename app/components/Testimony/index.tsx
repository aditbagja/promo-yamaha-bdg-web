import { Lightbox } from '@/components/ui/lightbox';
import Image from 'next/image';
import { testimoniImages } from './Testimony.const';

const Testimony = () => {
  return (
    <section className='bg-primary p-5'>
      <div className='flex flex-col gap-5'>
        <div className='flex justify-center'>
          <Image
            src='/images/yamaha-logo.png'
            alt='Yamaha Surya Putra Motor'
            height={360}
            width={300}
          />
        </div>
        <div className='mx-auto flex gap-3 px-10'>
          <Lightbox images={testimoniImages} />
        </div>
      </div>
    </section>
  );
};

export default Testimony;
