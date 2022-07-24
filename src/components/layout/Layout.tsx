import Image from 'next/Image';

import Footer from './Footer';
import Navbar from './Navbar';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="flex flex-col justify-between w-full min-h-screen">
        <Navbar />
        <main className="flex w-full h-full px-6 py-6 grow sm:py-8 sm:px-16 md:px-18 lg:py-12 lg:px-32">
          <div className="flex flex-col items-center justify-start lg:items-start lg:justify-center lg:flex-row">
            {children}
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}

{
  /* <div class="flex flex-col h-screen justify-between">
  <header class="h-10 bg-red-500">Header</header>
  <main class="mb-auto h-10 bg-green-500">Content</main>
  <footer class="h-10 bg-blue-500">Footer</footer>
</div> */
}
