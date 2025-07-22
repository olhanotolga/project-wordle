import React from 'react';
import { range } from '../../utils';
import { NUM_OF_CHARS } from '../../constants';
import { checkGuess } from '../../game-helpers';
import { answer } from '../Game';

function Guess({ guess }) {
  const cells = range(NUM_OF_CHARS);

  const validatedCharacters = checkGuess(guess, answer);

  return (
    <p className='guess'>
      {cells.map((letterCell) => (
        <span
          className={`cell ${
            validatedCharacters ? validatedCharacters[letterCell].status : ''
          }`}
          key={letterCell}
        >
          {guess ? guess[letterCell] : ''}
        </span>
      ))}
    </p>
  );
}

export default Guess;
