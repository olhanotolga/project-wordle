import React, { useState } from 'react';

import { sample } from '../../utils';
import {
  NUM_OF_GUESSES_ALLOWED,
  CHARACTER_STATUS,
  GAME_STATUS,
} from '../../constants';
import { WORDS } from '../../data';
import { checkGuess } from '../../game-helpers';
import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';
import GameWonBanner from '../GameWonBanner';
import GameLostBanner from '../GameLostBanner';
import Keyboard from '../Keyboard';

function Game() {
  const [answer, setAnswer] = useState(() => sample(WORDS));
  // To make debugging easier, we'll log the solution in the console.
  console.info({ answer });
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
      if (el.status === CHARACTER_STATUS.CORRECT) {
        newCorrect.add(el.letter);
      } else if (el.status === CHARACTER_STATUS.MISPLACED) {
        newMispaced.add(el.letter);
      } else if (el.status === CHARACTER_STATUS.INCORRECT) {
        newIncorrect.add(el.letter);
      }
    });

    setCorrectLetters(newCorrect);
    setMisplacedLetters(newMispaced);
    setIncorrectLetters(newIncorrect);

    if (label === answer) {
      setResult(GAME_STATUS.WON);
    } else if (newGuesses.length === NUM_OF_GUESSES_ALLOWED) {
      setResult(GAME_STATUS.LOST);
    }
  };

  const handleRestartGame = () => {
    setAnswer(() => sample(WORDS));

    setGuesses([]);
    setResult();

    setCorrectLetters(new Set());
    setMisplacedLetters(new Set());
    setIncorrectLetters(new Set());
  };

  return (
    <>
      <GuessResults guesses={guesses} />
      <GuessInput handleAppendGuess={handleAppendGuess} isDisabled={!!result} />
      {result === GAME_STATUS.WON && (
        <GameWonBanner
          numOfGuesses={guesses.length}
          handleRestartGame={handleRestartGame}
        />
      )}
      {result === GAME_STATUS.LOST && (
        <GameLostBanner answer={answer} handleRestartGame={handleRestartGame} />
      )}
      <Keyboard
        correctLetters={correctLetters}
        misplacedLetters={misplacedLetters}
        incorrectLetters={incorrectLetters}
      />
    </>
  );
}

export default Game;
