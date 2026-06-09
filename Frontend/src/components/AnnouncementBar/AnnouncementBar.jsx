import './AnnouncementBar.css'

const ANNOUNCEMENTS = [
  'Next Workshop: Effective Communication (Sat 10th Oct)',
  'Seminar: Building Confidence (Wed 14th Oct)',
  'Annual Showcase (Nov 15th–17th)',
  'Guest Speaker Series: Leadership Skills (Dec 5th)',
  'Public Speaking Bootcamp (Jan 12th)',
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
