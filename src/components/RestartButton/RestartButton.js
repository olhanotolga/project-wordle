import React from 'react';
import Button from '../Button';

function RestartButton({ callbackFn }) {
  return (
    <Button
      className='restart-button'
      callbackFn={callbackFn}
      label='RESTART'
    />
  );
}

export default RestartButton;
