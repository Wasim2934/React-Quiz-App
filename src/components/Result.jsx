import questions from './Questions.json'

const Result = ({ score }) => {
  return (
    
    <div className='flex justify-center text-3xl font-bold mt-10'>
      <h1>Quiz Result: {score}/{questions.length} </h1>
    </div>
  )
}

export default Result
