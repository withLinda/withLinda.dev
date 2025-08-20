import React, { useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";

interface Props {
  children: React.ReactNode;
}

export default function MobileMenu({ children }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* Hamburger Button */}
        <button
            type="button"
            className="p-2 text-2xl text-everforest-fg dark:text-everforest-fg hover:bg-everforest-button dark:hover:bg-everforest-button rounded-lg transition-colors rounded-md mr-4"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle mobile menu"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
        >
            {isOpen ? <IoClose /> : <IoMenu />}
        </button>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div 
          id="mobile-menu"
          role="navigation"
          aria-label="Mobile navigation"
          className="absolute right-2 top-full w-auto py-2 px-4 paper-ui-bg dark:bg-everforest-bg/60 backdrop-blur-[35px] backdrop-saturate-150 backdrop-brightness-110 border border-everforest-border dark:border-everforest-border rounded-lg shadow-lg"
        >
          <div className="flex flex-col gap-4 text-everforest-fg dark:text-everforest-fg">
            {children}
          </div>
        </div>
      )}
    </div>
  );
}
