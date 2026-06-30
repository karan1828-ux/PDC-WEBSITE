import { motion } from 'framer-motion'

const BACKGROUND_WORDS = ['EMPOWER', 'GROW', 'INSPIRE']

function Hero() {
  return (
    <section 
      id="home" 
      className="relative flex items-center justify-center min-h-[340px] md:min-h-[280px] py-20 px-8 overflow-hidden bg-gradient-to-r from-[#0f274d] via-[#1a3a6e] to-[#c8873f] hover:to-[#f0a04b]" 
      aria-labelledby="hero-heading"
    >
      <div className="absolute top-1/2 -translate-y-1/2 flex flex-col gap-1 z-0 pointer-events-none select-none left-[-2%] md:left-[2%] opacity-60 sm:opacity-100" aria-hidden="true">
        {BACKGROUND_WORDS.map((word) => (
          <span key={`left-${word}`} className="text-[clamp(1.75rem,8vw,2.5rem)] md:text-[clamp(2.5rem,6vw,4.5rem)] font-extrabold tracking-widest text-white/5 leading-tight whitespace-nowrap">
            {word}
          </span>
        ))}
      </div>

      <div className="absolute top-1/2 -translate-y-1/2 flex flex-col gap-1 z-0 pointer-events-none select-none text-right right-[-2%] md:right-[2%] opacity-60 sm:opacity-100" aria-hidden="true">
        {BACKGROUND_WORDS.map((word) => (
          <span key={`right-${word}`} className="text-[clamp(1.75rem,8vw,2.5rem)] md:text-[clamp(2.5rem,6vw,4.5rem)] font-extrabold tracking-widest text-white/5 leading-tight whitespace-nowrap">
            {word}
          </span>
        ))}
      </div>

      <div className="relative z-10 text-center max-w-[800px]">
        <motion.h1
          id="hero-heading"
          className="text-[clamp(2rem,5vw,3.25rem)] font-extrabold tracking-wide text-white leading-tight mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          UNLEASH YOUR POTENTIAL
        </motion.h1>

        <motion.p
          className="text-[clamp(0.95rem,2vw,1.15rem)] font-normal text-white/90 tracking-wide"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.25 }}
        >
          Transforming Individuals, Empowering Lives at PDC
        </motion.p>
      </div>
    </section>
  )
}

export default Hero
