import React from 'react';

function Banner({ result, answer, numOfGuesses }) {
  let bannerClass;
  if (result === 'win') {
    bannerClass = 'happy';
  } else if (result === 'lose') {
    bannerClass = 'sad';
  }

  return (
    <div className={`banner ${bannerClass}`}>
      {bannerClass === 'happy' && (
        <p>
          <strong>Congratulations!</strong> Got it in{' '}
          <strong>{numOfGuesses} guesses</strong>.
        </p>
      )}
      {bannerClass === 'sad' && (
        <p>
          Sorry, the correct answer is <strong>{answer}</strong>.
        </p>
      )}
    </div>
  );
}

export default Banner;
