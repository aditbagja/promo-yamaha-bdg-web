import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Icon } from '@iconify/react';
import { Fragment } from 'react';
import Link from 'next/link';
import {
  CategoryInterface,
  ProdukInterface,
} from '@/app/components/Produk/Produk.interfaces';

interface ProductInformationProps {
  motor: ProdukInterface;
  category: CategoryInterface;
}

const ProductInformation = ({ motor, category }: ProductInformationProps) => {
  return (
    <div className='flex flex-col gap-3'>
      <Breadcrumb>
        <BreadcrumbList className='!gap-1 !text-base'>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href='/'>Home</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator>
            <Icon icon='mdi:slash-forward' />
          </BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href={`/product-category/${category?.key}`}>
                {motor?.category}
              </Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator>
            <Icon icon='mdi:slash-forward' />
          </BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbPage>{motor?.name}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <Link
        href={`/product-category/${category?.key}`}
        className='text-secondary hover:text-primary w-fit transition-all duration-300'
      >
        {motor?.category}
      </Link>
      <h1 className='text-xl font-semibold'>{motor?.name}</h1>
      <h1 className='text-2xl font-bold'>{motor?.price}</h1>
      {motor?.additionalInfo && (
        <div className='flex flex-col gap-2'>
          {motor.additionalInfo.map((info, index) => (
            <p key={index + 1}>{info}</p>
          ))}
        </div>
      )}
      <p className='text-lg font-semibold'>
        Promo Cash dan Kredit {motor?.name} Bandung Raya
      </p>
      <div className='mt-5 w-full'>
        <p className='uppercase'>Bonus Kelengkapan</p>
        <div className='mt-3 w-full lg:w-3/4'>
          <div className='grid grid-cols-2 gap-3'>
            <p className='uppercase'>Free</p>
            <p>• Dudukan Plat</p>
            <p>• Helm</p>
            <p>• Plat Sementara</p>
            <p>• Toolkit</p>
            <p>• Gratis Service 4x, Ganti Oli 1x</p>
          </div>
        </div>
      </div>
      <div className='flex flex-col gap-3 md:flex-row md:gap-5'>
        <div className='flex gap-1'>
          <p className='text-sm font-medium'>Category:</p>
          <Link
            href={`/product-category/${category?.key}`}
            className='text-secondary hover:text-primary w-fit text-sm transition-all duration-300'
          >
            {motor?.category}
          </Link>
        </div>
        <div className='flex gap-1'>
          <p className='text-sm font-medium'>Tags:</p>
          {motor?.tags?.map((tag, index) => {
            const converted = tag.replaceAll(' ', '-');
            return (
              <Fragment key={`${converted}-${index}`}>
                <Link
                  href={`/product-tag/${converted}`}
                  className='text-secondary hover:text-primary w-fit text-sm lowercase transition-all duration-300'
                >
                  {tag}
                </Link>
                {index < (motor?.tags?.length ?? 0) - 1 ? (
                  <span className='text-sm'>,</span>
                ) : null}
              </Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductInformation;
