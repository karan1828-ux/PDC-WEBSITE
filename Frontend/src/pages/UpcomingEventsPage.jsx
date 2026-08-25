import Navbar from '../components/Navbar/Navbar'
import AnnouncementBar from '../components/AnnouncementBar/AnnouncementBar'
import UpcomingEvents from '../components/UpcomingEvents/UpcomingEvents'
import Footer from '../components/Footer/Footer'

function UpcomingEventsPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full">
        <Navbar />
        <AnnouncementBar empty={true} />
      </header>
      <div className="flex-1">
        <UpcomingEvents />
      </div>
      <Footer />
    </main>
  )
}

export default UpcomingEventsPage
