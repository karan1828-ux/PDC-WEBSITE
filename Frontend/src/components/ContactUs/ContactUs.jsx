import { useState } from 'react'
import { motion } from 'framer-motion'

function ContactUs() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState('idle') // idle | submitted

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email) return
    // Hook this up to your backend / email service of choice.
    setStatus('submitted')
    setEmail('')
    setMessage('')
  }

  return (
    <section id="contact" className="relative bg-white py-12 sm:py-16 px-5 sm:px-8 overflow-hidden" aria-labelledby="contact-heading">
      {/* subtle ambient shapes for depth */}
      <div className="absolute -top-16 -left-16 w-64 h-64 rounded-full bg-[#f0a04b]/10 blur-3xl pointer-events-none" aria-hidden="true" />
      <div className="absolute -bottom-16 -right-16 w-72 h-72 rounded-full bg-[#0f274d]/10 blur-3xl pointer-events-none" aria-hidden="true" />

      <div className="max-w-[720px] mx-auto relative">
        <header className="flex items-center justify-center gap-4 mb-8 sm:mb-10">
          <span className="hidden sm:flex items-center text-[#f0a04b] opacity-70 before:content-[''] before:inline-block before:w-2 before:h-2 before:bg-[#f0a04b] before:rounded-full before:mx-2" aria-hidden="true">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 4h16v16H4z" opacity="0" />
              <path d="M22 6 12 13 2 6" />
              <path d="M2 6h20v12H2z" />
            </svg>
          </span>
          <h2 id="contact-heading" className="text-[clamp(1.5rem,3vw,2rem)] font-extrabold tracking-widest text-[#0f274d] text-center">
            CONTACT US
          </h2>
          <span className="hidden sm:flex items-center text-[#f0a04b] opacity-70 after:content-[''] after:inline-block after:w-2 after:h-2 after:bg-[#f0a04b] after:rounded-full after:mx-2" aria-hidden="true">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 6v6l4 2" />
            </svg>
          </span>
        </header>

        <p className="text-center text-[0.85rem] text-gray-600 mb-8 -mt-2">
          Have a question, idea, or want to collaborate? Drop us your email and query below.
        </p>

        <motion.form
          onSubmit={handleSubmit}
          className="bg-[#f8fafc] rounded-2xl shadow-[0_4px_20px_rgba(15,39,77,0.10)] p-6 sm:p-8 flex flex-col gap-4"
          style={{ perspective: '1000px' }}
          whileHover={{ rotateX: 1, rotateY: -1 }}
          transition={{ type: 'spring', stiffness: 200, damping: 20 }}
        >
          <div className="flex flex-col gap-1.5 text-left">
            <label htmlFor="contact-email" className="text-[0.75rem] font-bold tracking-wider text-[#0f274d]">
              YOUR EMAIL
            </label>
            <input
              id="contact-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full px-4 py-3 rounded-lg border border-[#e2e8f0] bg-white text-[0.9rem] text-[#1e293b] outline-none transition-all duration-200 focus:border-[#f0a04b] focus:shadow-[0_0_0_3px_rgba(240,160,75,0.15)]"
            />
          </div>

          <div className="flex flex-col gap-1.5 text-left">
            <label htmlFor="contact-message" className="text-[0.75rem] font-bold tracking-wider text-[#0f274d]">
              YOUR QUERY
            </label>
            <textarea
              id="contact-message"
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tell us what's on your mind..."
              className="w-full px-4 py-3 rounded-lg border border-[#e2e8f0] bg-white text-[0.9rem] text-[#1e293b] outline-none resize-none transition-all duration-200 focus:border-[#f0a04b] focus:shadow-[0_0_0_3px_rgba(240,160,75,0.15)]"
            />
          </div>

          <button
            type="submit"
            className="self-center mt-2 px-8 py-3 bg-[#f0a04b] text-white text-[0.75rem] font-bold tracking-widest rounded-full transition-all duration-300 hover:bg-[#e08f3a] hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(240,160,75,0.4)]"
          >
            SUBMIT
          </button>

          {status === 'submitted' && (
            <motion.p
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center text-[0.8rem] font-semibold text-[#0f274d]"
              role="status"
            >
              Thanks — we've received your query and will get back to you soon.
            </motion.p>
          )}
        </motion.form>
      </div>
    </section>
  )
}

export default ContactUs
