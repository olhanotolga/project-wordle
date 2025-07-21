import React, { useState } from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = useState([]);
  const handleAppendGuess = (label) => {
    if (guesses.length >= 6) {
      return;
    }
    const newestGuess = {
      id: crypto.randomUUID(),
      label,
    };
    setGuesses([...guesses, newestGuess]);
  };

  return (
    <>
      <GuessResults guesses={guesses} />
      <GuessInput handleAppendGuess={handleAppendGuess} />
    </>
  );
}

export default Game;
