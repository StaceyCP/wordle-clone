import React, {useEffect} from "react";
import useWordle from "../hooks/useWordle";

export default function Wordle({ solution }) {
    const { currentGuess, handleKeyup} = useWordle(solution);

    useEffect(() => {
        window.addEventListener('keyup', handleKeyup)
        return () => window.removeEventListener('keyup', handleKeyup) //detaches keyup event to prevent multiple event listeners 
    }, [handleKeyup])

    return(
        <div>Your current guess is {currentGuess}</div>
    )
}