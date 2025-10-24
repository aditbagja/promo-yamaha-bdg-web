import { whatsAppDefault } from '@/app/common/constants';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Icon } from '@iconify/react';
import Image from 'next/image';

const WhatsAppMe = () => {
  return (
    <div className='fixed right-0 bottom-0 z-50 mr-6 mb-10 flex items-center'>
      <DropdownMenu modal={false}>
        <DropdownMenuTrigger className='flex cursor-pointer items-center gap-1 rounded-full bg-gray-100 px-4 py-2 text-xs'>
          Konsultasi Gratis, Whatsapp Disini
          <Image
            src='/svg/whatsapp-colored.svg'
            width={25}
            height={25}
            alt='WhatsApp'
          />
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align='end'
          sideOffset={12}
          className='w-72 overflow-hidden rounded-xl !border-0 border-gray-200 p-0 shadow-xl'
        >
          <div className='flex items-center gap-3 bg-[#075E54] px-4 py-3 text-white'>
            <div className='relative h-10 w-10 rounded-full'>
              <Avatar className='size-10'>
                <AvatarImage src='/images/fuji-avatar.png' alt='Fuji Dwi' />
                <AvatarFallback>FD</AvatarFallback>
              </Avatar>
              <span className='absolute right-0 bottom-0 z-50 h-3 w-3 rounded-full border-2 border-[#075E54] bg-green-500'></span>
            </div>
            <div className='flex flex-col leading-tight'>
              <span className='text-sm font-semibold'>Fuji</span>
              <span className='text-xs'>Online</span>
            </div>
          </div>

          <div className="space-y-2 bg-[url('/images/wa-bg.png')] bg-cover bg-center px-4 pt-8 pb-16">
            <div className='inline-block rounded-2xl rounded-tl-xs bg-[#DCF8C6] px-3 py-2 text-sm font-light tracking-wider text-gray-800 shadow-sm'>
              Yamaha Semakin di Depan... Hi, ada yang dapat Admin bantu untuk
              Motor Yamaha impian Anda?
            </div>
          </div>

          <div className='border-t bg-white p-3'>
            <a
              href={whatsAppDefault}
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center justify-center gap-2 rounded-full bg-[#25D366] py-2 text-sm text-white transition-colors hover:bg-[#20b958]'
            >
              <Icon icon='mdi:whatsapp' width={25} height={25} /> Balas Pesan...
            </a>
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default WhatsAppMe;
