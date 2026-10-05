'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-dark-900/95 backdrop-blur border-b border-dark-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-bold text-red hover:text-red-dark transition">
            3H33
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            <Link href="#artists" className="hover:text-red transition">Artists</Link>
            <Link href="#agency" className="hover:text-red transition">Agency</Link>
            <Link href="#events" className="hover:text-red transition">Events</Link>
            <Link href="#contact" className="hover:text-red transition">Contact</Link>
          </div>

          <Link
            href="#contact"
            className="hidden md:block px-6 py-2 bg-red text-dark-900 font-bold hover:bg-red-dark transition"
          >
            BOOK
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex flex-col gap-1"
          >
            <span className={`w-6 h-0.5 bg-grey-200 transition ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`w-6 h-0.5 bg-grey-200 transition ${isOpen ? 'opacity-0' : ''}`} />
            <span className={`w-6 h-0.5 bg-grey-200 transition ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-dark-700 bg-dark-800">
          <div className="flex flex-col gap-4 p-4">
            <Link href="#artists" onClick={() => setIsOpen(false)}>Artists</Link>
            <Link href="#agency" onClick={() => setIsOpen(false)}>Agency</Link>
            <Link href="#events" onClick={() => setIsOpen(false)}>Events</Link>
            <Link href="#contact" onClick={() => setIsOpen(false)}>Contact</Link>
            <Link href="#contact" className="px-6 py-2 bg-red text-dark-900 font-bold w-full text-center">
              BOOK
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
