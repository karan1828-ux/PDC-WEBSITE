import { useState, useEffect } from 'react'
import EventCard from '../EventCard/EventCard'
import { fetchAllEvents } from '../../services/api'
import placeholderImg from '../../assets/events/confidence_workshop.png'

function UpcomingEvents() {
  const [events, setEvents] = useState([
    {
      id: 'hardcoded-1',
      image: placeholderImg,
      date: 'Monday, 24th August 2026',
      time: '4:00 PM – 6:00 PM',
      location: 'Chanakya seminar hall, DIT University',
      head: 'Aanandi Bhatt & Karan Gulati',
      title: 'UNMUTE YOURSELF',
      description: 'Polish Your Presence, Perfect Your Future!\n\n• Nurture Focus: Enhance mental focus and goal-oriented concentration.\n• Sharpen Reflexes: Improve your response and reaction to challenges.\n\n"Find your voice, own your personality"',
      featured: true,
      eventPhotos: ['/unmute-yourself-poster.png']
    }
  ]);

  useEffect(() => {
    const loadEvents = async () => {
      try {
        const data = await fetchAllEvents();
        const upcoming = data.filter(e => e.eventschedule === 'upcoming').map((e, idx) => ({
          id: e.id,
          image: e.coverphoto || 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop',
          date: e.eventdate,
          title: e.eventname,
          description: e.description,
          featured: false
        }));
        setEvents(prev => [...prev, ...upcoming]);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };
    loadEvents();
  }, []);
  return (
    <section id="upcoming-events" className="scroll-mt-20 bg-white py-12 sm:py-16 px-5 sm:px-8" aria-labelledby="upcoming-events-heading">
      <div className="max-w-[1200px] mx-auto">
        <header className="flex items-center justify-center gap-4 mb-8 sm:mb-12">
          <span className="hidden sm:flex items-center text-[#f0a04b] opacity-70 before:content-[''] before:inline-block before:w-2 before:h-2 before:bg-[#f0a04b] before:rounded-full before:mx-2" aria-hidden="true">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 6v6l4 2" />
            </svg>
          </span>
          <h2 id="upcoming-events-heading" className="text-[clamp(1.5rem,3vw,2rem)] font-extrabold tracking-widest text-[#0f274d] text-center">
            UPCOMING EVENTS
          </h2>
          <span className="hidden sm:flex items-center text-[#f0a04b] opacity-70 after:content-[''] after:inline-block after:w-2 after:h-2 after:bg-[#f0a04b] after:rounded-full after:mx-2" aria-hidden="true">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
          </span>
        </header>

        <div className="flex flex-wrap justify-center gap-6 lg:gap-8">
          {events.map((event) => (
            <div key={event.id} className="w-full sm:w-[480px] max-w-full">
              <EventCard
                image={event.image}
                date={event.date}
                title={event.title}
                description={event.description}
                featured={event.featured}
                time={event.time}
                location={event.location}
                head={event.head}
                eventPhotos={event.eventPhotos}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default UpcomingEvents
