import React from "react";
import { Menu, MenuButton, MenuItems, Transition } from "@headlessui/react";
import { IoMenu } from "react-icons/io5";

interface Props {
  children: React.ReactNode;
}

export default function MobileMenu({ children }: Props) {
  return (
    <Menu as="div" className="relative">
      <MenuButton className="p-2 text-2xl text-everforest-fg dark:text-everforest-fg hover:bg-everforest-button dark:hover:bg-everforest-button rounded-lg transition-colors">
        <IoMenu />
      </MenuButton>
      
      <Transition
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <MenuItems className="absolute right-0 top-full mt-2 w-auto py-2 px-4 bg-everforest-bg/90 dark:bg-everforest-bg/90 backdrop-blur-md border border-everforest-border dark:border-everforest-border rounded-lg shadow-lg">
          <div className="flex flex-col gap-4 text-everforest-fg dark:text-everforest-fg">
            {children}
          </div>
        </MenuItems>
      </Transition>
    </Menu>
  );
}
