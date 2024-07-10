// components/Navbar.js
'use client';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gray-600 p-4 shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex-shrink-0">
            <Link href="/">
                <img className="h-8" src="/logo.svg" alt="Company Logo" />
            </Link>
          </div>
          <div className="hidden md:flex space-x-4">
            <Link href="/" passHref>
              <p className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                Products
              </p>
            </Link>
            <Link href="/about" passHref>
              <p className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                About Us
              </p>
            </Link>
            <Link href="/contact" passHref>
              <p className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                Contact Us
              </p>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
