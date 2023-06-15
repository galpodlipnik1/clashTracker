'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import clsx from 'clsx';
const TopBar = ({ children }: { children: React.ReactNode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const session = useSession();
  const pathname = usePathname();
  
  

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="h-full">
      <nav className="border-gray-200 bg-gray-900 fixed inset-x-0 z-40">
        <div className="max-w-screen flex flex-wrap items-center justify-between mx-auto p-4">
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
                ClashTracker
              </span>
            </a>
          </div>
          <div className="flex items-center flex-row-reverse">
            <div className="md:hidden">
              <button type="button" className="text-white" onClick={toggleMenu}>
                <svg
                  className="w-6 h-6 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  {isMenuOpen ? (
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M5 18h14v-2H5v2zm0-5h14v-2H5v2zm0-7v2h14V6H5z"
                    />
                  ) : (
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M4 5h16v2H4V5zm0 7h16v2H4v-2zm0 7h16v2H4v-2z"
                    />
                  )}
                </svg>
              </button>
            </div>
            <div className="hidden md:flex items-center justify-between w-full md:w-auto md:order-1">
              <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 bg-gray-800 md:bg-gray-900 border-gray-700">
                <li>
                  <a
                    href="/"
                    className={clsx("block py-2 pl-3 pr-4 bg-blue-700 rounded md:bg-transparent md:p-0", pathname === '/' ? 'text-blue-500' : 'text-white')}
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="/bases"
                    className={clsx("block py-2 pl-3 pr-4 rounded md:p-0 md:hover:text-blue-500 hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700", pathname === '/bases' ? 'text-blue-500' : 'text-white')}
                  >
                    Bases
                  </a>
                </li>
                <li>
                  <a
                    href="/player"
                    className={clsx("block py-2 pl-3 pr-4 rounded md:p-0 md:hover:text-blue-500 hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700", pathname === '/player' ? 'text-blue-500' : 'text-white')}
                  >
                    Player
                  </a>
                </li>
                <li>
                  <a
                    href="/clan"
                    className={clsx("block py-2 pl-3 pr-4 rounded md:p-0 md:hover:text-blue-500 hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700", pathname === '/clan' ? 'text-blue-500' : 'text-white')}
                  >
                    Clan
                  </a>
                </li>
                <li>
                  <a
                    href="/about"
                    className={clsx("block py-2 pl-3 pr-4 rounded md:p-0 text-white md:hover:text-blue-500 hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700", pathname === '/about' ? 'text-blue-500' : 'text-white')}
                  >
                    About
                  </a>
                </li>
              </ul>
            </div>
            {session && session?.data?.user?.email ? (
              <Link
                href="/user"
                className="flex mx-10 text-sm rounded-full md:mr-0 flex-col items-center hover:scale-105 transition transform"
              >
                <span className="sr-only">user</span>
                <Image
                  className="rounded-full"
                  width={32}
                  height={32}
                  src={session.data.user.image || '/images/placeholder.jpg'}
                  alt="user photo"
                />
                <span className="text-sm text-gray-100">
                  {session.data.user.name}
                </span>
              </Link>
            ) : (
              <Link
                href="/auth"
                className="flex mx-10 text-sm rounded-full md:mr-0 flex-col items-center hover:scale-105 transition transform"
              >
                <span className="sr-only">user</span>
                <Image
                  className="rounded-full"
                  width={32}
                  height={32}
                  src="/images/placeholder.jpg"
                  alt="user photo"
                />
                <span className="text-sm text-gray-100">Sign In</span>
              </Link>
            )}
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden">
            <ul className="font-medium p-4 mt-4 border rounded-lg bg-gray-800 border-gray-700">
              <li>
                <a
                  href="/"
                  className="block py-2 pl-3 pr-4 text-white rounded md:p-0 md:text-blue-500"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/bases"
                  className="block py-2 pl-3 pr-4 rounded md:p-0 text-white md:hover:text-blue-500 hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700"
                >
                  Bases
                </a>
              </li>
              <li>
                <a
                  href="/player"
                  className="block py-2 pl-3 pr-4 rounded md:p-0 text-white md:hover:text-blue-500 hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700"
                >
                  Player
                </a>
              </li>
              <li>
                <a
                  href="/clan"
                  className="block py-2 pl-3 pr-4 rounded md:p-0 text-white md:hover:text-blue-500 hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700"
                >
                  Clan
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="block py-2 pl-3 pr-4 rounded md:p-0 text-white md:hover:text-blue-500 hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700"
                >
                  About
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
      <main className="h-full">{children}</main>
    </div>
  );
};

export default TopBar;
