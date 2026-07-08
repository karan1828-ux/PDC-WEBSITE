import Navbar from '../components/Navbar/Navbar'
import AnnouncementBar from '../components/AnnouncementBar/AnnouncementBar'
import Team from '../components/Team/Team'

export default function Teams() {
  return (
    <main className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full">
        <Navbar />
        <AnnouncementBar empty={true} />
      </header>

      <div className="flex-grow flex flex-col justify-center">
        <Team />
      </div>
    </main>
  );
}