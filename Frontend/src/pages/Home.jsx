import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'
import AnnouncementBar from '../components/AnnouncementBar/AnnouncementBar'
import Hero from '../components/Hero/Hero'
import OurVision from '../components/Vision/OurVision'
import UpcomingEvents from '../components/UpcomingEvents/UpcomingEvents'
import ContactUs from '../components/ContactUs/ContactUs'
import Footer from '../components/Footer/Footer'

function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }
  }, [location]);

  return (
    <main className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full">
        <Navbar />
        <AnnouncementBar />
      </header>

      <Hero />
      <OurVision />
      <UpcomingEvents />
      <ContactUs />
      <Footer />
    </main>
  )
}

export default Home
