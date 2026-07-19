import { Link } from "react-router-dom";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-[#f8f9fa] border-t border-[#dee2e6] py-10 sm:py-14 px-5 sm:px-8 mt-auto">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_1fr_1fr] gap-7 sm:gap-10">

          <div className="flex flex-col">
            <h3 className="text-[0.85rem] font-bold tracking-wider text-[#0f274d] mb-4">
              ABOUT US
            </h3>

            <p className="text-[0.82rem] text-[#495057] leading-relaxed">
              Empowering personal and professional growth through holistic development and mentorship.
            </p>
          </div>

          <div className="flex flex-col">
            <h3 className="text-[0.85rem] font-bold tracking-wider text-[#0f274d] mb-4">
              QUICK LINKS
            </h3>

            <ul className="flex flex-col gap-2">
              <li>
                <Link
  to="/faq"
  className="text-[0.82rem] text-[#495057] hover:text-[#f0a04b] transition-colors"
>
  FAQ
</Link>
              </li>

              <li>
                <a
                  href="#contact"
                  className="text-[0.82rem] text-[#495057] hover:text-[#f0a04b] transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col">
            <h3 className="text-[0.85rem] font-bold tracking-wider text-[#0f274d] mb-4">
              CONTACT INFO
            </h3>

            <ul className="flex flex-col gap-3">
              <li className="flex items-center gap-2.5 text-[0.82rem] text-[#495057]">
                <i className="fa-solid fa-location-dot w-4 text-center text-[#0f274d]"></i>
                <span>Dit University,Dehradun</span>
              </li>

              <li className="flex items-center gap-2.5 text-[0.82rem] text-[#495057]">
                <i className="fa-solid fa-envelope w-4 text-center text-[#0f274d]"></i>
                <a
                  href="mailto:email@personalityny.com"
                  className="hover:text-[#f0a04b]"
                >
                  email@personalityny.com
                </a>
              </li>

              <li className="flex items-center gap-2.5 text-[0.82rem] text-[#495057]">
                <i className="fa-solid fa-phone w-4 text-center text-[#0f274d]"></i>
                <a
                  href="tel:+19233234220"
                  className="hover:text-[#f0a04b]"
                >
                  +1 (923) 323-4220
                </a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-start lg:col-span-1 md:col-span-full md:flex-row md:flex-wrap md:items-center md:justify-between lg:flex-col lg:items-start lg:justify-start gap-4">

            <div className="flex gap-3">
              <a href="#" className="flex items-center justify-center w-9 h-9 rounded-full bg-[#0f274d] text-white hover:bg-[#f0a04b] transition-all">
                <i className="fa-brands fa-facebook-f text-sm"></i>
              </a>

              <a href="#" className="flex items-center justify-center w-9 h-9 rounded-full bg-[#0f274d] text-white hover:bg-[#f0a04b] transition-all">
                <i className="fa-brands fa-instagram text-sm"></i>
              </a>

              <a href="#" className="flex items-center justify-center w-9 h-9 rounded-full bg-[#0f274d] text-white hover:bg-[#f0a04b] transition-all">
                <i className="fa-brands fa-linkedin-in text-sm"></i>
              </a>

              <a href="#" className="flex items-center justify-center w-9 h-9 rounded-full bg-[#0f274d] text-white hover:bg-[#f0a04b] transition-all">
                <i className="fa-brands fa-youtube text-sm"></i>
              </a>
            </div>

            <p className="text-[0.72rem] text-[#868e96] leading-relaxed max-w-[220px]">
              Copyright &copy; {year} PERSONALITY
              <br />
              DEVELOPMENT CLUB (PDC)
            </p>

          </div>

        </div>
      </div>
    </footer>
  );
}

export default Footer;