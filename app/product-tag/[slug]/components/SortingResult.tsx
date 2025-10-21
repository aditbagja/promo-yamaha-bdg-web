'use client';

import ProductCard from '@/app/components/ProductCard';
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
          <ProductCard key={data.name} data={data} />
        ))}
      </div>
    </>
  );
};

export default SortingResult;
