import { Link } from 'react-router-dom'
import { Globe, Users, Share2, Mail } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-pdc-beige pt-12 pb-6 px-12 text-pdc-blue border-t border-gray-200">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        <div className="col-span-1">
          <h3 className="font-bold uppercase tracking-widest border-b-2 border-pdc-blue inline-block mb-6">About Us</h3>
          <p className="text-sm leading-relaxed">
            Empowering personal and professional growth through holistic development and mentorship.
          </p>
          <Link to="/join" className="text-sm font-bold block mt-4 underline uppercase">Join Us</Link>
        </div>
        <div>
          <h3 className="font-bold uppercase tracking-widest border-b-2 border-pdc-blue inline-block mb-6">Quick Links</h3>
          <ul className="text-sm flex flex-col gap-3 font-medium">
            <li><Link to="/faq" className="hover:text-pdc-orange">FAQ</Link></li>
            <li><Link to="/contact" className="hover:text-pdc-orange">Contact</Link></li>
            <li><Link to="/team" className="hover:text-pdc-orange">Team</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold uppercase tracking-widest border-b-2 border-pdc-blue inline-block mb-6">Contact Info</h3>
          <ul className="text-sm flex flex-col gap-3 font-medium">
            <li className="flex items-center gap-2">
              <span className="text-pdc-blue">📍</span> Location, Paricarina
            </li>
            <li className="flex items-center gap-2">
              <span className="text-pdc-blue">✉️</span> email@personality.com
            </li>
            <li className="flex items-center gap-2">
              <span className="text-pdc-blue">📞</span> +(923) 323-4220
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-center md:items-end gap-6">
          <div className="flex gap-4">
            <a href="https://www.pdc.org" aria-label="PDC website" className="bg-pdc-blue p-2 rounded-full text-white hover:bg-pdc-orange transition-all">
              <Globe className="w-5 h-5" />
            </a>
            <a href="https://www.pdc.org/community" aria-label="PDC community" className="bg-pdc-blue p-2 rounded-full text-white hover:bg-pdc-orange transition-all">
              <Users className="w-5 h-5" />
            </a>
            <a href="https://www.pdc.org/share" aria-label="Share PDC" className="bg-pdc-blue p-2 rounded-full text-white hover:bg-pdc-orange transition-all">
              <Share2 className="w-5 h-5" />
            </a>
            <a href="mailto:email@personality.com" aria-label="Email PDC" className="bg-pdc-blue p-2 rounded-full text-white hover:bg-pdc-orange transition-all">
              <Mail className="w-5 h-5" />
            </a>
          </div>
          <div className="text-xs text-right font-medium leading-tight">
            COPYRIGHT © {new Date().getFullYear()} PERSONALITY<br />
            DEVELOPMENT CLUB (PDC)
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
