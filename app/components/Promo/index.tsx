import { getStyle } from '@/app/styles/styles';
import { Icon } from '@iconify/react';
import Image from 'next/image';

const Promo = () => {
  const style = getStyle();
  return (
    <section className='p-5'>
      <div className='flex flex-col gap-3'>
        <h1 className={style.typography.title}>
          Promo Yamaha <span className='text-secondary'>Terbaik</span>
        </h1>
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
                <button className='mx-auto flex cursor-pointer items-center gap-1 rounded-md bg-green-500 px-4 py-2 text-xs text-white transition-all duration-150 hover:bg-green-700 xl:text-base'>
                  <Icon icon='mdi:whatsapp' width={25} height={25} />
                  WhatsApp Kami
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Promo;
