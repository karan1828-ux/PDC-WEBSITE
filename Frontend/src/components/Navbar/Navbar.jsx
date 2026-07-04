<<<<<<< Updated upstream
import { useState, useEffect } from 'react'
=======
import { useState } from 'react'
import ditLogo from "../../assets/dit-logo.png";
import { Link } from 'react-router-dom'
>>>>>>> Stashed changes
import Logo from './Logo'
import './Navbar.css'

const NAV_LINKS = [
<<<<<<< Updated upstream
  { label: 'HOME', href: '#home' },
  { label: 'EVENTS', href: '#events' },
  { label: 'PERSONALITY %', href: '#personality' },
  { label: 'ACHIEVEMENTS', href: '#achievements' },
=======
  { label: 'HOME', href: '/' },
  { label: 'EVENTS', href: '/#events' },
  { label: 'PERSONALITY %', href: '/personality' },
  { label: 'ACHIEVEMENTS', href: '/#achievements' },
  { label: 'TEAMS', href: '/teams' },
>>>>>>> Stashed changes
]

function Navbar({ onLoginClick, onHomeClick }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [currentHash, setCurrentHash] = useState(window.location.hash || '#home')

  useEffect(() => {
    const handleHashChange = () => setCurrentHash(window.location.hash || '#home');
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const toggleMenu = () => setMenuOpen((prev) => !prev)
  const closeMenu = () => setMenuOpen(false)

  const handleHomeClick = () => {
    if (onHomeClick) {
      onHomeClick()
    }
    closeMenu()
  }

  return (
    <nav className="navbar" aria-label="Main navigation">
      <div className="navbar__container">
        <a href="#home" className="navbar__logo" aria-label="PDC Home" onClick={handleHomeClick}>
          <Logo />
        </a>

        <button
          type="button"
          className={`navbar__toggle ${menuOpen ? 'navbar__toggle--open' : ''}`}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          onClick={toggleMenu}
        >
          <span />
          <span />
          <span />
        </button>

        <ul className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}>
          {NAV_LINKS.map((link) => (
            <li key={link.label} className="navbar__item">
              <a
                href={link.href}
                className={`navbar__link ${link.active ? 'navbar__link--active' : ''}`}
                onClick={() => {
                  if (onHomeClick) {
                    onHomeClick()
                  }
                  closeMenu()
                }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="navbar__actions">
          <button type="button" className="navbar__login" onClick={onLoginClick}>
            <svg
              className="navbar__login-icon"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" />
            </svg>
            LOGIN
          </button>

<<<<<<< Updated upstream
          <button type="button" className="navbar__search" aria-label="Search">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </button>
=======
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

          <div className="hidden sm:flex items-center">
  <img
    src={ditLogo}
    alt="DIT Logo"
    className="h-12 w-auto object-contain"
  />
</div>
>>>>>>> Stashed changes
        </div>
      </div>
    </nav>
  )
}

export default Navbar
