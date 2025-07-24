import React from 'react';
import Banner from '../Banner';
import RestartButton from '../RestartButton';

function GameLostBanner({ answer, handleRestartGame }) {
  return (
    <Banner variant='sad'>
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
      <RestartButton callbackFn={handleRestartGame} />
    </Banner>
  );
}

export default GameLostBanner;
