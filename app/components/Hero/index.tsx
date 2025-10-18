'use client';

import { ImagesSlider } from '@/components/ui/images-slider';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { heroBenefit, imagesBanner, imagesBannerMobile } from './Hero.const';

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkWindowSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkWindowSize();
    window.addEventListener('resize', checkWindowSize);
    return () => window.removeEventListener('resize', checkWindowSize);
  }, []);

  console.log(isMobile);

  return (
    <section>
      <div key={isMobile ? 'mobile' : 'desktop'}>
        <ImagesSlider
          overlay={false}
          images={isMobile ? imagesBannerMobile : imagesBanner}
          className='h-[70vh] md:h-[80vh] lg:h-[90vh]'
        ></ImagesSlider>
      </div>
      <div className='bg-primary p-5'>
        <div className='grid grid-cols-3 gap-3'>
          {heroBenefit.map((data) => (
            <div
              className='flex flex-col md:flex-row md:gap-3'
              key={data.title}
            >
              <div className='h-28 rounded-md border-2 border-white py-8 md:my-auto md:px-8 lg:h-auto xl:py-3'>
                <Image
                  src={data.image}
                  alt={data.title}
                  color='#ffff'
                  width={50}
                  height={50}
                  className='mx-auto w-10 md:w-52 xl:w-40'
                />
              </div>
              <div className='mt-3 xl:my-auto'>
                <p className='text-center text-sm text-white md:text-left md:text-xl md:font-semibold xl:text-2xl'>
                  {data.title}
                </p>
                <p className='hidden text-sm text-white md:flex xl:text-xl'>
                  {data.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
