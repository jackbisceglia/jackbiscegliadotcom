import Footer from './Footer';
import Image from 'next/image';
import Navbar from './Navbar';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col justify-start min-h-screen">
      <Navbar />
      <main className="text-left px-8 py-8 sm:pt-16 sm:pb-20 sm:px-12 sm:max-w-screen-lg mx-auto ">
        {children}
      </main>
      <Footer />
    </div>
  );
}
