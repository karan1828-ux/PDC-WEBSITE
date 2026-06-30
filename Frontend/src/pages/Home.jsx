import Navbar from '../components/Navbar/Navbar'
import AnnouncementBar from '../components/AnnouncementBar/AnnouncementBar'
import Hero from '../components/Hero/Hero'
import PastEvents from '../components/PastEvents/PastEvents'
import Footer from '../components/Footer/Footer'

function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full">
        <Navbar />
        <AnnouncementBar />
      </header>

      <Hero />
      <PastEvents />
      <Footer />
    </main>
  )
}

export default Home
