import { useState } from 'react'
import Navbar from '../components/Navbar/Navbar'

const initialMembers = [
  {
    id: 1,
    name: "Sarah Jenkins",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDd5fowOW0GCuo5PyrmKSMsFvAFeGJaqWUklpJfhPA6MJ7sPgVjNER9Xc_LwMzmteVi6IzOvnC0R1cTeDykmSo1AK06Uq1pE-KhqSn0xqV6z9a_V4T8tjpklrWee7P13_5lw44s2hbnvqDLo1WGkqkbIrCm9HU1M7_w8HRtFA1T1kerVCVJMlLXF0vBOnlQEJkkO2lBiXosfBagrY03iJ7wjf4YjIdv-_WZ6YXcNZ78R9_dM6fGow_84SYFXB5NbDLxBTet26ClOWS-",
    score: 98.2,
    achievement: "Best Speaker, Leadership Summit",
    hasStar: true,
  },
  {
    id: 2,
    name: "Michael Chen",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCOZiqOfgFGYIb4Az_Seco3VlA404d1BJgp5AgclcGwEavHFwY7kp_d7rmsAm8uZehl_fZUqn0GgavOiFcfdiI5CYRqxYob-gbd4yYKaT_n7rlYq8U8G58dkMDFLGf8Lab_jXf0yQldurPSgA7zt4-SwIc-Y3A8H6iZCflX0bRxYZGhY2IHQVnjaMMX3BnSyUoUW2tmUH9gaKGvY4ffsDC2FKEAe-11rfuAiI4lTXUn2jg4LIhlACy0VOpVBF1ragHZSijKs1Jg9MQT",
    score: 96.5,
    achievement: "Confidence Workshop Leader",
    hasStar: false,
  },
  {
    id: 3,
    name: "Ayesha Khan",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAmhxZrunrZ3Ku-zdCWMFAu7oSzaDYHkbmp0A1NOl3-ZNMP-2IkakzGIhmTXng_1uj10QEyTqtRgph7VTKv9_ANWKtsK-aRnQkghcds1L9t9WfOJ_laOiGWDOfjsSECYb7pL3OUX4ddwDz9ezCfaRLY76nVwqVMIJJRgZNEa-7ePRzaC_wVIhl7CMlqAiUWGcb-b2dRl_rKHLFEVSfZwbdg32OD1v7UqhayCQyUqRYkcAn6L_inPb5TjbS9h1t3mzIGajw-E87Nixs1",
    score: 95.8,
    achievement: "Team Project Lead",
    hasStar: true,
  },
  {
    id: 4,
    name: "Daran Blanden",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAerwcljz0h1G_UBfYQBqfgiC4csbLRGNhZZ4lJTVBd_7cpBBkfMmTvqyEYAbGu-FjpUqrWiamVV0A9rNlmMt46exiLS9sdXLTEsr4d-cvKXlTVIdvMPGq0MCNa9XCP9ZvoeYYXrh-AMeV1P0sRhyRNYXhHssi5--9ms06lSA7ETNPMYNDUg8YXYZZpaINUCfVRtDZAugAY-xBnLQ1KaHeOCZVpvtyoA3tPM-7fLCPfvYU3BxUynHJztaHzRAqJ_gLvdYj-2qwe8vwb",
    score: 94.1,
    achievement: "Best Speaker Summit",
    hasStar: false,
  }
];

function Leaderboard() {
  const [sortBy, setSortBy] = useState('highest');

  const sortedMembers = [...initialMembers].sort((a, b) => {
    if (sortBy === 'highest') {
      return b.score - a.score;
    } else {
      return a.score - b.score;
    }
  });

  return (
    <div className="bg-[#f8fafc] text-[#1e293b] flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 bg-white">
        <Navbar />
      </header>

      {/* BEGIN: FilterBar */}
      <div className="bg-[#1e293b] text-white py-2 mt-[64px]">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4 sm:gap-8 text-sm">
          <div className="flex items-center gap-3">
            <span className="text-[#cbd5e1]">Sort By:</span>
            <div 
              className="flex items-center bg-[#0f172a] rounded-full p-1 cursor-pointer shadow-inner" 
              onClick={() => setSortBy(sortBy === 'highest' ? 'lowest' : 'highest')}
            >
              <div className={`px-3 py-1 rounded-full text-xs font-semibold transition-all duration-300 ${sortBy === 'highest' ? 'bg-[#f0a04b] text-white shadow-md' : 'text-gray-400'}`}>
                Highest %
              </div>
              <div className={`px-3 py-1 rounded-full text-xs font-semibold transition-all duration-300 ${sortBy === 'lowest' ? 'bg-[#f0a04b] text-white shadow-md' : 'text-gray-400'}`}>
                Lowest %
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[#cbd5e1]">Period:</span>
            <div className="relative">
              <select className="bg-transparent border-b border-[#94a3b8] outline-none pr-6 pl-1 py-1 cursor-pointer text-white appearance-none focus:border-white w-full">
                <option className="text-[#0f172a]">Current Semester</option>
                <option className="text-[#0f172a]">Previous Semester</option>
                <option className="text-[#0f172a]">Yearly</option>
              </select>
              <i className="fa-solid fa-chevron-down absolute right-0 top-2 text-[10px] pointer-events-none"></i>
            </div>
          </div>
        </div>
      </div>
      {/* END: FilterBar */}

      {/* BEGIN: LeaderboardSection */}
      <main className="flex-1 py-8 sm:py-16 px-4 hero-gradient">
        <div className="max-w-[56rem] mx-auto">
          <h2 className="text-center text-[#fdba74] text-xl sm:text-2xl md:text-3xl font-bold tracking-widest mb-10 uppercase">
            Top Performing Members Leaderboard
          </h2>
          {/* Leaderboard Card */}
          <div className="bg-white rounded-2xl shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] overflow-hidden" data-purpose="leaderboard-container">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr>
                    <th className="text-[#0f172a] font-bold p-4 sm:p-6 border-b border-[#f1f5f9] whitespace-nowrap">Rank</th>
                    <th className="text-[#0f172a] font-bold p-4 sm:p-6 border-b border-[#f1f5f9] whitespace-nowrap">Member Name</th>
                    <th className="text-center text-[#0f172a] font-bold p-4 sm:p-6 border-b border-[#f1f5f9] whitespace-nowrap">Personality %</th>
                    <th className="text-[#0f172a] font-bold p-4 sm:p-6 border-b border-[#f1f5f9] whitespace-nowrap">Recent Achievement</th>
                  </tr>
                </thead>
                <tbody>
                  {sortedMembers.map((member, index) => {
                    const displayRank = index + 1;
                    const isFirstPlace = displayRank === 1;

                    return (
                      <tr key={member.id} className={`border-b border-[#f8fafc] transition-colors duration-300 hover:bg-[#f8fafc] ${index % 2 !== 0 ? 'bg-[#fefce8]' : ''}`}>
                        <td className="p-4 sm:p-6">
                          {isFirstPlace ? (
                            <div className="flex items-center gap-2 font-semibold">
                              <i className="fa-solid fa-trophy text-[#fb923c] text-lg"></i>
                              <span>1st</span>
                            </div>
                          ) : (
                            <div className="pl-7 font-semibold">{displayRank}</div>
                          )}
                        </td>
                        <td className="p-4 sm:p-6">
                          <div className="flex items-center gap-4">
                            <img alt={member.name} className="w-10 h-10 rounded-full border-2 border-[#e2e8f0] object-cover" src={member.image} />
                            <span className="font-medium whitespace-nowrap">{member.name}</span>
                          </div>
                        </td>
                        <td className="text-center p-4 sm:p-6">
                          <div className="flex items-center justify-center gap-2">
                            <span className="text-xl font-extrabold text-[#1e293b]">{member.score.toFixed(1)}%</span>
                            {member.hasStar && <i className="fa-solid fa-star text-[#fb923c] text-xs"></i>}
                          </div>
                        </td>
                        <td className="text-[#64748b] italic p-4 sm:p-6">{member.achievement}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
      {/* END: LeaderboardSection */}
    </div>
  )
}

export default Leaderboard
