import React from 'react';

function Key({ char, status }) {
  return <span className={`key ${status}`}>{char}</span>;
}

export default Key;
