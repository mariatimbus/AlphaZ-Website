import { useState } from 'react';

const defaultNavItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Team', href: '/team/' },
  { label: 'Press', href: '/press/' },
  { label: 'Sponsors', href: '#sponsors' },
  { label: 'Road to Worlds', href: 'https://donez.alphaz.ro', external: true },
];

export default function Navbar({ items = defaultNavItems }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="relative z-50 flex items-center justify-between px-4 sm:px-6 lg:px-[7%] py-3 lg:py-4">
      <a
        href="https://www.thebluealliance.com/team/11141"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 sm:gap-3 no-underline text-inherit shrink-0"
      >
        <img
          src="/image/logo.png"
          alt="AlphaZ Logo"
          className="h-7 sm:h-8 lg:h-10 w-auto"
        />
        <span className="font-[Audiowide] text-sm sm:text-base lg:text-xl tracking-wide text-white">
          Alpha<span className="text-[#67fefe]">Z</span>{' '}
          <span className="hidden sm:inline">#11141</span>
        </span>
      </a>

      <button
        className="lg:hidden text-white p-2 -mr-2"
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Toggle menu"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {mobileOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      <ul
        className={`flex list-none gap-6 lg:gap-8 transition-all duration-300 max-lg:fixed max-lg:inset-0 max-lg:top-[60px] max-lg:bg-black/95 max-lg:backdrop-blur-sm max-lg:flex-col max-lg:items-center max-lg:justify-center max-lg:gap-8 max-lg:z-40 ${
          mobileOpen ? 'max-lg:opacity-100 max-lg:pointer-events-auto' : 'max-lg:opacity-0 max-lg:pointer-events-none'
        }`}
      >
        {items.map((item) => (
          <li key={item.label}>
            <a
              href={item.href}
              target={item.external ? '_blank' : undefined}
              rel={item.external ? 'noopener noreferrer' : undefined}
              className="font-[Lato] text-white text-base lg:text-lg no-underline transition-colors duration-300 hover:text-[#67fefe] inline-block"
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
