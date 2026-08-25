import { useState, useEffect } from 'react';
import pdcLogo from '../../assets/pdc-logo.png';

function EventCard({ image, date, title, description, time = "10:00 AM - 4:00 PM", location = "Main Auditorium, DIT University", head, eventPhotos = [], featured = false }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isModalOpen]);

  return (
    <>
      <article className={`flex flex-col bg-white rounded-2xl shadow-[0_4px_20px_rgba(15,39,77,0.12)] overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-[0_8px_32px_rgba(240,160,75,0.3)] group relative ${featured ? 'after:content-[""] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[60%] after:bg-gradient-to-t after:from-[rgba(240,160,75,0.12)] after:to-transparent after:pointer-events-none after:opacity-0 group-hover:after:opacity-100 after:transition-opacity after:duration-300' : ''}`}>
        <div className="relative w-full h-[150px] md:h-[170px] overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-400 ease-[ease] group-hover:scale-105" 
            loading="lazy" 
          />
        </div>
        <div className="flex flex-col flex-1 p-5 relative z-10">
          <time className="text-[0.8rem] font-medium text-gray-500 mb-2" dateTime={date}>{date}</time>
          <h3 className="text-[0.95rem] font-bold tracking-wide text-[#0f274d] leading-snug mb-3">{title}</h3>
          <p className="text-[0.85rem] text-gray-600 leading-relaxed mb-5 flex-1 whitespace-pre-line">{description}</p>
          <button 
            type="button" 
            className="self-start px-5 py-2 bg-[#f0a04b] text-white text-[0.72rem] font-bold tracking-wider rounded-full transition-all duration-300 hover:bg-[#e08f3a] hover:scale-105"
            onClick={() => setIsModalOpen(true)}
          >
            VIEW DETAILS
          </button>
        </div>
      </article>

      {/* Modal Overlay */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 z-[100] bg-black/40 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
          onClick={() => setIsModalOpen(false)}
        >
          {/* Modal Container */}
          <div 
            className="bg-white rounded-3xl overflow-hidden w-full max-w-3xl max-h-[90vh] overflow-y-auto relative shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button 
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/40 hover:bg-black/60 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-colors"
              onClick={() => setIsModalOpen(false)}
            >
              <i className="fa-solid fa-xmark text-lg"></i>
            </button>

            {/* Header Image */}
            <div className="w-full h-[200px] sm:h-[240px] shrink-0">
              <img src={image} alt={title} className="w-full h-full object-cover" />
            </div>

            {/* Content Area */}
            <div className="p-6 sm:p-10 flex flex-col">
              {/* Top Label */}
              <div className="flex items-center gap-2 text-[#b5835a] font-bold text-[10px] tracking-widest mb-3 uppercase">
                <img src={pdcLogo} alt="PDC Logo" className="w-5 h-5 object-contain" />
                Personality Development Club
              </div>

              {/* Title */}
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#111] mb-6 leading-tight">
                {title}
              </h2>

              {/* Meta Info Row */}
              <div className="flex flex-wrap gap-6 sm:gap-4 justify-between mb-8">
                {/* Date */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#fdeedc] text-[#b5835a] flex items-center justify-center shrink-0">
                    <i className="fa-regular fa-calendar text-xl"></i>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] text-gray-500 font-bold tracking-wider mb-1">DATE</span>
                    <span className="text-sm font-bold text-[#111]">{date}</span>
                  </div>
                </div>

                {/* Time (if provided) */}
                {time && (
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#fdeedc] text-[#b5835a] flex items-center justify-center shrink-0">
                      <i className="fa-regular fa-clock text-xl"></i>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] text-gray-500 font-bold tracking-wider mb-1">TIME</span>
                      <span className="text-sm font-bold text-[#111]">{time}</span>
                    </div>
                  </div>
                )}

                {/* Event Head */}
                {head && (
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#fdeedc] text-[#b5835a] flex items-center justify-center shrink-0">
                      <i className="fa-solid fa-user-tie text-xl"></i>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] text-gray-500 font-bold tracking-wider mb-1">EVENT HEAD</span>
                      <span className="text-sm font-bold text-[#111]">{head}</span>
                    </div>
                  </div>
                )}

                {/* Location */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#fdeedc] text-[#b5835a] flex items-center justify-center shrink-0">
                    <i className="fa-solid fa-location-dot text-xl"></i>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] text-gray-500 font-bold tracking-wider mb-1">LOCATION</span>
                    <span className="text-sm font-bold text-[#111] max-w-[150px] leading-tight">{location}</span>
                  </div>
                </div>
              </div>

              {/* Event Details */}
              <div className="flex items-center gap-2 font-bold text-lg text-[#111] mb-4">
                <i className="fa-solid fa-circle-info text-[#b5835a]"></i>
                Event Details
              </div>
              <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                {description}
              </p>

              {/* Event Photos */}
              {eventPhotos && eventPhotos.length > 0 && (
                <>
                  <hr className="border-gray-200 my-8" />
                  <div className="flex items-center gap-2 font-bold text-lg text-[#111] mb-4">
                    <i className="fa-solid fa-images text-[#b5835a]"></i>
                    Event Gallery
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {eventPhotos.map((photo, idx) => (
                      <div key={idx} className="w-full h-32 rounded-lg overflow-hidden shadow-sm">
                        <img src={photo} alt={`Event photo ${idx + 1}`} className="w-full h-full object-cover transition-transform hover:scale-105 duration-300" />
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default EventCard;