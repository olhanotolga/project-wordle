import React, { useState } from 'react';

import { sample } from '../../utils';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';
import GameWonBanner from '../GameWonBanner';
import GameLostBanner from '../GameLostBanner';
import Keyboard from '../Keyboard';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = useState([]);
  const [result, setResult] = useState();

  const handleAppendGuess = (label) => {
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
      <GuessResults guesses={guesses} answer={answer} />
      <GuessInput handleAppendGuess={handleAppendGuess} isDisabled={!!result} />
      {result === 'win' && <GameWonBanner numOfGuesses={guesses.length} />}
      {result === 'lose' && <GameLostBanner answer={answer} />}
      <Keyboard />
    </>
  );
}

export default Game;
