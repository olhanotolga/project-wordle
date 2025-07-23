import React, { useState } from 'react';

import { sample } from '../../utils';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';
import Banner from '../Banner';

// Pick a random word on every pageload.
export const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = useState([]);
  const [result, setResult] = useState();

  const handleAppendGuess = (label) => {
    if (guesses.length >= NUM_OF_GUESSES_ALLOWED) {
      return;
    }
    const newGuesses = [...guesses, label];

    setGuesses(newGuesses);

    if (label === answer) {
      setResult('win');
    } else if (newGuesses.length === NUM_OF_GUESSES_ALLOWED) {
      setResult('lose');
    }
  };

  return (
    <>
      <GuessResults guesses={guesses} />
      <GuessInput handleAppendGuess={handleAppendGuess} isDisabled={!!result} />
      {result && (
        <Banner result={result} answer={answer} numOfGuesses={guesses.length} />
      )}
    </>
  );
}

export default Game;
