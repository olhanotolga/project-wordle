import React from 'react';

function GuessResults({ guesses }) {
  return (
    <div class='guess-results'>
      {guesses.map(({ id, label }) => (
        <p class='guess' key={id}>
          {label}
        </p>
      ))}
    </div>
  );
}

export default GuessResults;
