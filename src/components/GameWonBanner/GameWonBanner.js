import React from 'react';
import Banner from '../Banner';

function GameWonBanner({ numOfGuesses }) {
  return (
    <Banner variant='happy'>
      <p>
        <strong>Congratulations!</strong> Got it in{' '}
        <strong>
          {numOfGuesses === 1 ? '1 guess' : `${numOfGuesses} guesses`}
        </strong>
        .
      </p>
    </Banner>
  );
}

export default GameWonBanner;
