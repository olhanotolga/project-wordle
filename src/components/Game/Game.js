import React, { useState } from 'react';

import { sample } from '../../utils';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { WORDS } from '../../data';
import { checkGuess } from '../../game-helpers';
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
  const [correctLetters, setCorrectLetters] = useState(new Set());
  const [misplacedLetters, setMisplacedLetters] = useState(new Set());
  const [incorrectLetters, setIncorrectLetters] = useState(new Set());

  const handleAppendGuess = (label) => {
    const validatedGuess = checkGuess(label, answer);

    const newGuesses = [...guesses, validatedGuess];

    setGuesses(newGuesses);

    const newCorrect = new Set(correctLetters);
    const newMispaced = new Set(misplacedLetters);
    const newIncorrect = new Set(incorrectLetters);

    validatedGuess.forEach((el) => {
      if (el.status === 'correct') {
        newCorrect.add(el.letter);
      } else if (el.status === 'misplaced') {
        newMispaced.add(el.letter);
      } else if (el.status === 'incorrect') {
        newIncorrect.add(el.letter);
      }
    });

    setCorrectLetters(newCorrect);
    setMisplacedLetters(newMispaced);
    setIncorrectLetters(newIncorrect);

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
      {result === 'win' && <GameWonBanner numOfGuesses={guesses.length} />}
      {result === 'lose' && <GameLostBanner answer={answer} />}
      <Keyboard
        correctLetters={correctLetters}
        misplacedLetters={misplacedLetters}
        incorrectLetters={incorrectLetters}
      />
    </>
  );
}

export default Game;
