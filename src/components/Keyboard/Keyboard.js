import React from 'react';
import {
  KEYBOARD_CHARS_UPPER_ROW,
  KEYBOARD_CHARS_MIDDLE_ROW,
  KEYBOARD_CHARS_LOWER_ROW,
} from '../../constants';
import Key from '../Key';

function Keyboard() {
  return (
    <div className='keyboard'>
      <div className='keyboard-row'>
        {KEYBOARD_CHARS_UPPER_ROW.split('').map((char) => (
          <Key key={char} char={char} />
        ))}
      </div>
      <div className='keyboard-row'>
        {KEYBOARD_CHARS_MIDDLE_ROW.split('').map((char) => (
          <Key key={char} char={char} />
        ))}
      </div>
      <div className='keyboard-row'>
        {KEYBOARD_CHARS_LOWER_ROW.split('').map((char) => (
          <Key key={char} char={char} />
        ))}
      </div>
    </div>
  );
}

export default Keyboard;
