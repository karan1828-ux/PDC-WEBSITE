import { useState, useEffect } from 'react'
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
    <div className="app">
      {currentHash === '#personality' ? <Leaderboard /> : <Home />}
    </div>
  )
}

export default App
