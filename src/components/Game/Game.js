import React, { useState } from 'react';

import { sample } from '../../utils';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';
import Banner from '../Banner';

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

  let bannerVariant;
  if (result === 'win') {
    bannerVariant = 'happy';
  } else if (result === 'lose') {
    bannerVariant = 'sad';
  }

  const happyBannerContents = (
    <p>
      <strong>Congratulations!</strong> Got it in{' '}
      <strong>
        {guesses.length} {`${guesses.length === 1 ? 'guess' : 'guesses'}`}
      </strong>
      .
    </p>
  );

  const sadBannerContents = (
    <p>
      Sorry, the correct answer is <strong>{answer}</strong>.
    </p>
  );

  return (
    <>
      <GuessResults guesses={guesses} answer={answer} />
      <GuessInput handleAppendGuess={handleAppendGuess} isDisabled={!!result} />
      {result && (
        <Banner variant={bannerVariant}>
          {bannerVariant === 'happy' && happyBannerContents}
          {bannerVariant === 'sad' && sadBannerContents}
        </Banner>
      )}
    </>
  );
}

export default Game;
