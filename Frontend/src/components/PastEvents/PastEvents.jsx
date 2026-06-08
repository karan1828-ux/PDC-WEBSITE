import EventCard from '../EventCard/EventCard'
import './PastEvents.css'

const EVENTS = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1515187022015-fb1a3ce40b7e?w=600&h=400&fit=crop',
    date: 'Sept 2023',
    title: 'BUILDING CONFIDENCE WORKSHOP',
    description:
      'A hands-on session focused on boosting self-esteem and public speaking skills through interactive activities.',
    featured: true,
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop',
    date: 'June 2024',
    title: 'PDC ANNUAL SUMMIT',
    description:
      'Our flagship event bringing together members, alumni, and guest speakers for a day of inspiration and networking.',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1475721027785-f74eccf83e0a?w=600&h=400&fit=crop',
    date: 'March 2024',
    title: 'LEADERSHIP SEMINAR',
    description:
      'Exploring core leadership principles and practical strategies for leading teams and initiatives effectively.',
  },
]

function PastEvents() {
  return (
    <section id="events" className="past-events" aria-labelledby="past-events-heading">
      <div className="past-events__container">
        <header className="past-events__header">
          <span className="past-events__decor past-events__decor--left" aria-hidden="true">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 6v6l4 2" />
            </svg>
          </span>
          <h2 id="past-events-heading" className="past-events__title">
            PAST EVENTS
          </h2>
          <span className="past-events__decor past-events__decor--right" aria-hidden="true">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
          </span>
        </header>

        <div className="past-events__grid">
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
