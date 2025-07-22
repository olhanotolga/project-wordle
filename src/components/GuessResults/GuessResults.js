import React from 'react';
import { range } from '../../utils';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import Guess from '../Guess';

function GuessResults({ guesses }) {
  const rows = range(NUM_OF_GUESSES_ALLOWED);
  console.log({ rows, guesses });

  return (
    <div className='guess-results'>
      {rows.map((row, index) => (
        <Guess key={row} guess={guesses[index]} />
      ))}
    </div>
  );
}

export default GuessResults;
