import { getStyle } from '@/app/styles/styles';

const Produk = () => {
  const style = getStyle();
  return (
    <section className='p-5'>
      <div className='flex flex-col gap-3'>
        <h1 className={style.typography.title}>
          Produk <span className='text-secondary'>Terupdate</span>{' '}
          {new Date().getFullYear()}
        </h1>
      </div>
    </section>
  );
};

export default Produk;
