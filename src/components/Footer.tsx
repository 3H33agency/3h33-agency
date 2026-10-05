'use client';

import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-800 border-t border-dark-700 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-white mb-4">3H33</h3>
            <p className="text-grey-400 text-sm">
              Premium nightlife artist management and event booking agency.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-white mb-4">LINKS</h3>
            <ul className="space-y-2 text-grey-400 text-sm">
              <li><Link href="https://n8life.fr" target="_blank" className="hover:text-red transition">N8LIFE</Link></li>
              <li><Link href="https://instagram.com/3h33agency" target="_blank" className="hover:text-red transition">Instagram</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-white mb-4">LEGAL</h3>
            <ul className="space-y-2 text-grey-400 text-sm">
              <li><Link href="/privacy" className="hover:text-red transition">Privacy</Link></li>
              <li><Link href="/terms" className="hover:text-red transition">Terms</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-dark-700 pt-8 text-center text-grey-400 text-sm">
          <p>&copy; {currentYear} 3h33 Agency. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
