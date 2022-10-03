import { useState } from "react";

const useWordle = (solution) => {

    const [turn, setTurn] = useState(0);
    const [currentGuess, setCurrentGuess] = useState('');
    const [guesses, setGuesses] = useState([]); //each guess is an array
    const [history, setHistory] = useState([]); //each guess is a string - prevents duplicate guesses
    const [isCorrect, setIsCorrect] = useState(false);

   // format the users guess into an array of letter objects
   // each object represents a letter in the guess word {letter: 'a', color: 'yellow'}
   const formatGuess = () => {

   }

   // add new guess to a guess state
   // update isCorrect state if the guess is correct
   // add one to guess counter state
   const addNewGuess = () => {

   }

   // handle keyup event and track the users current guess
   // track enter key to submit the guess once pressed
   const handleKeyup = ({ key }) => {
        console.log(key);

        if (key === "Backspace") {
            setCurrentGuess((prev) => {
                return prev.slice(0, -1);
            })
            return
        }
        if(/^[A-Za-z]$/.test(key)) {
            if(currentGuess.length < 5) {
                setCurrentGuess((prev) => {
                    return prev + key
                })
            }
        }
   }

   return {turn, currentGuess, guesses, isCorrect, handleKeyup}

}

export default useWordle