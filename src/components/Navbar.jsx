import Logo from '../assets/images/Logo.png';
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Logo2 from '../assets/images/Logo-1.png';
import { useState } from 'react'


const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/About' },
  { name: 'Exercises', href: '/Exercises' },
  { name: 'Gallery', href: '/Gallery' },
]


export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  
  return (
    <>
               <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-center">
                <div className="flex flex-shrink-0 items-center">
                 <a href="/"> <img
                    className="h-10 w-auto my-2"
                    src={Logo}
                    alt="Your Company"
                  />
                  </a>
                  <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">BEAST</span>
                </div>
              </div>
              <div className="bg-white">
      <header className="relative inset-x-0 top-0 z-50">
        <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-black text-opacity-80 hover:text-opacity-100 border-b-2 border-red-600">
                {item.name}
              </a>
            ))}
          </div>
        </nav>
        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">BEAST</span>
                <img
                  className="h-10 w-auto"
                  src={Logo2}
                  alt=""
                />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
      </div>
    </>          
  )
}
