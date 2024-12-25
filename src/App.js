import { useState } from "react"

export default function App() {
  const [step, setStep] = useState(1)
  const [count, setCount] = useState(0)

  function minusCount() {
    setCount((c) => c - step)
  }

  function plusCount() {
    setCount((c) => c + step)
  }

  function calculateDate(days) {
    const date = new Date()
    date.setDate(date.getDate() + days)
    return date
  }

  const dayText = Math.abs(count) === 1 ? 'day' : 'days'

  function reset() {
    setCount(0)
    setStep(1)
  }

  return (
    <>
      <div className="container">
        <h1>Date Counter</h1>
        <div className="step-container">
          <div>
            <label style={{ fontSize: '20px', display: 'flex', gap: '1.5rem' }}>
              <input type="range" min={1} defaultValue={1} max={10} onChange={(e) => setStep(Number(e.target.value))} />
              {step}
            </label>
          </div>
        </div>
        <div className="count-container">
          <div className="buttons">
            <button className="button minusBtn" onClick={minusCount}>-</button>
            <input type="text" onChange={(e) => {
              const value = Number(e.target.value)
              if (!isNaN(value)) {
                setCount(value)
              }
            }} value={count} />
            <button className="button plusBtn" onClick={plusCount}>+</button>
          </div>

        </div>
        <p>
          {count === 0 ? `today is ${calculateDate(0).toDateString()}` : count > 0 ? `${count} ${dayText} 
          from today is ${calculateDate(count).toDateString()}` : `${Math.abs(count)} ${dayText} ago was
           ${calculateDate(count).toDateString()}`}
        </p>
        <p>
          {count === 0 ? `today in persian date is ${calculateDate(0).toLocaleDateString('fa-IR')}`
            : count > 0 ? `${count} ${dayText} from today is ${calculateDate(count).toLocaleDateString('fa-IR')}`
              : `${Math.abs(count)} ${dayText} ago was ${calculateDate(count).toLocaleDateString('fa-IR')}`}
        </p>
        <button className="reset-button" onClick={reset} style={
          (step === 1 && count === 0 ? { opacity: '0' } : { opacity: '1' })
        }>Reset</button>
      </div >
    </>
  )
}