import Navbar from '../components/Navbar/Navbar'
import AnnouncementBar from '../components/AnnouncementBar/AnnouncementBar'
import PastEvents from '../components/PastEvents/PastEvents'

function Achievements() {
  return (
    <main className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full">
        <Navbar />
        <AnnouncementBar empty={true} />
      </header>

      <section className="flex-grow flex flex-col items-center justify-center pt-24 pb-12 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Achievements</h1>
        <p className="text-xl md:text-2xl text-gray-500 font-medium">
          Will be updated soon
        </p>
      </section>

      <PastEvents />
    </main>
  )
}

export default Achievements
