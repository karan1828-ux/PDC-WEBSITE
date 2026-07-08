import EventCard from '../EventCard/EventCard'
import confidenceWorkshopImg from '../../assets/events/confidence_workshop.png'
import annualSummitImg from '../../assets/events/annual_summit.png'
import leadershipSeminarImg from '../../assets/events/leadership_seminar.png'

const EVENTS = [
  {
    id: 1,
    image: confidenceWorkshopImg,
    date: 'Sept 2023',
    title: 'BUILDING CONFIDENCE WORKSHOP',
    description:
      'A hands-on session focused on boosting self-esteem and public speaking skills through interactive activities.',
    featured: true,
  },
  {
    id: 2,
    image: annualSummitImg,
    date: 'June 2024',
    title: 'PDC ANNUAL SUMMIT',
    description:
      'Our flagship event bringing together members, alumni, and guest speakers for a day of inspiration and networking.',
  },
  {
    id: 3,
    image: leadershipSeminarImg,
    date: 'March 2024',
    title: 'LEADERSHIP SEMINAR',
    description:
      'Exploring core leadership principles and practical strategies for leading teams and initiatives effectively.',
  },
]

function PastEvents() {
  return (
    <section id="events" className="bg-white py-12 sm:py-16 px-5 sm:px-8" aria-labelledby="past-events-heading">
      <div className="max-w-[1200px] mx-auto">
        <header className="flex items-center justify-center gap-4 mb-8 sm:mb-12">
          <span className="hidden sm:flex items-center text-[#f0a04b] opacity-70 before:content-[''] before:inline-block before:w-2 before:h-2 before:bg-[#f0a04b] before:rounded-full before:mx-2" aria-hidden="true">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 6v6l4 2" />
            </svg>
          </span>
          <h2 id="past-events-heading" className="text-[clamp(1.5rem,3vw,2rem)] font-extrabold tracking-widest text-[#0f274d] text-center">
            PAST EVENTS
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 [&>*:last-child]:md:col-span-2 [&>*:last-child]:md:max-w-[480px] [&>*:last-child]:md:justify-self-center [&>*:last-child]:md:w-full [&>*:last-child]:lg:col-span-1 [&>*:last-child]:lg:max-w-none">
          {EVENTS.map((event) => (
            <EventCard
              key={event.id}
              image={event.image}
              date={event.date}
              title={event.title}
              description={event.description}
              featured={event.featured}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default PastEvents
