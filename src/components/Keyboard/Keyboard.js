import React from 'react';
import {
  KEYBOARD_CHARS_UPPER_ROW,
  KEYBOARD_CHARS_MIDDLE_ROW,
  KEYBOARD_CHARS_LOWER_ROW,
} from '../../constants';
import Key from '../Key';

function Keyboard({ correctLetters, misplacedLetters, incorrectLetters }) {
  const getStatus = (char) => {
    if (correctLetters.has(char)) {
      return 'correct';
    } else if (misplacedLetters.has(char)) {
      return 'misplaced';
    } else if (incorrectLetters.has(char)) {
      return 'incorrect';
    } else {
      return 'unused';
    }
  };

  return (
    <div className='keyboard'>
      <div className='keyboard-row'>
        {KEYBOARD_CHARS_UPPER_ROW.split('').map((char) => (
          <Key key={char} char={char} status={getStatus(char)} />
        ))}
      </div>
      <div className='keyboard-row'>
        {KEYBOARD_CHARS_MIDDLE_ROW.split('').map((char) => (
          <Key key={char} char={char} status={getStatus(char)} />
        ))}
      </div>
      <div className='keyboard-row'>
        {KEYBOARD_CHARS_LOWER_ROW.split('').map((char) => (
          <Key key={char} char={char} status={getStatus(char)} />
        ))}
      </div>
    </div>
  );
}

export default Keyboard;
