'use client';

import Divider from '@/components/ui/divider';
import { Icon } from '@iconify/react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { contactUs } from './Footer.const';

const Footer = () => {
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const checkWindowSize = () => {
      setIsTablet(window.innerWidth >= 768 && window.innerWidth <= 1023);
    };

    checkWindowSize();
    window.addEventListener('resize', checkWindowSize);
    return () => window.removeEventListener('resize', checkWindowSize);
  }, []);

  return (
    <>
      <section className='p-5' id='hubungi'>
        <div className='grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3'>
          <div>
            <div className='flex flex-col gap-5'>
              <div className='border-secondary border-l-4 px-5'>
                <h1 className='text-primary text-2xl font-semibold'>Sekilas</h1>
                <h1 className='text-2xl font-semibold uppercase'>
                  Yamaha Surya Putra Motor
                </h1>
              </div>
              <div className='pl-6'>
                <Divider backgroundColor='bg-primary' />
              </div>
            </div>
            <div className='mt-3 md:pl-6'>
              <b className='uppercase'>Yamaha Surya Putra Motor</b>
              <p className='font-light'>
                Sejak berdiri pada tahun 1997, kami berkomitmen sebagai Dealer
                Resmi Yamaha di wilayah Jawa Barat untuk memberikan pelayanan
                terbaik demi memenuhi seluruh kebutuhan Anda seputar kendaraan
                bermotor—dengan mudah, cepat, dan nyaman.
              </p>
            </div>
          </div>
          <div>
            <div className='flex flex-col gap-5'>
              <div className='border-secondary border-l-4 px-5'>
                <h1 className='text-2xl font-semibold'>Hubungi Kami</h1>
              </div>
              <div className='pl-6'>
                <Divider backgroundColor='bg-primary' />
              </div>
            </div>
            <div className='mt-3 flex flex-col gap-3'>
              {contactUs.map((contact) => (
                <div
                  key={contact.title}
                  className='flex w-full items-center gap-2'
                >
                  <div>
                    <Icon
                      icon={contact.icon}
                      width={35}
                      height={35}
                      className='text-primary'
                    />
                  </div>
                  <div>
                    <Link
                      href={contact.href}
                      target='_blank'
                      className='text-primary font-bold'
                    >
                      {contact.title}
                    </Link>
                    <p>{contact.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className='flex flex-col'>
              <div className='border-secondary mb-5 border-l-4 px-5'>
                <h1 className='text-2xl font-semibold'>Lokasi Kami</h1>
              </div>
              <div className='pl-6'>
                <Divider backgroundColor='bg-primary' />
              </div>
            </div>
            <div className='mt-5 md:pl-5'>
              <iframe
                title='lokasi yamaha surya putra motor'
                src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15842.595318527287!2d107.609761!3d-6.932509!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e8834cc1486b%3A0x4dbc2aee5b3b9121!2sJl.%20Ibu%20Inggit%20Garnasih%20No.122%2C%20Pungkur%2C%20Kec.%20Regol%2C%20Kota%20Bandung%2C%20Jawa%20Barat%2040252!5e0!3m2!1sen!2sid!4v1760544882533!5m2!1sen!2sid'
                width={isTablet ? '700' : '310'}
                height='300'
                loading='lazy'
                referrerPolicy='no-referrer-when-downgrade'
              ></iframe>
            </div>
          </div>
        </div>
      </section>
      <section className='bg-primary p-5'>
        <div className='mx-auto'>
          <p className='text-center text-white'>
            Copyright &copy; {new Date().getFullYear()} Yamaha Surya Putra Motor
          </p>
        </div>
      </section>
    </>
  );
};

export default Footer;
