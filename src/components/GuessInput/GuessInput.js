import React, { useState } from 'react';
import { NUM_OF_CHARS } from '../../constants';

function GuessInput({ handleAppendGuess, isDisabled }) {
  const [guessAttempt, setGuessAttempt] = useState('');

  const submitHandler = (event) => {
    event.preventDefault();
    handleAppendGuess(guessAttempt);

    setGuessAttempt('');
  };

  return (
    <div>
      <form className='guess-input-wrapper' onSubmit={submitHandler}>
        <label htmlFor='guess-input'>Enter guess:</label>
        <input
          id='guess-input'
          type='text'
          value={guessAttempt}
          required
          minLength={NUM_OF_CHARS}
          maxLength={NUM_OF_CHARS}
          pattern={`[a-zA-Z]{${NUM_OF_CHARS}}`}
          title={`Should be ${NUM_OF_CHARS} characters long`}
          onChange={(event) => {
            const uppercaseValue = event.target.value.toLocaleUpperCase();
            setGuessAttempt(uppercaseValue);
          }}
          disabled={isDisabled}
        />
      </form>
    </div>
  );
}

export default GuessInput;
