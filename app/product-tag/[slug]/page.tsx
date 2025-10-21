import { motorListHome } from '@/app/components/Produk/Produk.const';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Icon } from '@iconify/react';
import Link from 'next/link';
import SortingResult from './components/SortingResult';

const ProductTagPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const cleanSlug = slug.replaceAll('-', ' ');
  const motorByCategory = motorListHome.filter((item) =>
    item.tags?.includes(cleanSlug)
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
                <BreadcrumbPage>Product tagged "{cleanSlug}"</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <h1 className='text-5xl font-semibold'>{cleanSlug}</h1>
        </div>
        <SortingResult motorByCategory={motorByCategory} />
      </div>
    </section>
  );
};

export default ProductTagPage;
