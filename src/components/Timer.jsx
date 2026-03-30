import { useState, useEffect } from 'react'

const Timer = ({ setIsOver }) => {

  const [timeLeft, setTimeLeft] = useState(60)
  const [formattedTime, setFormattedTime] = useState('')


// Timer Logic
  useEffect(() => {
    
     const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 0) {
          clearInterval(timer)
          return 0;
        } 
        return prev - 1
      })
    }, 1000)

    return () => {
      clearInterval(timer)
    }
  }, [])

// Timer Format
useEffect(() => {
  if (timeLeft === 0) {
    setIsOver(true)
  }
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const formatted = `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  setFormattedTime(formatted)
}, [timeLeft])


  return (
    <div className='flex justify-center items-center h-20 bg-gray-200 mb-4 text-3xl'>
      <h1>🕒 Time Left: {formattedTime} </h1>
    </div>
  )
}

export default Timer
