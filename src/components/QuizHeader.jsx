import './QuizHeader.css'

export default function QuizHeader() {
  return (
    <header className="quiz-header">
      <div className="quiz-header__logo">
        <span className="quiz-header__icon" aria-hidden="true">🧬</span>
        <span className="quiz-header__name">DevPersona</span>
      </div>
    </header>
  )
}
