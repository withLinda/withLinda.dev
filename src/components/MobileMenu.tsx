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
            className="p-2 text-2xl text-[#F27255] dark:text-[#F27255] hover:bg-solarized-button dark:hover:bg-nightowl-button rounded-lg transition-colors rounded-md mr-4"
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
          className="absolute right-2 top-[100%] w-auto py-2 px-4 paper-ui-bg dark:bg-nightowl-bg/60 backdrop-blur-lg border border-solarized-border dark:border-nightowl-border rounded-lg shadow-lg"
        >
          <div className="flex flex-col gap-4 text-[#F27255] dark:text-[#F27255]">
            {children}
          </div>
        </div>
      )}
    </div>
  );
}
