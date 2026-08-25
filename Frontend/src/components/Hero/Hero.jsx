import { motion } from 'framer-motion'

const BACKGROUND_WORDS = ['EMPOWER', 'GROW', 'INSPIRE']

function Hero() {
  return (
    <section 
      id="home" 
      className="relative flex items-center justify-center overflow-hidden bg-gradient-to-r from-[#0f274d] via-[#1a3a6e] to-[#c8873f]"
      style={{ minHeight: 'calc(100vh - 104px)' }}
      aria-labelledby="hero-heading"
    >
      {/* Ambient glow behind the text */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(240,160,75,0.12) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      {/* Left background words */}
      <div 
        className="absolute top-1/2 -translate-y-1/2 flex flex-col gap-4 z-0 pointer-events-none select-none left-0 pl-2 md:pl-8 opacity-60 sm:opacity-100 w-[45%] md:w-[40%] overflow-hidden" 
        style={{
          maskImage: 'linear-gradient(to right, black 60%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to right, black 60%, transparent 100%)'
        }}
        aria-hidden="true"
      >
        {BACKGROUND_WORDS.map((word) => (
          <span key={`left-${word}`} className="text-[clamp(2.5rem,10vw,5rem)] md:text-[clamp(3.5rem,8vw,7rem)] font-extrabold tracking-widest text-white/[0.04] leading-tight whitespace-nowrap">
            {word}
          </span>
        ))}
      </div>

      {/* Right background words */}
      <div 
        className="absolute top-1/2 -translate-y-1/2 flex flex-col gap-4 z-0 pointer-events-none select-none right-0 pr-2 md:pr-8 text-right opacity-60 sm:opacity-100 w-[45%] md:w-[40%] overflow-hidden" 
        style={{
          maskImage: 'linear-gradient(to left, black 60%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to left, black 60%, transparent 100%)'
        }}
        aria-hidden="true"
      >
        {BACKGROUND_WORDS.map((word) => (
          <span key={`right-${word}`} className="text-[clamp(2.5rem,10vw,5rem)] md:text-[clamp(3.5rem,8vw,7rem)] font-extrabold tracking-widest text-white/[0.04] leading-tight whitespace-nowrap">
            {word}
          </span>
        ))}
      </div>

      {/* Hero content with floating animation */}
      <div className="relative z-10 text-center max-w-[800px] px-6">
        <motion.h1
          id="hero-heading"
          className="text-[clamp(2.5rem,6vw,4.5rem)] font-extrabold tracking-wide text-white leading-tight mb-6"
          initial={{ opacity: 0, rotateX: -100 }}
          animate={{ opacity: 1, rotateX: 0 }}
          transition={{
            duration: 0.8,
            ease: [0.215, 0.61, 0.355, 1], // Equivalent to GSAP power3.out
            delay: 0.1
          }}
          style={{
            fontFamily: "'Cinzel', serif",
            transformOrigin: "50% 50% -160px",
            transformStyle: "preserve-3d",
            textShadow: '0 0 40px rgba(240, 160, 75, 0.3), 0 0 80px rgba(240, 160, 75, 0.15)',
          }}
        >
          UNLEASH YOUR POTENTIAL
        </motion.h1>

        <motion.p
          className="text-[clamp(1rem,2.5vw,1.35rem)] font-light text-white/80 tracking-wider mt-2"
          initial={{ opacity: 0, rotateX: -100 }}
          animate={{ opacity: 1, rotateX: 0 }}
          transition={{
            duration: 0.8,
            ease: [0.215, 0.61, 0.355, 1],
            delay: 0.35 // staggered by 0.25 from the h1
          }}
          style={{
            fontFamily: "'Inter', sans-serif",
            transformOrigin: "50% 50% -160px",
            transformStyle: "preserve-3d",
          }}
        >
          Transforming Individuals, Empowering Lives at PDC
        </motion.p>

        <motion.a
          href="https://docs.google.com/forms/d/e/1FAIpQLSfP-dZFebfy0I88d-px2sTggsD1vBCMQNvaU0JQh5ArmiPLfw/viewform?hl=en_GB&pli=1&utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAcGRvZgJleHRuA2FlbQIxMQBzcnRjBmFwcF9pZA81NjcwNjczNDMzNTI0MjcAAadDXzUouPZ7leE8k7CnEceWmf6jlLXX3625EPxhR6z2pQ-f9yIA_GLOYE2KFA_aem_lFe2yT246vDeiahtuFr8mA"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-8 px-8 py-3 bg-[#f0a04b] text-[#111] text-sm md:text-base font-bold tracking-widest rounded-full hover:bg-[#e08f3a] transition-all hover:scale-105 shadow-[0_0_20px_rgba(240,160,75,0.4)] hover:shadow-[0_0_30px_rgba(240,160,75,0.6)]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.215, 0.61, 0.355, 1], delay: 0.6 }}
          style={{
            fontFamily: "'Inter', sans-serif",
          }}
        >
          JOIN US
        </motion.a>

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
