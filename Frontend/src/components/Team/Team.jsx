import { useState, useEffect } from 'react'
import TeamCard from './TeamCard'
import { fetchAllMembers } from '../../services/api'
import profileImg from '../../assets/profile.png'

function Team() {
  const [teamGroups, setTeamGroups] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadMembers() {
      try {
        const members = await fetchAllMembers();

        // Define how roles map to groups
        const groupsConfig = [
          { title: "ADVISORY BOARD", roles: ["CHAIR PERSON", "PRESIDENT", "VICE PRESIDENT"] },
          { title: "HR", roles: ["HR"] },
          { title: "TREASURER", roles: ["TREASURER"] },
          { title: "EVENT MANAGEMENT", roles: ["EVENT MANAGEMENT"] },
          { title: "TECHNICAL HEAD", roles: ["TECHNICAL HEAD", "TECHNICAL"] },
          { title: "DOCUMENTATION", roles: ["DOCUMENTATION"] },
          { title: "SOCIAL MEDIA", roles: ["SOCIAL MEDIA"] },
          { title: "DESIGN HEAD", roles: ["DESIGN HEAD"] },
          { title: "PR HEAD", roles: ["PR HEAD"] }
        ];

        const grouped = groupsConfig.map(config => {
          return {
            title: config.title,
            members: members
              .filter(m => config.roles.includes(m.role?.toUpperCase()))
              .map(m => ({
                id: m.sapid || m.id,
                name: m.name,
                role: m.role,
                image: m.image_url && m.image_url !== 'default' ? m.image_url : profileImg,
                quote: m.description || 'Growth happens outside your comfort zone.'
              }))
          };
        }).filter(group => group.members.length > 0);

        // Put any unmapped roles into an "OTHER MEMBERS" category
        const assignedRoles = groupsConfig.flatMap(g => g.roles);
        const otherMembers = members.filter(m => !assignedRoles.includes(m.role?.toUpperCase()));

        if (otherMembers.length > 0) {
          grouped.push({
            title: "OTHER MEMBERS",
            members: otherMembers.map(m => ({
              id: m.sapid || m.id,
              name: m.name,
              role: m.role,
              image: m.image_url && m.image_url !== 'default' ? m.image_url : profileImg,
              quote: m.description || 'Growth happens outside your comfort zone.'
            }))
          });
        }

        setTeamGroups(grouped);
      } catch (error) {
        console.error("Failed to load members:", error);
      } finally {
        setLoading(false);
      }
    }
    loadMembers();
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
