import { useState, useEffect } from 'react';
import { fetchAllEvents } from '../../services/api';

function AnnouncementBar({ empty = false }) {
  const [upcomingEvents, setUpcomingEvents] = useState([]);

  useEffect(() => {
    if (!empty) {
      const loadEvents = async () => {
        const data = await fetchAllEvents();
        const upcoming = data.filter(e => e.eventschedule === 'upcoming');
        setUpcomingEvents(upcoming);
      };
      loadEvents();
    }
  }, [empty]);

  if (empty || upcomingEvents.length === 0) {
    return (
      <aside className="bg-[#0f274d] overflow-hidden w-full mt-16" aria-hidden="true">
        <div className="flex items-center py-2.5 text-[0.65rem] md:text-[0.72rem] lg:text-sm">
          &nbsp;
        </div>
      </aside>
    );
  }

  const marqueeContent = upcomingEvents.map((event, index) => (
    <span key={event.id || index} className="inline-flex items-center pr-1">
      <span className="text-white/40 mx-2 sm:mx-4 font-light" aria-hidden="true">|</span>
      <a href="#upcoming-events" className="hover:text-[#f0a04b] transition-colors cursor-pointer">
        {event.eventname || event.title}
      </a>
    </span>
  ));

  return (
    <aside className="bg-[#0f274d] overflow-hidden w-full mt-16" aria-label="Upcoming events announcements">
      <div className="flex w-max animate-[marquee-scroll_30s_linear_infinite] md:animate-[marquee-scroll_20s_linear_infinite] hover:animate-paused">
        <div className="flex items-center whitespace-nowrap py-2.5 text-[0.65rem] md:text-[0.72rem] lg:text-sm text-white">
          <span className="text-[#f0a04b] font-bold tracking-wider px-3 sm:px-4 lg:pl-8 lg:pr-6 shrink-0">UPCOMING EVENTS</span>
          {marqueeContent}
        </div>
        <div className="flex items-center whitespace-nowrap py-2.5 text-[0.65rem] md:text-[0.72rem] lg:text-sm text-white" aria-hidden="true">
          <span className="text-[#f0a04b] font-bold tracking-wider px-3 sm:px-4 lg:pl-8 lg:pr-6 shrink-0">UPCOMING EVENTS</span>
          {marqueeContent}
        </div>
      </div>
      <style>{`
        @keyframes marquee-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .hover\\:animate-paused:hover {
          animation-play-state: paused;
        }
      `}</style>
    </aside>
  )
}

export default AnnouncementBar
