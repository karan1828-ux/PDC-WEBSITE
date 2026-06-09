import { motion } from 'framer-motion'
import './Hero.css'

const BACKGROUND_WORDS = ['EMPOWER', 'GROW', 'INSPIRE']

function Hero() {
  return (
    <section id="home" className="hero" aria-labelledby="hero-heading">
      <div className="hero__bg-words hero__bg-words--left" aria-hidden="true">
        {BACKGROUND_WORDS.map((word) => (
          <span key={`left-${word}`} className="hero__bg-word">
            {word}
          </span>
        ))}
      </div>

      <div className="hero__bg-words hero__bg-words--right" aria-hidden="true">
        {BACKGROUND_WORDS.map((word) => (
          <span key={`right-${word}`} className="hero__bg-word">
            {word}
          </span>
        ))}
      </div>

      <div className="hero__content">
        <motion.h1
          id="hero-heading"
          className="hero__title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          UNLEASH YOUR POTENTIAL
        </motion.h1>

        <motion.p
          className="hero__subtitle"
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
