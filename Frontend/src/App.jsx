<<<<<<< Updated upstream
import { useState, useEffect } from 'react'
=======
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Teams from "./pages/Teams";
>>>>>>> Stashed changes
import Home from './pages/Home'
import Leaderboard from './pages/Leaderboard'
import './App.css'

function App() {
  const [currentHash, setCurrentHash] = useState(window.location.hash);

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(window.location.hash);
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
<<<<<<< Updated upstream
    <div className="app">
      {currentHash === '#personality' ? <Leaderboard /> : <Home />}
    </div>
=======
    <Router>
      <div className="min-h-screen flex flex-col">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/personality" element={<Leaderboard />} />
          <Route path="/teams" element={<Teams />} />
        </Routes>
      </div>
    </Router>
>>>>>>> Stashed changes
  )
}

export default App
