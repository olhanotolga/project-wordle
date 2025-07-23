import React from 'react';
import Banner from '../Banner';

function GameLostBanner({ answer }) {
  return (
    <Banner variant='sad'>
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
    </Banner>
  );
}

export default GameLostBanner;
