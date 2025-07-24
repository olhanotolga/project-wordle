import React from 'react';
import { range } from '../../utils';
import { NUM_OF_CHARS } from '../../constants';

function Guess({ guess }) {
  const cells = range(NUM_OF_CHARS);

  return (
    <p className='guess'>
      {cells.map((letterCell) => (
        <span
          className={`cell ${guess ? guess[letterCell].status : ''}`}
          key={letterCell}
        >
          {guess ? guess[letterCell].letter : ''}
        </span>
      ))}
    </p>
  );
}

export default Guess;
