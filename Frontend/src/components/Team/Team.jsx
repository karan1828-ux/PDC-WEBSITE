import TeamCard from './TeamCard'

const TEAM_MEMBERS = [
  {
    id: 1,
    name: 'Aarav Sharma',
    role: 'President',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=faces',
    quote: 'Growth happens outside your comfort zone.',
  },
  {
    id: 2,
    name: 'Priya Verma',
    role: 'Vice President',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop&crop=faces',
    quote: 'Confidence is built one conversation at a time.',
  },
  {
    id: 3,
    name: 'Rohan Mehta',
    role: 'Events Head',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=faces',
    quote: 'Every event is a chance to inspire someone.',
  },
  {
    id: 4,
    name: 'Ishita Kapoor',
    role: 'Outreach Lead',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop&crop=faces',
    quote: 'Community is where real growth begins.',
  },
]

function Team() {
  return (
    <section id="team" className="bg-[#f8fafc] py-12 sm:py-16 px-5 sm:px-8" aria-labelledby="team-heading">
      <div className="max-w-[1200px] mx-auto">
        <header className="flex items-center justify-center gap-4 mb-8 sm:mb-12">
          <span className="hidden sm:flex items-center text-[#f0a04b] opacity-70 before:content-[''] before:inline-block before:w-2 before:h-2 before:bg-[#f0a04b] before:rounded-full before:mx-2" aria-hidden="true">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
          </span>
          <h2 id="team-heading" className="text-[clamp(1.5rem,3vw,2rem)] font-extrabold tracking-widest text-[#0f274d] text-center">
            MEET THE TEAM
          </h2>
          <span className="hidden sm:flex items-center text-[#f0a04b] opacity-70 after:content-[''] after:inline-block after:w-2 after:h-2 after:bg-[#f0a04b] after:rounded-full after:mx-2" aria-hidden="true">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 6v6l4 2" />
            </svg>
          </span>
        </header>

        <p className="text-center text-[0.85rem] text-gray-600 max-w-xl mx-auto mb-10 -mt-4">
          Move your cursor over a card to see it tilt — a small nod to the perspective every member brings to PDC.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {TEAM_MEMBERS.map((member) => (
            <TeamCard
              key={member.id}
              name={member.name}
              role={member.role}
              image={member.image}
              quote={member.quote}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Team
