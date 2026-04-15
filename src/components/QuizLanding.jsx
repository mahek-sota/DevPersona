import './QuizLanding.css'

const PERSONALITY_CHIPS = [
  { emoji: '🏰', label: 'Monolith Defender' },
  { emoji: '🧩', label: 'Modular Thinker' },
  { emoji: '🕸️', label: 'Microservices Architect' },
  { emoji: '🚀', label: 'Startup Pragmatist' },
  { emoji: '🔍', label: 'Debugging Detective' },
  { emoji: '📊', label: 'Data-Driven Engineer' },
  { emoji: '⚙️', label: 'Overengineering Enthusiast' },
  { emoji: '🧘', label: 'Zen Coder' }
]

export default function QuizLanding({ onStart }) {
  return (
    <div className="landing">
      {/* Decorative blobs */}
      <div className="landing-blob landing-blob--1" aria-hidden="true" />
      <div className="landing-blob landing-blob--2" aria-hidden="true" />

      <div className="landing-content">
        {/* Badge */}
        <div className="landing-badge">
          <span className="landing-badge__dot" />
          8 questions · 8 archetypes · 1 honest result
        </div>

        {/* Title */}
        <h1 className="landing-title">
          <span className="landing-title__pre">What kind of</span>
          <span className="landing-title__main gradient-text">engineer are you?</span>
        </h1>

        {/* Subtitle */}
        <p className="landing-subtitle">
          A playful personality quiz built for developers who have opinions
          about Kafka, monoliths, and what "done" actually means.
        </p>

        {/* Personality type chips */}
        <div className="landing-chips" aria-label="Personality types">
          {PERSONALITY_CHIPS.map((chip) => (
            <div className="landing-chip" key={chip.label}>
              <span className="landing-chip__emoji">{chip.emoji}</span>
              <span className="landing-chip__label">{chip.label}</span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <button className="landing-cta" onClick={onStart} type="button">
          <span>Find your archetype</span>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>

        <p className="landing-note">Takes about 2 minutes. No email required.</p>
      </div>
    </div>
  )
}
