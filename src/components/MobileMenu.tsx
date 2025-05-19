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
            className="p-2 text-2xl text-solarized-fg dark:text-nightowl-fg hover:bg-solarized-button dark:hover:bg-nightowl-button rounded-lg transition-colors rounded-md mr-4"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
        >
            {isOpen ? <IoClose /> : <IoMenu />}
        </button>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div className="absolute right-0 top-[100%] w-48 py-2 px-4 bg-solarized-bg dark:bg-nightowl-bg border border-solarized-border dark:border-nightowl-border rounded-lg shadow-lg">
          <div className="flex flex-col gap-4 text-solarized-fg dark:text-nightowl-fg">
            {children}
          </div>
        </div>
      )}
    </div>
  );
}
