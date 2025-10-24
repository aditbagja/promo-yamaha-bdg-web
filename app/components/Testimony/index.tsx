import { getListImagesFromFolder } from '@/app/utils/countFiles';
import { Lightbox } from '@/components/ui/lightbox';
import Image from 'next/image';

const Testimony = () => {
  const testimonyImageList = getListImagesFromFolder(
    `/public/images/testimony`,
    `/images/testimony`
  );

  return (
    <section id='testimoni' className='bg-primary p-5'>
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
          <Lightbox images={testimonyImageList ?? []} />
        </div>
      </div>
    </section>
  );
};

export default Testimony;
