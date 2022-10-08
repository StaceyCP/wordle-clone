import { useState } from "react";

const useWordle = (solution) => {

    const [turn, setTurn] = useState(0);
    const [currentGuess, setCurrentGuess] = useState('');
    const [guesses, setGuesses] = useState([...Array(6)]); //each guess is an array of formatted guess letters
    const [history, setHistory] = useState([]); //each guess is a string - prevents duplicate guesses
    const [isCorrect, setIsCorrect] = useState(false);

   // format the users guess into an array of letter objects
   // each object represents a letter in the guess word {letter: 'a', color: 'yellow'}
   const formatGuess = () => {
    let solutionArray = [...solution]
    let formattedGuess = [...currentGuess].map((l) => {
        return {key: l, color: 'grey'}
    })

    //find correct letters - green
    formattedGuess.forEach((l, i) => {
        if (solutionArray[i] === l.key) {
            formattedGuess[i].color = 'green'
            solutionArray[i] = null
        }
    })
    //find yellow letters

    formattedGuess.forEach((l, i) => {
        if (solutionArray.includes(l.key) && l.color !== 'green') {
            formattedGuess[i].color = 'yellow'
            solutionArray[solutionArray.indexOf(l.key)] = null
        }
    })

    return formattedGuess
   }

   // add new guess to a guess state
   // update isCorrect state if the guess is correct
   // add one to guess counter state
   const addNewGuess = (formattedGuess) => {
        if (currentGuess === solution) {
            setIsCorrect(true);
        }
        setGuesses((prevGuesses) => {
            let newGuesses = [...prevGuesses]
            newGuesses[turn] = formattedGuess
            return newGuesses
        })
        setHistory((prevHistory) => {
            return [...prevHistory, currentGuess]
        })
        setTurn((prevTurn) => {
            return prevTurn + 1
        })
        setCurrentGuess('')
   }

   // handle keyup event and track the users current guess
   // track enter key to submit the guess once pressed
   const handleKeyup = ({ key }) => {
        console.log(key);

        if (key === "Enter") {
            //submit only if turn is less than 5
            if (turn > 5) {
                console.log("All of your guesses have been used")
                return
            }
            
            //no submit if guess has been used already
            if (history.includes(currentGuess)) {
                console.log("This word has already been used")
                return
            }
            //check guess length is equal to 5 characters
            if (currentGuess.length !== 5) {
                console.log("Word must be 5 characters long")
                return
            }

            const formatted = formatGuess()
            addNewGuess(formatted)
        
        }

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