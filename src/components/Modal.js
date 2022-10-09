import React from 'react'

export default function Modal({ isCorrect, turn, solution }) {
  return (
    <div className='modal'>
        {isCorrect && (
            <div>
                <h2>🎉</h2>
                <h3>You Win!</h3>
                <p className="solution">{solution}</p>
                <p>Congratulations! <br></br>You found the solution in {turn} guesses</p>
            </div>
        )}

        {!isCorrect && (
            <div>
                <h2>😔</h2>
                <h3>Better luck next time!</h3>
                <p className="solution">{solution}</p>
            </div>
        )}
    </div>
  )
}
