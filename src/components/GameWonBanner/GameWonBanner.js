import React from 'react';
import Banner from '../Banner';
import RestartButton from '../RestartButton';

function GameWonBanner({ numOfGuesses, handleRestartGame }) {
  return (
    <Banner variant='happy'>
      <p>
        <strong>Congratulations!</strong> Got it in{' '}
        <strong>
          {numOfGuesses === 1 ? '1 guess' : `${numOfGuesses} guesses`}
        </strong>
        .
      </p>
      <RestartButton callbackFn={handleRestartGame} />
    </Banner>
  );
}

export default GameWonBanner;
