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
  const cleanSlug = slug.replaceAll('-', ' ');
  const motorByCategory = motorListHome.filter((item) =>
    item.tags?.includes(cleanSlug)
  );

  if (!motorByCategory) {
    return {
      title:
        'Motor dengan tag Tidak Ditemukan | Yamaha Surya Putra Motor Bandung',
      description: 'Kategori motor yang Anda cari tidak tersedia.',
    };
  }

  return {
    title: `Tag Motor ${cleanSlug} | Promo Yamaha Surya Putra Motor Bandung`,
    description: `Temukan motor yamaha tag ${cleanSlug} terbaru, promo menarik, dan layanan purna jual terbaik di Yamaha Surya Putra Motor Bandung.`,
    openGraph: {
      title: `Tag Motor ${cleanSlug} | Promo Yamaha Surya Putra Motor Bandung`,
      description: `Lihat detail motor kategori ${cleanSlug} dan promo menarik lainnya di Yamaha Surya Putra Motor Bandung.`,
    },
    keywords: motorByCategory.map((motor) => motor.tags).join(', '),
  };
}

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
      <Head>
        <title>{`Tag Motor ${cleanSlug} | Promo Yamaha Surya Putra Motor Bandung`}</title>
        <meta
          name='description'
          content={`Temukan motor Yamaha impianmu di Yamaha Surya Putra Motor Bandung`}
        />
        <meta
          property='og:title'
          content={`Tag Motor ${cleanSlug} terbaru | Promo Yamaha Surya Putra Motor Bandung`}
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
                <BreadcrumbPage>
                  Product tagged &quot;{cleanSlug}&quot;
                </BreadcrumbPage>
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
