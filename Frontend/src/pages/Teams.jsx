import Navbar from '../components/Navbar/Navbar'
import AnnouncementBar from '../components/AnnouncementBar/AnnouncementBar'
import Team from '../components/Team/Team'

export default function Teams() {
  return (
    <main className="flex flex-col min-h-screen bg-[#f8fafc]">
      <header className="sticky top-0 z-50 w-full">
        <Navbar />
        <AnnouncementBar empty={true} />
      </header>

      <div className="flex-grow flex flex-col justify-center items-center px-4 text-center pb-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#0f274d]">Teams</h1>
        <p className="text-xl md:text-2xl text-gray-500 font-medium">
          Will be released soon.
        </p>
        {/* <Team /> */}
      </div>
    </main>
  );
}