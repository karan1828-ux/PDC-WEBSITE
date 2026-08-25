import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Teams from "./pages/Teams";
import Home from './pages/Home'
import Leaderboard from './pages/Leaderboard'
import Achievements from './pages/Achievements'
import FAQ from "./pages/FAQ";
import UpcomingEventsPage from './pages/UpcomingEventsPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/personality" element={<Leaderboard />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/upcoming-events" element={<UpcomingEventsPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
