import React from 'react'
import { Link } from 'react-router-dom'
import { Search, Key } from 'lucide-react'
import LogoPlaceholder from '../UI/LogoPlaceholder'
import Button from '../UI/Button'

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-12 py-4 bg-white border-b border-gray-100 shadow-sm sticky top-0 z-50">
      <Link to="/">
        <LogoPlaceholder />
      </Link>

      <div className="flex items-center gap-12 ml-auto">
        <div className="hidden md:flex items-center gap-8 font-medium text-pdc-blue tracking-wide uppercase text-sm">
          <Link to="/" className="hover:text-pdc-orange transition-colors">Home</Link>
          <Link to="/events" className="hover:text-pdc-orange transition-colors">Events</Link>
          <Link to="/personality" className="hover:text-pdc-orange transition-colors">Personality %</Link>
          <Link to="/achievements" className="hover:text-pdc-orange transition-colors">Achievements</Link>
        </div>

        <div className="flex items-center gap-6">
          <Link to="/login">
            <Button variant="outline" icon={Key} className="rounded-full px-4 py-1.5 text-xs font-semibold">
              Login
            </Button>
          </Link>
          <Search className="w-6 h-6 text-pdc-blue cursor-pointer" />
        </div>
      </div>
    </nav>
  )
}

export default Navbar