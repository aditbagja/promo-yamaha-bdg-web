const Divider = ({ backgroundColor }: { backgroundColor: string }) => {
  return (
    <div className='flex gap-1'>
      <div className={`${backgroundColor} h-1 w-1 rounded-full`} />
      <div className={`${backgroundColor} h-1 w-1 rounded-full`} />
      <div className={`${backgroundColor} h-1 w-1 rounded-full`} />
      <div className={`${backgroundColor} h-1 w-24 rounded-full`} />
    </div>
  );
};

export default Divider;
