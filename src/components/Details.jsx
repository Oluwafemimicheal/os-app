import React from 'react'

const Details = ({ question = 'What is your question?', answer ='Lorem ipsum dolor sit amet consectetur adipisicing elit. Est architecto, molestias rem tempora magni corrupti accusantium recusandae error aut earum fugiat soluta, atque repellat nam ipsum culpa? Placeat, corporis aliquam.'}) => {
  return (
    <details className=''>
      <summary className='border-2 border-red-500 hover:bg-red-500 group-hover:rounded-b-none hover:text-white cursor-pointer transition p-3 rounded-md'>{question}</summary>
      <p className='border-b-2  border-red-500 p-3 group bg-gray-100 rounded-b-md'>{answer}</p>
    </details>
  )
}

export default Details
