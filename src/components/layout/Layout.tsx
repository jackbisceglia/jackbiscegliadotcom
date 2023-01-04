import Image from 'next/image';

import Footer from './Footer';
import Navbar from './Navbar';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col justify-start">
      <Navbar />
      <main className="text-left p-6 sm:py-10 sm:px-12 sm:max-w-[900px] mx-auto">
        {children}
      </main>
      <Footer />
    </div>
  );
}
