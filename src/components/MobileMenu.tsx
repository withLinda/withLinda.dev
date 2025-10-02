import React, { Fragment, useEffect } from "react";
import { Menu, MenuButton, MenuItems, MenuItem, Transition } from "@headlessui/react";
import { IoMenu } from "react-icons/io5";

interface Props { children: React.ReactNode; }

export default function MobileMenu({ children }: Props) {
  // Keep a CSS var on <html> that mirrors the page background color (works across themes).
  useEffect(() => {
    const setPageBgVar = () => {
      const bg = getComputedStyle(document.body).backgroundColor; // e.g. "rgb(246, 240, 223)"
      const m = bg.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/i);
      if (m) {
        document.documentElement.style.setProperty("--page-bg-rgb", `${m[1]} ${m[2]} ${m[3]}`);
      }
    };
    setPageBgVar();
    // If the theme toggler flips a class on <html>, observe and refresh the var.
    const mo = new MutationObserver(setPageBgVar);
    mo.observe(document.documentElement, { attributes: true, attributeFilter: ["class", "data-theme"] });
    return () => mo.disconnect();
  }, []);
  return (
    <Menu as="div" className="relative z-50">
      {({ open }) => (
        <>
          <MenuButton
            className="p-2 text-2xl text-everforest-fg dark:text-everforest-fg rounded-xl hover:bg-everforest-button/20 transition-colors"
            aria-label="Open menu"
            aria-expanded={open}
          >
            <IoMenu />
          </MenuButton>

          {/* Overlay: dims page and blocks clicks while menu is open */}
          <Transition
            as={Fragment}
            show={open}
            enter="transition-opacity duration-150 ease-out"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-100 ease-in"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div
              className="fixed inset-0 z-40 bg-black/30 dark:bg-black/45 backdrop-blur-[2px]"
              aria-hidden="true"
            />
          </Transition>

          {/* Menu card */}
          <Transition
            as={Fragment}
            show={open}
            enter="transition duration-150 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="transition duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <MenuItems
              className="absolute right-0 top-full mt-2 w-60 p-2 shadow-xl ring-1 ring-black/10 rounded-2xl focus:outline-none z-50 backdrop-blur-md"
              // Paint with the real page background at ~94% opacity so blur still shows through.
              style={{ backgroundColor: "rgb(var(--page-bg-rgb) / 0.94)" }}
            >
              <ul className="flex flex-col gap-1 text-everforest-fg dark:text-everforest-fg" role="none">
                {React.Children.map(children, (child, idx) => (
                  <MenuItem as="li" key={idx} className="list-none">
                    {child}
                  </MenuItem>
                ))}
              </ul>
            </MenuItems>
          </Transition>
        </>
      )}
    </Menu>
  );
}
