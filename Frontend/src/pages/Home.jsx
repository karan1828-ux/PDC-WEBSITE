import Navbar from '../components/Navbar/Navbar'
import AnnouncementBar from '../components/AnnouncementBar/AnnouncementBar'
import Hero from '../components/Hero/Hero'
import OurVision from '../components/Vision/OurVision'
import UpcomingEvents from '../components/UpcomingEvents/UpcomingEvents'
// import PastEvents from '../components/PastEvents/PastEvents'
import ContactUs from '../components/ContactUs/ContactUs'
import Footer from '../components/Footer/Footer'

function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full">
        <Navbar />
        <AnnouncementBar />
      </header>

      <Hero />
      <OurVision />
      <UpcomingEvents />
      {/* <PastEvents /> */}
      <ContactUs />
      <Footer />
    </main>
  )
}

export default Home
