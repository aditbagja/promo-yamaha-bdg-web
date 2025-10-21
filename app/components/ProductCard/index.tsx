import Link from 'next/link';
import { ProdukInterface } from '../Produk/Produk.interfaces';
import Image from 'next/image';

const ProductCard = ({ data }: { data: ProdukInterface }) => {
  return (
    <div key={data.name} className='flex flex-col justify-between gap-3'>
      <Link
        href={`/product/${data.key}`}
        className='w-full rounded-sm border lg:h-72 2xl:h-full'
      >
        <Image src={data.image} alt={data.name} height={500} width={500} />
      </Link>
      <div className='flex flex-col gap-1'>
        <p className='text-sm text-gray-500'>{data.category}</p>
        <Link
          href={`/product/${data.key}`}
          className='text-primary font-semibold'
        >
          {data.name}
        </Link>
        <p className='text-secondary text-sm font-semibold'>{data.price}</p>
      </div>
      <div>
        <button className='bg-primary hover:bg-secondary rounded-sm px-5 py-3 text-sm text-white transition-all duration-300'>
          Pesan Disini
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
