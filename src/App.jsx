import { useState, useCallback } from 'react'
import QuizLanding from './components/QuizLanding'
import QuizHeader from './components/QuizHeader'
import QuestionCard from './components/QuestionCard'
import ProgressBar from './components/ProgressBar'
import ResultCard from './components/ResultCard'
import { questions } from './data/questions'
import { calculateResultLocally } from './utils/scoreCalculator'

const PHASE = {
  LANDING:  'landing',
  QUIZ:     'quiz',
  LOADING:  'loading',
  RESULT:   'result'
}

export default function App() {
  const [phase,          setPhase]          = useState(PHASE.LANDING)
  const [currentIndex,   setCurrentIndex]   = useState(0)
  const [answers,        setAnswers]        = useState([])
  const [selectedOption, setSelectedOption] = useState(null)
  const [result,         setResult]         = useState(null)
  const [animDir,        setAnimDir]        = useState('right') // slide direction

  const handleStart = useCallback(() => {
    setCurrentIndex(0)
    setAnswers([])
    setSelectedOption(null)
    setResult(null)
    setAnimDir('right')
    setPhase(PHASE.QUIZ)
  }, [])

  const handleOptionSelect = useCallback((option) => {
    setSelectedOption(option)
  }, [])

  const submitAnswers = useCallback(async (finalAnswers) => {
    setPhase(PHASE.LOADING)
    try {
      const res = await fetch('/api/result', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify({ answers: finalAnswers })
      })
      if (!res.ok) throw new Error(`API returned ${res.status}`)
      const data = await res.json()
      setResult(data)
    } catch (err) {
      // Graceful fallback: calculate in-browser using the mirrored engine
      console.warn('[DevPersona] API unavailable, using local fallback.', err.message)
      setResult(calculateResultLocally(finalAnswers))
    } finally {
      setPhase(PHASE.RESULT)
    }
  }, [])

  const handleNext = useCallback(() => {
    if (!selectedOption) return

    const newAnswers = [...answers, selectedOption]
    setAnswers(newAnswers)

    if (currentIndex < questions.length - 1) {
      setAnimDir('right')
      setCurrentIndex(i => i + 1)
      setSelectedOption(null)
    } else {
      submitAnswers(newAnswers)
    }
  }, [selectedOption, answers, currentIndex, submitAnswers])

  const handleRestart = useCallback(() => {
    setPhase(PHASE.LANDING)
  }, [])

  return (
    <div className="app">
      {phase === PHASE.LANDING && (
        <QuizLanding onStart={handleStart} />
      )}

      {phase === PHASE.QUIZ && (
        <div className="quiz-wrapper">
          <QuizHeader />
          <ProgressBar
            current={currentIndex + 1}
            total={questions.length}
          />
          <QuestionCard
            key={currentIndex}           /* remount triggers animation */
            question={questions[currentIndex]}
            selectedOption={selectedOption}
            onOptionSelect={handleOptionSelect}
            onNext={handleNext}
            questionNumber={currentIndex + 1}
            totalQuestions={questions.length}
            animDir={animDir}
          />
        </div>
      )}

      {phase === PHASE.LOADING && (
        <div className="loading-screen">
          <div className="loading-spinner" />
          <p className="loading-text">Analyzing your engineering psyche...</p>
        </div>
      )}

      {phase === PHASE.RESULT && result && (
        <ResultCard result={result} onRestart={handleRestart} />
      )}

      <footer className="app-footer">
        Built for fun, but maybe a little too real.
        <span className="app-footer__sep">·</span>
        Built by{' '}
        <a
          className="app-footer__link"
          href="https://www.linkedin.com/in/mahek-sota/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Mahek Sota
        </a>
        <span className="app-footer__sep">·</span>
        <a
          className="app-footer__link"
          href="https://impact-doc.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Portfolio
        </a>
      </footer>
    </div>
  )
}
