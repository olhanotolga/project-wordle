import React from 'react';
import { range } from '../../utils';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import Guess from '../Guess';

function GuessResults({ guesses, answer }) {
  const rows = range(NUM_OF_GUESSES_ALLOWED);
  console.log({ rows, guesses });

  return (
    <div className='guess-results'>
      {rows.map((row, index) => (
        <Guess key={row} guess={guesses[index]} answer={answer} />
      ))}
    </div>
  );
}

export default GuessResults;
