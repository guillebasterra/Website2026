'use client';

import { Link } from 'next-view-transitions';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const menuItems = [
  { label: 'About', href: '/' },
  { label: 'Projects', href: '/projects' },
  { label: 'Essays', href: '/essays' },
  { label: 'Contact', href: '/contact' },
];

const externalLinks = [
  { label: 'X', href: 'https://twitter.com/willybasterra' },
  { label: 'YouTube', href: 'https://youtube.com/@willybasterra' },
  { label: 'GitHub', href: 'https://github.com/guillebasterra' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/guillebasterra' },
  { label: 'Strava', href: 'https://strava.com' },
  { label: 'Goodreads', href: 'https://goodreads.com' },
  { label: 'Resume', href: '/resume.pdf' },
];

export default function Navigation() {
  const pathname = usePathname();
  const [isLinksOpen, setIsLinksOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Mobile Hamburger Button */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="fixed top-6 left-6 z-50 md:hidden w-10 h-10 flex flex-col justify-center items-center gap-1.5"
        aria-label="Toggle menu"
      >
        <span className={`w-6 h-0.5 bg-black transition-transform ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
        <span className={`w-6 h-0.5 bg-black transition-opacity ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
        <span className={`w-6 h-0.5 bg-black transition-transform ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
      </button>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-30 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Vertical Navigation Bar */}
      <nav
        className={`
          fixed top-0 left-0 h-screen w-64 bg-white
          flex flex-col py-16 px-12 z-40
          transition-transform duration-300
          md:translate-x-0
          ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
      >
        {/* Name at top */}
        <Link
          href="/"
          onClick={() => setIsMobileMenuOpen(false)}
          className="mb-12 text-xl font-semibold leading-tight hover:opacity-60 transition-opacity"
        >
          GUILLERMO<br />BASTERRA
        </Link>

        {/* Menu Items */}
        <div className="flex flex-col gap-5">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`
                text-base text-gray-500 transition-colors hover:text-black
                ${pathname === item.href ? 'text-black' : ''}
              `}
            >
              {item.label}
            </Link>
          ))}

          {/* Links Dropdown */}
          <div>
            <button
              onClick={() => setIsLinksOpen(!isLinksOpen)}
              className="text-base text-gray-500 transition-colors hover:text-black flex items-center gap-2"
            >
              Links
              <span className={`text-xs transition-transform ${isLinksOpen ? 'rotate-90' : ''}`}>
                ›
              </span>
            </button>
            {isLinksOpen && (
              <div className="mt-3 ml-4 flex flex-col gap-3">
                {externalLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-500 transition-colors hover:text-black"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}
