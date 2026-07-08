import { motion } from 'framer-motion'

function OurVision() {
  return (
    <section id="vision" className="bg-white py-16 sm:py-24 px-5 sm:px-8" aria-labelledby="vision-heading">
      <div className="max-w-[1000px] mx-auto text-center">
        <header className="flex items-center justify-center gap-4 mb-8 sm:mb-12">
          <span className="hidden sm:flex items-center text-[#f0a04b] opacity-70 before:content-[''] before:inline-block before:w-16 before:h-[2px] before:bg-[#f0a04b] before:mr-4" aria-hidden="true">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 16v-4" />
              <path d="M12 8h.01" />
            </svg>
          </span>
          <h2 id="vision-heading" className="text-[clamp(1.75rem,4vw,2.5rem)] font-extrabold tracking-widest text-[#0f274d]">
            OUR VISION
          </h2>
          <span className="hidden sm:flex items-center text-[#f0a04b] opacity-70 after:content-[''] after:inline-block after:w-16 after:h-[2px] after:bg-[#f0a04b] after:ml-4" aria-hidden="true">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 16v-4" />
              <path d="M12 8h.01" />
            </svg>
          </span>
        </header>

        <motion.p 
          className="text-[clamp(1rem,2vw,1.25rem)] text-slate-700 leading-relaxed max-w-3xl mx-auto font-light"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          To empower students with confidence, effective communication, leadership qualities, and professional etiquette through experiential learning. The Personality Development Club strives to create an inclusive environment where every student discovers their potential, overcomes stage fear, develops strong interpersonal skills, and becomes prepared for both personal and professional success.
        </motion.p>
      </div>
    </section>
  )
}

export default OurVision
