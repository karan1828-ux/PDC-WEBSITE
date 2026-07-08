import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

const BACKGROUND_WORDS = ['EMPOWER', 'GROW', 'INSPIRE', 'LEAD', 'THRIVE', 'SHINE']

const HERO_PHRASES = [
  'UNLEASH YOUR POTENTIAL',
  'BUILD YOUR CONFIDENCE',
  'LEAD WITH PURPOSE',
  'INSPIRE THOSE AROUND YOU',
  'MASTER YOUR VOICE',
  'GROW BEYOND LIMITS',
  'OWN YOUR FUTURE',
]

const FLIP_DURATION = 3000 // ms between flips

function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % HERO_PHRASES.length)
    }, FLIP_DURATION)
    return () => clearInterval(interval)
  }, [])

  return (
    <section 
      id="home" 
      className="relative flex items-center justify-center overflow-hidden"
      style={{
        minHeight: 'calc(100vh - 104px)',
        background: 'linear-gradient(135deg, #0b1e3d 0%, #0f274d 30%, #1a3a6e 60%, #c8873f 100%)',
      }}
      aria-labelledby="hero-heading"
    >


      {/* Left background words */}
      <div 
        className="absolute flex flex-col gap-4 z-0 pointer-events-none select-none left-0 pl-2 md:pl-8 opacity-60 sm:opacity-100 w-[45%] md:w-[40%] overflow-hidden" 
        style={{
          top: '50%',
          transform: 'translateY(-40%)',
          maskImage: 'linear-gradient(to right, black 60%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to right, black 60%, transparent 100%)'
        }}
        aria-hidden="true"
      >
        {BACKGROUND_WORDS.map((word) => (
          <span key={`left-${word}`} className="text-[clamp(2.5rem,10vw,5rem)] md:text-[clamp(3.5rem,8vw,7rem)] font-extrabold tracking-widest text-white/[0.05] leading-tight whitespace-nowrap">
            {word}
          </span>
        ))}
      </div>

      {/* Right background words */}
      <div 
        className="absolute flex flex-col gap-4 z-0 pointer-events-none select-none right-0 pr-2 md:pr-8 text-right opacity-60 sm:opacity-100 w-[45%] md:w-[40%] overflow-hidden" 
        style={{
          top: '50%',
          transform: 'translateY(-40%)',
          maskImage: 'linear-gradient(to left, black 60%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to left, black 60%, transparent 100%)'
        }}
        aria-hidden="true"
      >
        {BACKGROUND_WORDS.map((word) => (
          <span key={`right-${word}`} className="text-[clamp(2.5rem,10vw,5rem)] md:text-[clamp(3.5rem,8vw,7rem)] font-extrabold tracking-widest text-white/[0.05] leading-tight whitespace-nowrap">
            {word}
          </span>
        ))}
      </div>

      {/* Hero content */}
      <div className="relative z-10 text-center max-w-[820px] px-6">

        {/* Flipping headline */}
        <div
          id="hero-heading"
          className="relative overflow-hidden mb-6"
          style={{ perspective: '800px', minHeight: 'clamp(7rem, 14vw, 11rem)' }}
          aria-live="polite"
        >
          <AnimatePresence mode="wait">
            <motion.h1
              key={currentIndex}
              className="text-[clamp(2.2rem,5.5vw,4rem)] font-extrabold tracking-wide text-white leading-tight"
              initial={{ rotateX: -90, opacity: 0, y: 30 }}
              animate={{ rotateX: 0, opacity: 1, y: 0 }}
              exit={{ rotateX: 90, opacity: 0, y: -30 }}
              transition={{ duration: 0.55, ease: [0.215, 0.61, 0.355, 1] }}
              style={{
                fontFamily: "'Cinzel', serif",
                transformOrigin: '50% 100%',
                transformStyle: 'preserve-3d',
              }}
            >
              {HERO_PHRASES[currentIndex]}
            </motion.h1>
          </AnimatePresence>
        </div>

        {/* Dot indicators */}
        <div className="flex items-center justify-center gap-2 mb-6" aria-hidden="true">
          {HERO_PHRASES.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`rounded-full transition-all duration-300 ${
                i === currentIndex
                  ? 'w-6 h-2 bg-[#f0a04b]'
                  : 'w-2 h-2 bg-white/30 hover:bg-white/60'
              }`}
            />
          ))}
        </div>

        <motion.p
          className="text-[clamp(1rem,2.5vw,1.35rem)] font-light text-white/80 tracking-wider mt-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.215, 0.61, 0.355, 1], delay: 0.35 }}
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          Transforming Individuals, Empowering Lives at PDC
        </motion.p>

        {/* Scroll indicator */}
        <motion.div
          className="absolute left-1/2 -translate-x-1/2 bottom-[-80px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 8, 0] }}
          transition={{
            opacity: { duration: 1, delay: 1.5 },
            y: { duration: 2, ease: 'easeInOut', repeat: Infinity },
          }}
        >
          <svg width="24" height="36" viewBox="0 0 24 36" fill="none" className="text-white/40">
            <rect x="1" y="1" width="22" height="34" rx="11" stroke="currentColor" strokeWidth="2" />
            <motion.circle
              cx="12" cy="10" r="3" fill="currentColor"
              animate={{ cy: [10, 22, 10] }}
              transition={{ duration: 2, ease: 'easeInOut', repeat: Infinity }}
            />
          </svg>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
