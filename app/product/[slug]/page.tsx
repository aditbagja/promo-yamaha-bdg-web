import NotFound from '@/app/components/NotFound';
import ProductCard from '@/app/components/ProductCard';
import {
  motorListHome,
  productCategories,
} from '@/app/components/Produk/Produk.const';
import { getListImagesFromFolder } from '@/app/utils/countFiles';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Icon } from '@iconify/react';
import { Metadata } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import DescriptionTabs from './components/DescriptionTabs';
import ProductInformation from './components/ProductInformation';

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const { slug } = await params;
  const motor = motorListHome.find((item) => item.key === slug);

  if (!motor) {
    return {
      title: 'Produk Tidak Ditemukan | Yamaha Surya Putra Motor Bandung',
      description: 'Produk motor yang Anda cari tidak tersedia.',
    };
  }

  return {
    title: `Motor ${motor.name} | Promo Yamaha Surya Putra Motor Bandung`,
    description: `Temukan ${motor.name} terbaru, promo menarik, dan layanan purna jual terbaik di Yamaha Surya Putra Motor Bandung.`,
    openGraph: {
      title: `Motor ${motor.name} | Promo Yamaha Surya Putra Motor Bandung`,
      description: `Lihat detail ${motor.name} dan promo menarik lainnya di Yamaha Surya Putra Motor Bandung.`,
      images: [`/images/motor-detail/${motor.key}/1.png`],
    },
    keywords: productCategories.map((item) => item.name).join(', '),
  };
}

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

  const motorImageList = getListImagesFromFolder(
    `/public/images/motor-detail/${motor?.key}`,
    `/images/motor-detail/${motor?.key}`
  );

  if (motor && category) {
    return (
      <section className='px-5 py-10'>
        <Head>
          <title>{`Motor ${motor?.name} | Promo Yamaha Surya Putra Motor Bandung`}</title>
          <meta
            name='description'
            content={`Temukan motor Yamaha impianmu di Yamaha Surya Putra Motor Bandung`}
          />
          <meta
            property='og:title'
            content={`Motor ${motor?.name} | Promo Yamaha Surya Putra Motor Bandung`}
          />
          <meta
            property='og:description'
            content={`Temukan motor Yamaha impianmu dengan promo terbaik dari kami`}
          />
        </Head>
        <div className='flex flex-col gap-5'>
          <div className='grid grid-cols-1 gap-3 lg:grid-cols-2'>
            <Dialog>
              <DialogTrigger asChild className='mx-auto flex cursor-pointer'>
                <div>
                  <Image
                    src={`/images/motor-detail/${motor.key}/1.png`}
                    alt={motor.name}
                    width={700}
                    height={700}
                  />
                  <Icon icon='mdi:magnify' width={32} height={32} />
                </div>
              </DialogTrigger>
              <DialogContent className='border-none bg-white/50'>
                <Image
                  src={`/images/motor-detail/${motor.key}/1.png`}
                  alt={motor.name}
                  width={700}
                  height={700}
                />
              </DialogContent>
            </Dialog>
            <ProductInformation motor={motor} category={category} />
          </div>
          <DescriptionTabs motor={motor} motorImageList={motorImageList} />
        </div>
        <div className='mt-10 flex flex-col gap-3'>
          <h1 className='text-3xl font-medium'>Related Products</h1>
          <div className='mt-5 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4'>
            {motorListHome
              .filter((item) => item.category === category.name)
              .slice(0, 4)
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
