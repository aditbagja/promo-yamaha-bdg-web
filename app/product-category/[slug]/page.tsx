import {
  motorListHome,
  productCategories,
} from '@/app/components/Produk/Produk.const';
import Link from 'next/link';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Icon } from '@iconify/react';
import SortingResult from './components/SortingResult';

const ProductCategoryPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const category = productCategories.find((item) => item.key === slug);
  const motorByCategory = motorListHome.filter(
    (item) => item.category === category?.name
  );

  return (
    <section className='px-5 py-16'>
      <div className='flex flex-col gap-10'>
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
                <BreadcrumbPage>{category?.name}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <h1 className='text-5xl font-semibold'>{category?.name}</h1>
        </div>
        <SortingResult motorByCategory={motorByCategory} />
      </div>
    </section>
  );
};

export default ProductCategoryPage;
