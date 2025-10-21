import {
  motorListHome,
  productCategories,
} from '@/app/components/Produk/Produk.const';

import NotFound from '@/app/components/NotFound';
import Image from 'next/image';
import ProductInformation from './components/ProductInformation';
import DescriptionTabs from './components/DescriptionTabs';
import ProductCard from '@/app/components/ProductCard';

const ProductPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const motor = motorListHome.find((item) => item.key === slug);
  const category = productCategories.find(
    (item) => item.name === motor?.category
  );

  if (motor && category) {
    return (
      <section className='px-5 py-10'>
        <div className='flex flex-col gap-5'>
          <div className='grid grid-cols-1 gap-2 lg:grid-cols-2'>
            <div>
              <Image
                src={motor.image}
                alt={motor.name}
                width={700}
                height={700}
              />
            </div>
            <ProductInformation motor={motor} category={category} />
          </div>
          <DescriptionTabs motor={motor} />
        </div>
        <div className='mt-10 flex flex-col gap-3'>
          <h1 className='text-3xl font-medium'>Related Products</h1>
          <div className='mt-5 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4'>
            {motorListHome
              .filter((item) => item.category === category.name)
              .map((data) => (
                <ProductCard key={data.name} data={data} />
              ))}
          </div>
        </div>
      </section>
    );
  } else {
    return <NotFound />;
  }
};

export default ProductPage;
