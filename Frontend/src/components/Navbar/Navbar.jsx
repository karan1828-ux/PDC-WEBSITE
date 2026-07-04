import { useState, useEffect } from 'react'
import ditLogo from "../../assets/dit-logo.png";
import { Link } from 'react-router-dom'
import Logo from './Logo'

const NAV_LINKS = [
  { label: 'HOME', href: '/' },
  { label: 'EVENTS', href: '/#events' },
  { label: 'PERSONALITY %', href: '/personality' },
  { label: 'ACHIEVEMENTS', href: '/#achievements' },
  { label: 'TEAMS', href: '/teams' },
]

function Navbar({ onLoginClick, onHomeClick }) {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => setMenuOpen((prev) => !prev)
  const closeMenu = () => setMenuOpen(false)

  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-200" aria-label="Main navigation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex-shrink-0 flex items-center" aria-label="PDC Home" onClick={closeMenu}>
            <Logo />
          </Link>

          <button
            type="button"
            className="sm:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            onClick={toggleMenu}
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          <div className="hidden sm:flex sm:items-center sm:space-x-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                onClick={closeMenu}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center">
            <img
              src={ditLogo}
              alt="DIT Logo"
              className="h-10 w-auto object-contain"
            />
          </div>
        </div>
    </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="sm:hidden absolute top-16 left-0 w-full bg-white shadow-lg border-b border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                onClick={closeMenu}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
