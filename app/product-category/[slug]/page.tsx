import {
  motorListHome,
  productCategories,
} from '@/app/components/Produk/Produk.const';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Icon } from '@iconify/react';
import { Metadata } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import SortingResult from './components/SortingResult';

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const { slug } = await params;
  const category = productCategories.find((item) => item.key === slug);

  if (!category) {
    return {
      title:
        'Kategori Motor Tidak Ditemukan | Yamaha Surya Putra Motor Bandung',
      description: 'Kategori motor yang Anda cari tidak tersedia.',
    };
  }

  return {
    title: `Kategori Motor ${category?.name} | Promo Yamaha Surya Putra Motor Bandung`,
    description: `Temukan motor yamaha kategori ${category?.name} terbaru, promo menarik, dan layanan purna jual terbaik di Yamaha Surya Putra Motor Bandung.`,
    openGraph: {
      title: `Kategori Motor ${category?.name} | Promo Yamaha Surya Putra Motor Bandung`,
      description: `Lihat detail motor kategori ${category?.name} dan promo menarik lainnya di Yamaha Surya Putra Motor Bandung.`,
      images: [`${category?.image}`],
    },
    keywords: productCategories.map((item) => item.name).join(', '),
  };
}

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
      <Head>
        <title>{`Kategori Motor ${category?.name} | Promo Yamaha Surya Putra Motor Bandung`}</title>
        <meta
          name='description'
          content={`Temukan motor Yamaha impianmu di Yamaha Surya Putra Motor Bandung`}
        />
        <meta
          property='og:title'
          content={`Kategori Motor ${category?.name} terbaru | Promo Yamaha Surya Putra Motor Bandung`}
        />
        <meta
          property='og:description'
          content={`Temukan motor Yamaha impianmu dengan promo terbaik dari kami`}
        />
      </Head>
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
