import { useState, useEffect } from 'react'
import TeamCard from './TeamCard'
import { fetchAllMembers } from '../../services/api'
import profileImg from '../../assets/profile.png'

function Team() {
  const [teamGroups, setTeamGroups] = useState([
    {
      title: "ADVISORY BOARD",
      members: [
        { id: 1, name: 'MAYANK SHARMA', role: 'CHAIR PERSON', image: profileImg, quote: 'Growth happens outside your comfort zone.' },
        { id: 2, name: 'AANANDI BHATT', role: 'PRESIDENT', image: profileImg, quote: 'Growth happens outside your comfort zone.' },
        { id: 3, name: 'KARAN GULATI', role: 'VICE PRESIDENT', image: profileImg, quote: 'Growth happens outside your comfort zone.' }
      ]
    },
    {
      title: "HR",
      members: [
        { id: 4, name: 'ARADHYE MITTAL', role: 'HR', image: profileImg, quote: 'Growth happens outside your comfort zone.' }
      ]
    },
    {
      title: "TREASURER",
      members: [
        { id: 5, name: 'ARYAN RAJ SHRIVASSTAVA', role: 'TREASURER', image: profileImg, quote: 'Growth happens outside your comfort zone.' }
      ]
    },
    {
      title: "EVENT MANAGEMENT",
      members: [
        { id: 6, name: 'ADITYA RANVEER SINGH', role: 'EVENT MANAGEMENT', image: profileImg, quote: 'Growth happens outside your comfort zone.' },
        { id: 7, name: 'HIMANSHU YADAV', role: 'EVENT MANAGEMENT', image: profileImg, quote: 'Growth happens outside your comfort zone.' }
      ]
    },
    {
      title: "TECHNICAL HEAD",
      members: [
        { id: 8, name: 'ADITYA ARORA', role: 'TECHNICAL HEAD', image: profileImg, quote: 'Growth happens outside your comfort zone.' },
        { id: 9, name: 'TANMAY PATWARY', role: 'TECHNICAL HEAD', image: profileImg, quote: 'Growth happens outside your comfort zone.' }
      ]
    },
    {
      title: "DOCUMENTATION",
      members: [
        { id: 10, name: 'ARJUN SINGH MEHTA', role: 'DOCUMENTATION', image: profileImg, quote: 'Growth happens outside your comfort zone.' }
      ]
    },
    {
      title: "SOCIAL MEDIA",
      members: [
        { id: 11, name: 'ISHAN ARYA', role: 'SOCIAL MEDIA', image: profileImg, quote: 'Growth happens outside your comfort zone.' },
        { id: 12, name: 'SOMIL DUBEY', role: 'SOCIAL MEDIA', image: profileImg, quote: 'Growth happens outside your comfort zone.' }
      ]
    },
    {
      title: "DESIGN HEAD",
      members: [
        { id: 13, name: 'PRAKHAR', role: 'DESIGN HEAD', image: profileImg, quote: 'Growth happens outside your comfort zone.' },
        { id: 14, name: 'ANSH JAISWAL', role: 'DESIGN HEAD', image: profileImg, quote: 'Growth happens outside your comfort zone.' }
      ]
    },
    {
      title: "PR HEAD",
      members: [
        { id: 15, name: 'AVIRAL SINGH', role: 'PR HEAD', image: profileImg, quote: 'Growth happens outside your comfort zone.' },
        { id: 16, name: 'AVNI RAJ', role: 'PR HEAD', image: profileImg, quote: 'Growth happens outside your comfort zone.' }
      ]
    }
  ]);

  useEffect(() => {
    // API fetch removed to use static list
  }, []);
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

        <div className="flex flex-col gap-12 sm:gap-16">
          {teamGroups.map((group, index) => (
            <div key={index} className="flex flex-col items-center">
              <h3 className="text-xl md:text-2xl font-bold text-[#0f274d] text-center mb-10 tracking-widest uppercase relative after:content-[''] after:absolute after:-bottom-4 after:left-1/2 after:-translate-x-1/2 after:w-16 after:h-1 after:bg-[#f0a04b] after:rounded-full">
                {group.title}
              </h3>
              <div className="flex flex-wrap justify-center gap-6 lg:gap-8 w-full max-w-[1200px]">
                {group.members.map((member) => (
                  <div key={member.id} className="w-full sm:w-[280px]">
                    <TeamCard
                      name={member.name}
                      role={member.role}
                      image={member.image}
                      quote={member.quote}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Team
