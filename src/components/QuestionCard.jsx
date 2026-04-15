import './QuestionCard.css'

export default function QuestionCard({
  question,
  selectedOption,
  onOptionSelect,
  onNext,
  questionNumber,
  totalQuestions,
  animDir
}) {
  const isLast = questionNumber === totalQuestions

  return (
    <div className={`question-card question-card--${animDir}`}>
      {/* Question number tag */}
      <div className="question-card__tag">
        <span className="question-card__tag-num">Q{questionNumber}</span>
      </div>

      {/* Question text */}
      <h2 className="question-card__text">{question.text}</h2>

      {/* Options */}
      <div className="question-card__options" role="radiogroup" aria-label="Answer options">
        {question.options.map((option) => {
          const isSelected = selectedOption?.id === option.id
          return (
            <button
              key={option.id}
              type="button"
              role="radio"
              aria-checked={isSelected}
              className={`option${isSelected ? ' option--selected' : ''}`}
              onClick={() => onOptionSelect(option)}
            >
              <span className="option__indicator" aria-hidden="true">
                {isSelected
                  ? <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/></svg>
                  : null
                }
              </span>
              <span className="option__text">{option.text}</span>
            </button>
          )
        })}
      </div>

      {/* Next button */}
      <div className="question-card__footer">
        <button
          type="button"
          className={`next-btn${selectedOption ? ' next-btn--active' : ''}`}
          onClick={onNext}
          disabled={!selectedOption}
          aria-label={isLast ? 'See my result' : 'Next question'}
        >
          {isLast ? 'See my result' : 'Next'}
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  )
}
