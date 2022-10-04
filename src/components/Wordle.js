import React, {useEffect} from "react";
import useWordle from "../hooks/useWordle";

export default function Wordle({ solution }) {
    const { currentGuess, handleKeyup, guesses, isCorrect, turn } = useWordle(solution);

    useEffect(() => {
        window.addEventListener('keyup', handleKeyup)
        return () => window.removeEventListener('keyup', handleKeyup) //detaches keyup event to prevent multiple event listeners 
    }, [handleKeyup])

    useEffect(()=>{
        console.log(guesses, turn, isCorrect)
    }, [guesses, turn, isCorrect])

    return(
        <div>
            <div>Your current guess is {currentGuess}</div>
            <div>Total guesses {turn}</div>
            {isCorrect &&
                <div>You are correct</div>
            }
        </div>
    )
}