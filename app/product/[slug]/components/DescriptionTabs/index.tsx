'use client';

import { ProdukInterface } from '@/app/components/Produk/Produk.interfaces';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { LightboxGrid } from '@/components/ui/lightbox-grid';
import { Icon } from '@iconify/react';
import { useState } from 'react';

const MotorSpecSection = ({
  motor,
  section,
}: {
  motor: ProdukInterface;
  section: string;
}) => {
  const specs = motor.description?.specifications.find(
    (s) => s.section === section
  );
  if (!specs) return null;

  return (
    <div className='flex flex-col gap-5'>
      {specs.title.map((title) => {
        const desc = specs.desc.find((d) => d.key === title.key)?.value ?? '-';
        return (
          <div key={title.key} className='flex gap-2'>
            <p className='w-[40%] text-base'>{title.value}</p>
            <p>:</p>
            <p className='flex-1 text-base'>{desc}</p>
          </div>
        );
      })}
    </div>
  );
};

const DescriptionTabs = ({
  motor,
  motorImageList,
}: {
  motor: ProdukInterface;
  motorImageList: string[];
}) => {
  const spesifikasiData = [
    {
      key: 'mesin',
      title: 'Mesin',
      content: <MotorSpecSection motor={motor} section='mesin' />,
    },
    {
      key: 'dimensi',
      title: 'Dimensi',
      content: <MotorSpecSection motor={motor} section='dimensi' />,
    },
    {
      key: 'rangka',
      title: 'Rangka',
      content: <MotorSpecSection motor={motor} section='rangka' />,
    },
    {
      key: 'kelistrikan',
      title: 'Kelistrikan',
      content: <MotorSpecSection motor={motor} section='kelistrikan' />,
    },
  ];

  const tabData = [
    {
      title: 'Galeri',
      icon: 'solar:gallery-outline',
      body: (
        <div>
          <LightboxGrid
            images={motorImageList}
            gridSize='grid-cols-1 md:grid-cols-2 lg:grid-cols-4'
          />
        </div>
      ),
    },
    {
      title: 'Spesifikasi',
      icon: 'mdi:note-edit-outline',
      body: (
        <div>
          <Accordion type='single' collapsible className='border'>
            {spesifikasiData.map((spec) => (
              <AccordionItem key={spec.key} value={spec.key}>
                <AccordionTrigger className='!rounded-none border-b font-medium uppercase'>
                  {spec.key}
                </AccordionTrigger>
                <AccordionContent className='w-full p-4'>
                  {spec.content}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      ),
    },
  ];

  const [activeTab, setActiveTab] = useState(0);
  return (
    <div>
      <div className='border-secondary w-full border-t-4 py-2 md:w-fit'>
        <h1 className='font-bold'>Description</h1>
      </div>
      <div className='mt-5 flex flex-col gap-3 lg:flex-row'>
        <div className='flex gap-3 lg:flex-col'>
          {tabData.map((tab, index) => (
            <button
              key={tab.title}
              onClick={() => setActiveTab(index)}
              className={`${activeTab === index ? 'bg-primary' : 'bg-secondary hover:bg-primary'} flex w-full cursor-pointer items-center justify-center gap-3 rounded-lg py-3 text-sm font-semibold text-white transition-all duration-300 md:px-10`}
            >
              <Icon icon={tab.icon} width={25} height={25} />
              {tab.title}
            </button>
          ))}
        </div>
        <div className='w-full'>{tabData[activeTab].body}</div>
      </div>
    </div>
  );
};

export default DescriptionTabs;
