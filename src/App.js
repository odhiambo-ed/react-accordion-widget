import React, { useState } from 'react'
import data from './data'
import OneQuiz from './Question'

const App = () => {
  const [questions, setQuestions] = useState(data);
  return (
    <main>
      <div className="container">
        <h5>Sample Questions and Answers</h5>
        <section className='info'>
          {questions.map((question) => {
            return <OneQuiz key={question.id} {...question} />
          })}
        </section>
      </div>
    </main>
  )
}

export default App