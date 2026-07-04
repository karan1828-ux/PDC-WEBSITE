import { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

function TeamCard({ name, role, image, quote }) {
  const cardRef = useRef(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [12, -12]), { stiffness: 200, damping: 20 })
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-12, 12]), { stiffness: 200, damping: 20 })

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect()
    x.set((e.clientX - rect.left) / rect.width - 0.5)
    y.set((e.clientY - rect.top) / rect.height - 0.5)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <div style={{ perspective: '1000px' }}>
      <motion.article
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        className="relative bg-white rounded-2xl shadow-[0_4px_20px_rgba(15,39,77,0.12)] overflow-hidden p-6 flex flex-col items-center text-center transition-shadow duration-300 hover:shadow-[0_20px_40px_rgba(15,39,77,0.22)]"
      >
        <div
          className="w-24 h-24 rounded-full overflow-hidden border-4 border-[#f0a04b] mb-4"
          style={{ transform: 'translateZ(40px)' }}
        >
          <img src={image} alt={name} className="w-full h-full object-cover" loading="lazy" />
        </div>
        <h3
          className="text-[0.95rem] font-bold tracking-wide text-[#0f274d] mb-1"
          style={{ transform: 'translateZ(30px)' }}
        >
          {name}
        </h3>
        <p
          className="text-[0.72rem] font-semibold tracking-widest text-[#f0a04b] uppercase mb-3"
          style={{ transform: 'translateZ(30px)' }}
        >
          {role}
        </p>
        <p
          className="text-[0.8rem] text-gray-600 leading-relaxed italic"
          style={{ transform: 'translateZ(20px)' }}
        >
          "{quote}"
        </p>
      </motion.article>
    </div>
  )
}

export default TeamCard
