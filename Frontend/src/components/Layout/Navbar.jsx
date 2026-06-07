import { Link } from 'react-router-dom'
import { Search, Key } from 'lucide-react'
import LogoPlaceholder from '../UI/LogoPlaceholder'

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
          <Link
            to="/login"
            className="rounded-full px-4 py-1.5 text-xs font-semibold border border-pdc-gold text-pdc-gold flex items-center gap-2 uppercase"
          >
            <Key className="h-4 w-4" />
            Login
          </Link>
          <button type="button" aria-label="Search" className="text-pdc-blue hover:text-pdc-orange transition-colors">
            <Search className="w-6 h-6" />
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar