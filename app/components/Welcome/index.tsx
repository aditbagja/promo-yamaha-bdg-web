import { Icon } from '@iconify/react';
import Image from 'next/image';
import { socialMedia, tableContent } from './Welcome.const';
import Divider from '@/components/ui/divider';

const Welcome = () => {
  return (
    <section className='bg-primary p-5'>
      <div className='flex flex-col gap-5 lg:flex-row'>
        <div className='flex lg:w-[40%]'>
          <Image
            src='/images/spm.png'
            alt='Surya Putra Motor Logo'
            width={500}
            height={500}
            className='mx-auto my-auto w-1/2 lg:w-full'
          />
        </div>
        <div className='flex flex-col gap-5 lg:w-3/4'>
          <div>
            <div className='flex flex-col gap-5'>
              <div className='flex flex-col gap-2'>
                <div className='flex flex-col gap-1'>
                  <h1 className='text-secondary text-3xl font-semibold xl:text-4xl'>
                    Selamat Datang
                  </h1>
                  <Divider backgroundColor='bg-secondary' />
                </div>
                <h2 className='text-xl font-semibold text-white xl:text-2xl'>
                  Motor Yamaha SPM
                </h2>
              </div>
              <div className='flex flex-col gap-3'>
                <p className='text-white'>
                  Terima kasih telah mengunjungi situs
                  promoyamahaspmbandung.com. Kami menghargai setiap waktu yang
                  Anda luangkan, karena kami memahami bahwa waktu merupakan aset
                  berharga di tengah kesibukan dan aktivitas Anda.
                </p>
                <p className='text-white'>
                  Sejak berdiri pada tahun 1997, kami berkomitmen sebagai Dealer
                  Resmi Yamaha di wilayah Jawa Barat untuk memberikan pelayanan
                  terbaik demi memenuhi seluruh kebutuhan Anda seputar kendaraan
                  bermotor—dengan mudah, cepat, dan nyaman.
                </p>
              </div>
            </div>
          </div>
          <div className='grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-4'>
            {socialMedia.map((social) => (
              <button
                key={social.title}
                className='bg-primary flex cursor-pointer items-center justify-center gap-1 rounded-xs border border-white py-2 text-sm text-white'
              >
                <Icon icon={social.icon} width={25} height={25} />
                {social.title}
              </button>
            ))}
          </div>
          <div className='border border-white'>
            <p className='p-3 text-center font-semibold text-white'>
              Yuk Beli Yamaha disini !
            </p>
            <div className='grid grid-cols-2'>
              {tableContent.map((content) => (
                <div
                  key={content.title}
                  className={`border-t ${content.section === 1 && 'border-r'} border-white p-3`}
                >
                  <p className='text-white'>{content.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
