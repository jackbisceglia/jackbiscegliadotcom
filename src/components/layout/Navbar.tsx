import Link from 'next/link';
import { useRouter } from 'next/router';

function Navbar() {
  const router = useRouter();

  const navStyle = '';

  const liStyle =
    'pl-0 px-3 sm:pl-6 sm:px-0 transition-colors duration-200 ease-in-out hover:text-purple-200';
  const liStyleActive = 'text-base font-bold';

  const NavLinks = [
    { title: 'home', href: '/' },
    { title: 'blog', href: '/blog' },
    { title: 'bookshelf', href: '/bookshelf' },
    { title: 'projects', href: '/projects' },
    { title: 'contact', href: '/contact' },
  ];

  return (
    <nav className="z-10 w-full sticky top-0 py-3 bg-navbar  border-b border-gray-300/10 backdrop-blur-sm ">
      <div className="flex justify-center sm:justify-between text-left px-6  sm:px-12 sm:max-w-[900px] mx-auto">
        <div className="hidden text-base font-semibold text-purple-400 sm:block sm:py-0">
          <h1 className="">
            <Link href="/">jack b.</Link>
          </h1>
        </div>
        <div className="flex text-base font-normal text-white">
          <ul className="flex">
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
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
