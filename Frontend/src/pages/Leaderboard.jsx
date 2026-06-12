import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import './Leaderboard.css'

function Leaderboard() {
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
              <select className="filter-select">
                <option>Highest %</option>
                <option>Lowest %</option>
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
                  {/* Member 1 */}
                  <tr className="leaderboard-row">
                    <td>
                      <div className="rank-container">
                        <i className="fa-solid fa-trophy rank-icon"></i>
                        <span>1st</span>
                      </div>
                    </td>
                    <td>
                      <div className="member-info">
                        <img alt="Sarah Jenkins" className="member-avatar" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDd5fowOW0GCuo5PyrmKSMsFvAFeGJaqWUklpJfhPA6MJ7sPgVjNER9Xc_LwMzmteVi6IzOvnC0R1cTeDykmSo1AK06Uq1pE-KhqSn0xqV6z9a_V4T8tjpklrWee7P13_5lw44s2hbnvqDLo1WGkqkbIrCm9HU1M7_w8HRtFA1T1kerVCVJMlLXF0vBOnlQEJkkO2lBiXosfBagrY03iJ7wjf4YjIdv-_WZ6YXcNZ78R9_dM6fGow_84SYFXB5NbDLxBTet26ClOWS-" />
                        <span className="member-name">Sarah Jenkins</span>
                      </div>
                    </td>
                    <td className="text-center">
                      <div className="score-container">
                        <span className="score-value">98.2%</span>
                        <i className="fa-solid fa-star score-icon"></i>
                      </div>
                    </td>
                    <td className="achievement-text">Best Speaker, Leadership Summit</td>
                  </tr>
                  {/* Member 2 */}
                  <tr className="leaderboard-row leaderboard-row--alt">
                    <td>
                      <div className="rank-number">2</div>
                    </td>
                    <td>
                      <div className="member-info">
                        <img alt="Michael Chen" className="member-avatar" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCOZiqOfgFGYIb4Az_Seco3VlA404d1BJgp5AgclcGwEavHFwY7kp_d7rmsAm8uZehl_fZUqn0GgavOiFcfdiI5CYRqxYob-gbd4yYKaT_n7rlYq8U8G58dkMDFLGf8Lab_jXf0yQldurPSgA7zt4-SwIc-Y3A8H6iZCflX0bRxYZGhY2IHQVnjaMMX3BnSyUoUW2tmUH9gaKGvY4ffsDC2FKEAe-11rfuAiI4lTXUn2jg4LIhlACy0VOpVBF1ragHZSijKs1Jg9MQT" />
                        <span className="member-name">Michael Chen</span>
                      </div>
                    </td>
                    <td className="text-center">
                      <span className="score-value">96.5%</span>
                    </td>
                    <td className="achievement-text">Confidence Workshop Leader</td>
                  </tr>
                  {/* Member 3 */}
                  <tr className="leaderboard-row">
                    <td>
                      <div className="rank-number">3</div>
                    </td>
                    <td>
                      <div className="member-info">
                        <img alt="Ayesha Khan" className="member-avatar" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAmhxZrunrZ3Ku-zdCWMFAu7oSzaDYHkbmp0A1NOl3-ZNMP-2IkakzGIhmTXng_1uj10QEyTqtRgph7VTKv9_ANWKtsK-aRnQkghcds1L9t9WfOJ_laOiGWDOfjsSECYb7pL3OUX4ddwDz9ezCfaRLY76nVwqVMIJJRgZNEa-7ePRzaC_wVIhl7CMlqAiUWGcb-b2dRl_rKHLFEVSfZwbdg32OD1v7UqhayCQyUqRYkcAn6L_inPb5TjbS9h1t3mzIGajw-E87Nixs1" />
                        <span className="member-name">Ayesha Khan</span>
                      </div>
                    </td>
                    <td className="text-center">
                      <div className="score-container">
                        <span className="score-value">95.8%</span>
                        <i className="fa-solid fa-star score-icon"></i>
                      </div>
                    </td>
                    <td className="achievement-text">Team Project Lead</td>
                  </tr>
                  {/* Member 4 */}
                  <tr className="leaderboard-row leaderboard-row--alt">
                    <td>
                      <div className="rank-number">4</div>
                    </td>
                    <td>
                      <div className="member-info">
                        <img alt="Daran Blanden" className="member-avatar" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAerwcljz0h1G_UBfYQBqfgiC4csbLRGNhZZ4lJTVBd_7cpBBkfMmTvqyEYAbGu-FjpUqrWiamVV0A9rNlmMt46exiLS9sdXLTEsr4d-cvKXlTVIdvMPGq0MCNa9XCP9ZvoeYYXrh-AMeV1P0sRhyRNYXhHssi5--9ms06lSA7ETNPMYNDUg8YXYZZpaINUCfVRtDZAugAY-xBnLQ1KaHeOCZVpvtyoA3tPM-7fLCPfvYU3BxUynHJztaHzRAqJ_gLvdYj-2qwe8vwb" />
                        <span className="member-name">Daran Blanden</span>
                      </div>
                    </td>
                    <td className="text-center">
                      <span className="score-value">94.1%</span>
                    </td>
                    <td className="achievement-text">Best Speaker Summit</td>
                  </tr>
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
