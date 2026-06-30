import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__grid">
          <div className="footer__column">
            <h3 className="footer__heading">ABOUT US</h3>
            <p className="footer__text">
              Empowering personal and professional growth through holistic development and mentorship.
            </p>
            <a href="#join" className="footer__join-link">
              JOIN US
            </a>
          </div>

          <div className="footer__column">
            <h3 className="footer__heading">QUICK LINKS</h3>
            <ul className="footer__links">
              <li><a href="#faq" className="footer__link">FAQ</a></li>
              <li><a href="#contact" className="footer__link">Contact</a></li>
              <li><a href="#team" className="footer__link">Team</a></li>
            </ul>
          </div>

          <div className="footer__column">
            <h3 className="footer__heading">CONTACT INFO</h3>
            <ul className="footer__contact">
              <li className="footer__contact-item">
                <i className="fa-solid fa-location-dot" style={{ width: '16px', textAlign: 'center', color: 'var(--navy)' }}></i>
                <span>Location, Parcarina</span>
              </li>
              <li className="footer__contact-item">
                <i className="fa-solid fa-envelope" style={{ width: '16px', textAlign: 'center', color: 'var(--navy)' }}></i>
                <a href="mailto:email@personalityny.com">email@personalityny.com</a>
              </li>
              <li className="footer__contact-item">
                <i className="fa-solid fa-phone" style={{ width: '16px', textAlign: 'center', color: 'var(--navy)' }}></i>
                <a href="tel:+19233234220">+1 (923) 323-4220</a>
              </li>
            </ul>
          </div>

          <div className="footer__column footer__column--social">
            <div className="footer__social">
              <a href="#" className="footer__social-link" aria-label="Facebook">
                <i className="fa-brands fa-facebook-f text-sm"></i>
              </a>
              <a href="#" className="footer__social-link" aria-label="Instagram">
                <i className="fa-brands fa-instagram text-sm"></i>
              </a>
              <a href="#" className="footer__social-link" aria-label="LinkedIn">
                <i className="fa-brands fa-linkedin-in text-sm"></i>
              </a>
              <a href="#" className="footer__social-link" aria-label="YouTube">
                <i className="fa-brands fa-youtube text-sm"></i>
              </a>
            </div>
            <p className="footer__copyright">
              Copyright &copy; 2023 PERSONALITY<br />
              DEVELOPMENT CLUB (PDC)
            </p>
          </div>
        </div>
      </div>

      <span className="footer__sparkle" aria-hidden="true">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0L14.09 8.26L22 10L14.09 11.74L12 20L9.91 11.74L2 10L9.91 8.26L12 0Z" />
        </svg>
      </span>
    </footer>
  )
}

export default Footer
