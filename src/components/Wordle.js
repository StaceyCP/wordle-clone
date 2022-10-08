import React, {useEffect} from "react";
import useWordle from "../hooks/useWordle";
import Grid from "./Grid";

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
            <div>Total guesses {turn}</div>
            {isCorrect &&
                <div>You are correct</div>
            }
            {(turn > 5 && isCorrect !== true) &&
                <div>The correct solution is {solution}</div>
            }
            <Grid currentGuess = {currentGuess} guesses = {guesses} turn = {turn} />
        </div>
    )
}