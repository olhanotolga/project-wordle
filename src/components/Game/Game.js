import React, { useState } from 'react';

import { sample } from '../../utils';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
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
    if (guesses.length >= NUM_OF_GUESSES_ALLOWED) {
      return;
    }

    setGuesses([...guesses, label]);
  };

  return (
    <>
      <GuessResults guesses={guesses} />
      <GuessInput handleAppendGuess={handleAppendGuess} />
    </>
  );
}

export default Game;
