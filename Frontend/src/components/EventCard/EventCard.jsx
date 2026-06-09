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
        </button>
      </div>
    </article>
  )
}

export default EventCard
