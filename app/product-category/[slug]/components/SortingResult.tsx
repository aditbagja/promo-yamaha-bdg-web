'use client';

import { ProdukInterface } from '@/app/components/Produk/Produk.interfaces';
import { sortMotorList } from '@/app/utils/sortMotorList';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const SortingResult = ({
  motorByCategory,
}: {
  motorByCategory: ProdukInterface[];
}) => {
  const [motorList, setMotorList] =
    useState<ProdukInterface[]>(motorByCategory);

  const handleChange = (value: 'price-asc' | 'price-desc') => {
    setMotorList(sortMotorList(motorByCategory, value));
  };

  return (
    <>
      <div className='grid grid-cols-1 items-center gap-3 md:grid-cols-2'>
        <p>Menampilkan semua hasil</p>
        <div className='ml-auto flex w-full lg:w-1/2'>
          <Select onValueChange={handleChange}>
            <SelectTrigger className='!focus-visible:border-none !focus-visible:ring-0 w-full !bg-white !shadow-none'>
              <SelectValue placeholder='Urutkan berdasarkan' />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value='default'>Default sorting</SelectItem>
                <SelectItem value='price-asc'>Harga: Terendah</SelectItem>
                <SelectItem value='price-desc'>Harga: Tertinggi</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className='grid grid-cols-2 gap-3 md:grid-cols-3 xl:grid-cols-4'>
        {motorList.map((data) => (
          <div key={data.name} className='flex flex-col gap-3'>
            <Link
              href={`/product/${data.key}`}
              className='w-full rounded-sm border lg:h-72'
            >
              <Image
                src={data.image}
                alt={data.name}
                height={500}
                width={500}
              />
            </Link>
            <div className='flex h-20 flex-col gap-1'>
              <p className='text-sm text-gray-500'>{data.category}</p>
              <Link
                href={`/product/${data.key}`}
                className='text-primary font-semibold'
              >
                {data.name}
              </Link>
              <p className='text-secondary text-sm font-semibold'>
                {data.price}
              </p>
            </div>
            <div>
              <button className='bg-primary hover:bg-secondary rounded-sm px-5 py-3 text-sm text-white transition-all duration-300'>
                Pesan Disini
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default SortingResult;
