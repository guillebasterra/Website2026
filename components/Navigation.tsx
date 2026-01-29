'use client';

import { Link } from 'next-view-transitions';
import { usePathname } from 'next/navigation';
import { useState, useRef, useEffect } from 'react';

const menuItems = [
  { label: 'About', href: '/' },
  { label: 'Projects', href: '/projects' },
  { label: 'Essays', href: '/essays' },
  { label: 'Quotes', href: '/quotes' },
  { label: 'Contact', href: '/contact' },
];

const externalLinks = [
  { label: 'X', href: 'https://twitter.com/willybasterra' },
  { label: 'YouTube', href: 'https://youtube.com/@willybasterra' },
  { label: 'GitHub', href: 'https://github.com/guillebasterra' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/guillermo-basterra-diezhandino' },
  { label: 'Strava', href: 'https://www.strava.com/athletes/62980423' },
  { label: 'Goodreads', href: 'https://www.goodreads.com/user/show/109482797-guillermo-basterra' },
  { label: 'Resume', href: '/resume.pdf' },
];

export default function Navigation() {
  const pathname = usePathname();
  const [isLinksOpen, setIsLinksOpen] = useState(false);
  const [isLinksClosing, setIsLinksClosing] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const linksDropdownRef = useRef<HTMLDivElement>(null);

  const closeLinks = () => {
    setIsLinksClosing(true);
    setTimeout(() => {
      setIsLinksOpen(false);
      setIsLinksClosing(false);
    }, 300 + externalLinks.length * 50); // Wait for animation to complete
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (linksDropdownRef.current && !linksDropdownRef.current.contains(event.target as Node)) {
        closeLinks();
      }
    }

    if (isLinksOpen && !isLinksClosing) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isLinksOpen, isLinksClosing]);

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
          fixed top-0 left-0 h-screen w-64 bg-[#f0efea]
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
          className="mb-6 text-xl font-semibold leading-tight hover:opacity-60 transition-opacity"
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
          <div ref={linksDropdownRef}>
            <button
              onClick={() => {
                if (isLinksOpen) {
                  closeLinks();
                } else {
                  setIsLinksOpen(true);
                }
              }}
              className="text-base text-gray-500 transition-colors hover:text-black flex items-center gap-2"
            >
              Links
              <span className={`text-xs transition-transform ${isLinksOpen && !isLinksClosing ? 'rotate-90' : ''}`}>
                ›
              </span>
            </button>
            {(isLinksOpen || isLinksClosing) && (
              <div className="mt-3 ml-4 flex flex-col gap-3 overflow-hidden">
                {externalLinks.map((link, index) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-500 transition-all hover:text-black opacity-0"
                    style={{
                      animation: isLinksClosing
                        ? `slideOut 0.3s ease-out ${(externalLinks.length - 1 - index) * 0.05}s forwards`
                        : `slideIn 0.3s ease-out ${index * 0.05}s forwards`,
                    }}
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
