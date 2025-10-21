import Link from 'next/link';

const NotFound = () => {
  return (
    <div className='py-64'>
      <div className='mx-auto flex flex-col items-center justify-center'>
        <h1 className='text-2xl'>Page not found.</h1>
        <Link
          href='/'
          className='text-secondary hover:text-primary mt-5 text-lg font-semibold transition-all duration-300'
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
