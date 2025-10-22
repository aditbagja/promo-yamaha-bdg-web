import { Icon } from '@iconify/react';
import Image from 'next/image';
import React from 'react';
import * as m from 'framer-motion/m';

const PromoText = React.lazy(() => import('../PromoText'));
const Promo = () => {
  return (
    <section id='promo' className='p-5'>
      <div className='flex flex-col gap-3'>
        <PromoText />
        <div className='mt-5 grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3'>
          {Array.from({ length: 5 }).map((_, index) => (
            <div key={index + 1}>
              <Image
                src={`/images/promo/promo-${index + 1}.jpg`}
                alt={`promo-${index + 1}`}
                height={500}
                width={500}
                className='w-full'
              />
              <div className='mt-3 flex w-full'>
                <m.div
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{ opacity: 1, x: 120 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <a
                    href='https://wa.me/6282116605311?text=Salam%20Semakin%20Didepan.%20Hallo,%20saya%20ingin%20menanyakan%20promo%20Yamaha'
                    target='_blank'
                    className='mx-auto flex cursor-pointer items-center gap-1 rounded-md bg-green-500 px-4 py-2 text-xs text-white transition-all duration-150 hover:bg-green-700 xl:text-base'
                  >
                    <Icon icon='mdi:whatsapp' width={25} height={25} />
                    WhatsApp Kami
                  </a>
                </m.div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Promo;
