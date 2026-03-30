import { useState } from 'react'
import questions from './Questions.json'

const Questions = ({ setIsOver, setScore }) => {

    const [currentIndex, setCurrentIndex] = useState(0)
    

    const handleSelectOption = (selectedOption) => {
        if (selectedOption === questions[currentIndex].answer) {
            setScore(prev => prev + 1)
        }

        if (currentIndex < questions.length - 1) {
            setCurrentIndex(prev => prev + 1)
        } else {
            setIsOver(true)
        }
    }

    return (
        <div>
            <h1 className='text-center mt-6 mb-4.5 font-bold text-[24px]'>{questions[currentIndex].question}</h1>

            <div className='flex flex-col gap-2 max-w-md mx-auto'>
                {questions[currentIndex].options.map((option, index) => {
                    return (
                        <button className='border-2 py-2 rounded' key={questions[currentIndex].id + index} onClick={() => handleSelectOption(option)}>
                            {option}
                        </button>
                    )
                })}
            </div>

        </div>
    )
}

export default Questions
