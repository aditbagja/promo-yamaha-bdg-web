import { facebookLink, instagramLink } from '@/app/common/constants';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from '@/components/ui/menubar';
import { Icon } from '@iconify/react';
import Image from 'next/image';
import Link from 'next/link';
import { navbarMenu } from './Navbar.const';

const Navbar = () => {
  return (
    <nav className='sticky top-0 z-50 bg-white/80 px-3 py-3 md:px-10'>
      <div className='relative w-full'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-10'>
            <Link href='/'>
              <Image
                src='/images/logo-spm.png'
                alt='Surya Putra Motor'
                height={80}
                width={250}
                priority
              />
            </Link>
            <div className='hidden gap-5 lg:flex'>
              {navbarMenu.map((navMenu) => {
                if (navMenu.children) {
                  return (
                    <Menubar key={navMenu.title}>
                      <MenubarMenu>
                        <MenubarTrigger className='text-secondary flex gap-1'>
                          {navMenu.title}{' '}
                          <Icon icon='mdi:chevron-down' width={20} />
                        </MenubarTrigger>
                        <MenubarContent>
                          {navMenu.children.map((child) => (
                            <MenubarSub key={child.title}>
                              <MenubarSubTrigger className='text-secondary hover:text-primary'>
                                {child.title}
                              </MenubarSubTrigger>
                              <MenubarSubContent>
                                {child.children.map((mini) => (
                                  <MenubarItem key={mini.title} asChild>
                                    <Link
                                      href={mini.href}
                                      className='text-secondary hover:text-primary transition-all duration-300'
                                    >
                                      {mini.title}
                                    </Link>
                                  </MenubarItem>
                                ))}
                              </MenubarSubContent>
                            </MenubarSub>
                          ))}
                        </MenubarContent>
                      </MenubarMenu>
                    </Menubar>
                  );
                } else {
                  return (
                    <Link
                      key={navMenu.title}
                      href={navMenu.href}
                      className='text-secondary hover:text-primary text-sm transition-all duration-300 hover:scale-120'
                    >
                      {navMenu.title}
                    </Link>
                  );
                }
              })}
            </div>
          </div>
          <div className='lg:hidden'>
            <Drawer direction='right'>
              <DrawerTrigger
                id='menu'
                aria-labelledby='menu'
                className='bg-primary rounded-xs p-1'
              >
                <Icon
                  icon='solar:hamburger-menu-outline'
                  width={28}
                  height={28}
                  color='#ffff'
                />
              </DrawerTrigger>
              <DrawerContent className='bg-white/80'>
                <DrawerHeader className='flex items-end'>
                  <DrawerTitle>
                    <DrawerClose>
                      <Icon icon='mdi:close' width={28} height={28} />
                    </DrawerClose>
                  </DrawerTitle>
                </DrawerHeader>
                <div className='flex flex-col overflow-y-auto bg-white'>
                  {navbarMenu.map((menu, index) => {
                    if (menu.children) {
                      return (
                        <Accordion key={menu.title} type='single' collapsible>
                          <AccordionItem value={menu.title}>
                            <AccordionTrigger
                              className={`border-t rounded-[0]${
                                index === navbarMenu.length - 1
                                  ? 'border-b'
                                  : ''
                              } border-secondary text-secondary hover:text-primary pl-3 uppercase transition-all duration-300 hover:bg-blue-50`}
                            >
                              {menu.title}
                            </AccordionTrigger>
                            <AccordionContent>
                              {menu.children.map((child) => {
                                if (child.children) {
                                  return (
                                    <Accordion
                                      key={child.title}
                                      type='single'
                                      collapsible
                                    >
                                      <AccordionItem value={child.title}>
                                        <AccordionTrigger
                                          className={`border-t rounded-[0]${
                                            index === navbarMenu.length - 1
                                              ? 'border-b'
                                              : ''
                                          } border-secondary text-secondary hover:text-primary pl-6 uppercase transition-all duration-300 hover:bg-blue-50`}
                                        >
                                          &gt; {child.title}
                                        </AccordionTrigger>
                                        <AccordionContent className='flex flex-col'>
                                          {child.children.map((mini) => (
                                            <DrawerClose
                                              asChild
                                              key={mini.title}
                                              className={`border-t pl-8 ${
                                                index === navbarMenu.length - 1
                                                  ? 'border-b'
                                                  : ''
                                              } border-secondary text-secondary hover:text-primary uppercase transition-all duration-300 hover:bg-blue-50`}
                                            >
                                              <Link
                                                href={mini.href}
                                                className='p-3 uppercase'
                                              >
                                                &gt; {mini.title}
                                              </Link>
                                            </DrawerClose>
                                          ))}
                                        </AccordionContent>
                                      </AccordionItem>
                                    </Accordion>
                                  );
                                }
                              })}
                            </AccordionContent>
                          </AccordionItem>
                        </Accordion>
                      );
                    } else {
                      return (
                        <DrawerClose
                          asChild
                          key={menu.title}
                          className={`border-t ${
                            index === navbarMenu.length - 1 ? 'border-b' : ''
                          } border-secondary text-secondary hover:text-primary uppercase transition-all duration-300 hover:bg-blue-50`}
                        >
                          <Link href={menu.href} className='p-3 uppercase'>
                            {menu.title}
                          </Link>
                        </DrawerClose>
                      );
                    }
                  })}
                </div>
              </DrawerContent>
            </Drawer>
          </div>
          <div className='hidden gap-3 lg:flex'>
            <Link
              href={instagramLink}
              target='_blank'
              aria-label='Instagram Link'
            >
              <Icon icon='skill-icons:instagram' />
            </Link>
            <Link
              href={facebookLink}
              target='_blank'
              aria-label='Facebook Link'
            >
              <Icon icon='devicon:facebook' />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
