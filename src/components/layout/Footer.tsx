import Image from 'next/image';

function Footer() {
  return (
    <footer className="py-6 w-full text-sm font-medium text-center text-coolmint-500 mt-auto">
      <h3>jack bisceglia - {new Date().getFullYear()} 🙏</h3>
    </footer>
  );
}

export default Footer;
