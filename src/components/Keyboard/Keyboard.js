import React from 'react';
import {
  KEYBOARD_CHARS_UPPER_ROW,
  KEYBOARD_CHARS_MIDDLE_ROW,
  KEYBOARD_CHARS_LOWER_ROW,
  CHARACTER_STATUS,
} from '../../constants';
import Key from '../Key';

function Keyboard({ correctLetters, misplacedLetters, incorrectLetters }) {
  const getStatus = (char) => {
    if (correctLetters.has(char)) {
      return CHARACTER_STATUS.CORRECT;
    } else if (misplacedLetters.has(char)) {
      return CHARACTER_STATUS.MISPLACED;
    } else if (incorrectLetters.has(char)) {
      return CHARACTER_STATUS.INCORRECT;
    } else {
      return CHARACTER_STATUS.UNUSED;
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
