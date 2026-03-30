import Timer from './components/Timer'
import Questions from './components/Questions'
import Result from './components/Result'
import { useState } from 'react'

const App = () => {

  const [isOver, setIsOver] = useState(false)
  const [score, setScore] = useState(0)

  return (
    <div>

      {isOver ? (
        <Result score={score} />
      ) : (
        <>
          <Timer setIsOver={setIsOver} />
          <Questions setIsOver={setIsOver} setScore={setScore} />
        </>
      )}


    </div>
  )
}

export default App
