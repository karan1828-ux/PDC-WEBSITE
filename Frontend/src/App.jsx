import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Teams from "./pages/Teams";
import Home from './pages/Home'
import Leaderboard from './pages/Leaderboard'

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/personality" element={<Leaderboard />} />
          <Route path="/teams" element={<Teams />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
