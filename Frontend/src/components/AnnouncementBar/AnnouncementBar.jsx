import './AnnouncementBar.css'

const ANNOUNCEMENTS = [
  "COMING SOON!",
  "COMING SOON!",
  "COMING SOON!",
  "COMING SOON!"
]

function AnnouncementBar() {
  const marqueeContent = ANNOUNCEMENTS.map((item, index) => (
    <span key={index} className="announcement-bar__item">
      <span className="announcement-bar__separator" aria-hidden="true">|</span>
      {item}
    </span>
  ))

  return (
    <aside className="announcement-bar" aria-label="Upcoming events announcements">
      <div className="announcement-bar__track">
        <div className="announcement-bar__content">
          <span className="announcement-bar__label">UPCOMING EVENTS</span>
          {marqueeContent}
        </div>
        <div className="announcement-bar__content" aria-hidden="true">
          <span className="announcement-bar__label">UPCOMING EVENTS</span>
          {marqueeContent}
        </div>
      </div>
    </aside>
  )
}

export default AnnouncementBar
