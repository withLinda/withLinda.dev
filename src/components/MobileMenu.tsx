import React, { Fragment } from 'react'
import {
  Menu,
  MenuButton,
  MenuItems,
  MenuItem,
  Transition,
} from '@headlessui/react'
import { IoMenu, IoClose } from 'react-icons/io5'

interface Props {
  children: React.ReactNode
}

export default function MobileMenu({ children }: Props) {
  return (
    <Menu as="div" className="mobile-menu">
      {({ open }) => (
        <>
          <MenuButton
            className="mobile-menu__button"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <IoClose /> : <IoMenu />}
          </MenuButton>

          <Transition
            as={Fragment}
            show={open}
            enter="mobile-menu__overlay--enter"
            enterFrom="mobile-menu__overlay--enter-from"
            enterTo="mobile-menu__overlay--enter-to"
            leave="mobile-menu__overlay--leave"
            leaveFrom="mobile-menu__overlay--leave-from"
            leaveTo="mobile-menu__overlay--leave-to"
          >
            <div className="mobile-menu__overlay" aria-hidden="true" />
          </Transition>

          <Transition
            as={Fragment}
            show={open}
            enter="mobile-menu__card--enter"
            enterFrom="mobile-menu__card--enter-from"
            enterTo="mobile-menu__card--enter-to"
            leave="mobile-menu__card--leave"
            leaveFrom="mobile-menu__card--leave-from"
            leaveTo="mobile-menu__card--leave-to"
          >
            <MenuItems className="mobile-menu__card">
              <ul className="mobile-menu__list" role="none">
                {React.Children.map(children, (child, idx) => (
                  <MenuItem as="li" key={idx} className="mobile-menu__row">
                    {child}
                  </MenuItem>
                ))}
              </ul>
            </MenuItems>
          </Transition>
        </>
      )}
    </Menu>
  )
}
