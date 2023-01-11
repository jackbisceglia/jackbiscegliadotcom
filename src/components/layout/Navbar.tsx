import {
  ChevronRightIcon,
  Cross1Icon,
  DoubleArrowRightIcon,
  HamburgerMenuIcon,
} from '@radix-ui/react-icons';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

function Navbar() {
  const [showPopOut, setShowPopOut] = useState(false);
  const [linksLoaded, setLinksLoaded] = useState([false, false, false, false]);

  const toggleMenu = () => {
    if (showPopOut) {
      resetLinks();
    } else {
      fadeLinksIn();
    }
    setShowPopOut((open) => !open);
  };

  const fadeLinksIn = () => {
    linksLoaded.forEach((_, linkIdx) => {
      setTimeout(() => {
        setLinksLoaded((prev) => {
          const links = [...prev];
          links[linkIdx] = true;
          return links;
        });
      }, 75 * linkIdx);
    });
  };

  const resetLinks = () => setLinksLoaded([false, false, false, false]);

  const router = useRouter();

  const liStyle = `flex items-center transition-all duration-500 ease-in-out hover:text-coolmint-500 hover:pl-4 group`;
  const liStyleActive = ' text-coolmint-500 font-bold';

  const NavLinks = [
    { title: 'home', href: '/' },
    { title: 'blog', href: '/blog' },
    { title: 'bookshelf', href: '/bookshelf' },
    { title: 'projects', href: '/projects' },
    { title: 'contact', href: '/contact' },
  ];

  return (
    <nav className="sticky top-0 z-10 w-full py-4 text-lg border-b sm:text-base bg-coolmint-800/40 border-coolmint-300/20 backdrop-blur-sm">
      {!showPopOut ? (
        <div className="flex items-center justify-between text-left px-8  sm:px-12 sm:max-w-[900px] mx-auto">
          <div className="text-base font-semibold text-coolmint-500 sm:py-0">
            <h1 className="animate-wiggle hover:rotate-[4.5deg] duration-200  ">
              <Link
                href="/"
                className="transition-all duration-75 ease-in-out "
              >
                jack b. 🍀
              </Link>
            </h1>
          </div>
          <ul className="justify-between hidden gap-5 text-base font-normal text-white md:flex">
            {NavLinks.map(({ title, href }, idx) => (
              <li
                key={idx}
                className={`${liStyle} ${
                  router.asPath === href ? liStyleActive : ''
                }`}
              >
                <Link href={href}>{title}</Link>
              </li>
            ))}
          </ul>
          <button
            className="flex h-full text-neutral-200 md:hidden hover:text-coolmint-500"
            onClick={toggleMenu}
          >
            <HamburgerMenuIcon className="w-5 h-full" />
          </button>
        </div>
      ) : (
        <div
          className={`absolute top-0 z-10 flex flex-col items-start justify-center h-screen w-full p-8 bg-coolmint-800  duration-50 transition-all ease-in-out`}
        >
          <button
            className="absolute flex top-8 left-8 text-neutral-200 hover:text-coolmint-500"
            onClick={toggleMenu}
          >
            <Cross1Icon className="w-8 h-full" />
          </button>
          <ul className="flex flex-col justify-between gap-5 text-2xl font-normal text-white ">
            {NavLinks.map(({ title, href }, idx) => (
              <li
                key={idx}
                className={`${liStyle} ${
                  linksLoaded[idx] ? 'opacity-100' : 'opacity-0'
                } ${router.asPath === href ? liStyleActive : ''}`}
              >
                <Link className={`mr-1`} href={href} onClick={toggleMenu}>
                  {title}
                </Link>
                <DoubleArrowRightIcon className="transition-all duration-150 ease-in-out opacity-0 group-hover:opacity-100" />
                <DoubleArrowRightIcon className="-ml-[0.2rem] transition-all duration-300 ease-in-out opacity-0 group-hover:opacity-100" />
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
