import { useState } from 'react'
import RestartButton from './RestartButton'
import './ResultCard.css'

export default function ResultCard({ result, onRestart }) {
  const { personality, isTie } = result
  const [copied, setCopied] = useState(false)

  const shareText = `I just took the DevPersona quiz and got: ${personality.emoji} ${personality.title}\n\n"${personality.oneliner}"\n\nFind out your engineering archetype → devpersona.vercel.app`

  const handleCopy = () => {
    navigator.clipboard.writeText(shareText).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2200)
    })
  }

  return (
    <div className="result-wrapper">
      <div
        className="result-card"
        style={{ '--type-color': personality.color }}
      >
        {/* Top glow */}
        <div className="result-card__glow" aria-hidden="true" />

        {/* Emoji + label */}
        <div className="result-card__top">
          <div className="result-card__emoji-wrap">
            <span className="result-card__emoji" role="img" aria-label={personality.title}>
              {personality.emoji}
            </span>
          </div>
          {isTie && (
            <span className="result-card__tie-badge">Close call! Tie-breaker applied</span>
          )}
          <p className="result-card__eyebrow">Your engineering archetype is</p>
          <h1 className="result-card__title">{personality.title}</h1>
        </div>

        {/* One-liner */}
        <blockquote className="result-card__oneliner">
          <span className="result-card__quote">"</span>
          {personality.oneliner}
          <span className="result-card__quote">"</span>
        </blockquote>

        {/* Description */}
        <p className="result-card__description">{personality.description}</p>

        {/* Traits */}
        <div className="result-card__traits-section">
          <p className="result-card__traits-label">Your traits</p>
          <div className="result-card__traits">
            {personality.traits.map((trait) => (
              <span key={trait} className="trait-chip">{trait}</span>
            ))}
          </div>
        </div>

        {/* Share section */}
        <div className="result-card__share">
          <p className="result-card__share-label">Share your result</p>
          <div className="result-card__share-box">
            <p className="result-card__share-text">
              I got: <strong>{personality.emoji} {personality.title}</strong>
            </p>
            <p className="result-card__share-sub">{personality.oneliner}</p>
          </div>
          <button
            type="button"
            className={`copy-btn${copied ? ' copy-btn--done' : ''}`}
            onClick={handleCopy}
            aria-label="Copy shareable text"
          >
            {copied ? (
              <>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M20 6L9 17l-5-5"/>
                </svg>
                Copied!
              </>
            ) : (
              <>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
                  <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/>
                </svg>
                Copy for LinkedIn
              </>
            )}
          </button>
        </div>

        {/* Restart */}
        <div className="result-card__restart">
          <RestartButton onRestart={onRestart} />
        </div>
      </div>
    </div>
  )
}
