import React from 'react';

function Button({ label, callbackFn, className }) {
  return (
    <button className={className} onClick={callbackFn}>
      {label}
    </button>
  );
}

export default Button;
