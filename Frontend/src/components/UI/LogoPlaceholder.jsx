import React from 'react'

const LogoPlaceholder = ({ className = "h-12" }) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="bg-[#0a192f] p-2 rounded-full scale-125">
        {/* Replace this SVG with your actual PDC logo 
        by <img src="https://example.com/pdc-logo.png" alt="PDC logo" className="w-10 h-10 object-contain" />*/ }
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-10 h-10"
        >
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      </div>
      <div className="flex flex-col ml-4">
        <span className="font-bold text-[#0a192f] text-xl leading-none uppercase font-serif tracking-widest">
          Personality
        </span>
        <span className="font-bold text-[#0a192f] text-xl leading-none uppercase font-serif tracking-widest">
          Development
        </span>
        <span className="font-bold text-[#0a192f] text-xl leading-none uppercase font-serif tracking-widest">
          Club
        </span>
      </div>
    </div>
  )
}

export default LogoPlaceholder
