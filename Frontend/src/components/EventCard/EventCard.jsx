<<<<<<< Updated upstream
import './EventCard.css'

function EventCard({ image, date, title, description, featured = false }) {
  return (
    <article className={`event-card ${featured ? 'event-card--featured' : ''}`}>
      <div className="event-card__image-wrapper">
        <img src={image} alt={title} className="event-card__image" loading="lazy" />
      </div>
      <div className="event-card__body">
        <time className="event-card__date" dateTime={date}>{date}</time>
        <h3 className="event-card__title">{title}</h3>
        <p className="event-card__description">{description}</p>
        <button type="button" className="event-card__button">
          VIEW DETAILS
=======
function EventCard({ image, featured = false }) {
  return (
    <article
      className={`flex flex-col bg-white rounded-2xl shadow-[0_4px_20px_rgba(15,39,77,0.12)] overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-[0_8px_32px_rgba(15,39,77,0.15)] group relative ${
        featured
          ? 'after:content-[""] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[60%] after:bg-gradient-to-t after:from-[rgba(240,160,75,0.12)] after:to-transparent after:pointer-events-none'
          : ""
      }`}
    >
      <div className="relative w-full h-[180px] md:h-[200px] overflow-hidden">
        <img
          src={image}
          alt="Coming Soon"
          className="w-full h-full object-cover transition-transform duration-400 group-hover:scale-105"
          loading="lazy"
        />
      </div>

      <div className="flex flex-col flex-1 p-6 relative z-10">
        <time className="text-[0.8rem] font-medium text-gray-500 mb-2">
          Coming Soon
        </time>

        <h3 className="text-[1.2rem] font-bold text-[#0f274d] mb-3">
          COMING SOON!
        </h3>

        <p className="text-[0.9rem] text-gray-600 leading-relaxed mb-5 flex-1">
          Exciting workshops, seminars and events are currently being planned.
          Stay tuned for updates!
        </p>

        <button
          type="button"
          disabled
          className="self-start px-5 py-2 bg-gray-400 text-white text-[0.72rem] font-bold tracking-wider rounded-full cursor-not-allowed"
        >
          COMING SOON
>>>>>>> Stashed changes
        </button>
      </div>
    </article>
  );
}

export default EventCard;