import React, { useState } from 'react';

function GuessInput({ handleAppendGuess }) {
  const [guessAttempt, setGuessAttempt] = useState('');

  const submitHandler = (event) => {
    event.preventDefault();
    handleAppendGuess(guessAttempt);
    console.log('value submitted:', guessAttempt);
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
          minLength={5}
          maxLength={5}
          pattern='[a-zA-Z]{5}'
          title='Should be 5 characters long'
          onChange={(event) => {
            const uppercaseValue = event.target.value.toLocaleUpperCase();
            setGuessAttempt(uppercaseValue);
          }}
        />
      </form>
    </div>
  );
}

export default GuessInput;
