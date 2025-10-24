import { whatsAppPesanMotor } from '@/app/common/constants';
import { getStyle } from '@/app/styles/styles';
import Image from 'next/image';
import Link from 'next/link';
import CarouselProdukCategory from '../CarouselProdukCategory';
import { motorListHome } from './Produk.const';

const Produk = () => {
  const style = getStyle();
  return (
    <section className='p-5'>
      <div className='flex flex-col gap-10'>
        <h1 className={style.typography.title}>
          Produk <span className='text-secondary'>Terupdate</span>{' '}
          {new Date().getFullYear()}
        </h1>
        <div className='flex flex-col gap-5'>
          <div className='px-10'>
            <CarouselProdukCategory />
          </div>
          <div className='grid grid-cols-2 gap-3 md:grid-cols-4 lg:grid-cols-6'>
            {motorListHome.map((motor) => (
              <div key={motor.key} className='mt-5 flex flex-col gap-3'>
                <Link
                  href={`/product/${motor.key}`}
                  className='my-auto flex h-48 rounded-sm border-2 border-gray-300 xl:h-60'
                >
                  <Image
                    src={motor.image}
                    alt={motor.name}
                    width={400}
                    height={500}
                  />
                </Link>
                <div className='mx-auto flex h-28 flex-col justify-between gap-1 text-center 2xl:h-24'>
                  <p className='text-sm text-gray-500'>{motor.category}</p>
                  <Link
                    href={`/product/${motor.key}`}
                    className='text-primary font-semibold'
                  >
                    {motor.name}
                  </Link>
                  <p className='text-secondary text-sm font-semibold md:text-base'>
                    {motor.price}
                  </p>
                </div>
                <div className='mx-auto flex'>
                  <a
                    href={whatsAppPesanMotor(motor.name)}
                    target='_blank'
                    className='bg-primary hover:bg-secondary cursor-pointer rounded-md px-5 py-3 text-sm text-white transition-all duration-300'
                  >
                    Pesan Disini
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Produk;
