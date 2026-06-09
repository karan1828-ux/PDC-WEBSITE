import Navbar from '../components/Navbar/Navbar'
import AnnouncementBar from '../components/AnnouncementBar/AnnouncementBar'
import Hero from '../components/Hero/Hero'
import PastEvents from '../components/PastEvents/PastEvents'
import Footer from '../components/Footer/Footer'
import './Home.css'

function Home() {
  return (
    <main className="home">
      <header className="home__header">
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
