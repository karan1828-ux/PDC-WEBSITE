import { useState } from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import './Leaderboard.css'

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
    <div className="leaderboard-page">
      <header className="leaderboard-header">
        <Navbar />
      </header>

      {/* BEGIN: FilterBar */}
      <div className="filter-bar">
        <div className="filter-bar__container">
          <div className="filter-group">
            <span className="filter-label">Sort By:</span>
            <div className="filter-select-wrapper">
              <select 
                className="filter-select"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="highest">Highest %</option>
                <option value="lowest">Lowest %</option>
              </select>
              <i className="fa-solid fa-chevron-down filter-icon"></i>
            </div>
          </div>
          <div className="filter-group">
            <span className="filter-label">Period:</span>
            <div className="filter-select-wrapper">
              <select className="filter-select">
                <option>Current Semester</option>
                <option>Previous Semester</option>
                <option>Yearly</option>
              </select>
              <i className="fa-solid fa-chevron-down filter-icon"></i>
            </div>
          </div>
        </div>
      </div>
      {/* END: FilterBar */}

      {/* BEGIN: LeaderboardSection */}
      <main className="hero-gradient leaderboard-section">
        <div className="leaderboard-container">
          <h2 className="leaderboard-title">
            Top Performing Members Leaderboard
          </h2>
          {/* Leaderboard Card */}
          <div className="leaderboard-card" data-purpose="leaderboard-container">
            <div className="leaderboard-table-wrapper">
              <table className="leaderboard-table">
                <thead>
                  <tr>
                    <th>Rank</th>
                    <th>Member Name</th>
                    <th className="text-center">Personality %</th>
                    <th>Recent Achievement</th>
                  </tr>
                </thead>
                <tbody>
                  {sortedMembers.map((member, index) => {
                    const displayRank = index + 1;
                    const isFirstPlace = displayRank === 1;

                    return (
                      <tr key={member.id} className={`leaderboard-row ${index % 2 !== 0 ? 'leaderboard-row--alt' : ''}`}>
                        <td>
                          {isFirstPlace ? (
                            <div className="rank-container">
                              <i className="fa-solid fa-trophy rank-icon"></i>
                              <span>1st</span>
                            </div>
                          ) : (
                            <div className="rank-number">{displayRank}</div>
                          )}
                        </td>
                        <td>
                          <div className="member-info">
                            <img alt={member.name} className="member-avatar" src={member.image} />
                            <span className="member-name">{member.name}</span>
                          </div>
                        </td>
                        <td className="text-center">
                          <div className="score-container">
                            <span className="score-value">{member.score.toFixed(1)}%</span>
                            {member.hasStar && <i className="fa-solid fa-star score-icon"></i>}
                          </div>
                        </td>
                        <td className="achievement-text">{member.achievement}</td>
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

      <Footer />
    </div>
  )
}

export default Leaderboard
