import { useState } from 'react'
import Navbar from '../components/Navbar/Navbar'
import AnnouncementBar from '../components/AnnouncementBar/AnnouncementBar'
import Hero from '../components/Hero/Hero'
import PastEvents from '../components/PastEvents/PastEvents'
import Team from '../components/Team/Team'
import ContactUs from '../components/ContactUs/ContactUs'
import Footer from '../components/Footer/Footer'
import PDCAuth from '../components/Login-Page/Login'
import './Home.css'

function Home() {
  const [showAuth, setShowAuth] = useState(false)

  return (
    <main className="home">
      <header className="home__header">
        <Navbar onLoginClick={() => setShowAuth(true)} onHomeClick={() => setShowAuth(false)} />
        <AnnouncementBar />
      </header>

<<<<<<< Updated upstream
      {showAuth ? (
        <PDCAuth onClose={() => setShowAuth(false)} />
      ) : (
        <>
          <Hero />
          <PastEvents />
          <Footer />
        </>
      )}
=======
      <Hero />
      <PastEvents />
      <Team />
      <ContactUs />
      <Footer />
>>>>>>> Stashed changes
    </main>
  )
}

export default Home
