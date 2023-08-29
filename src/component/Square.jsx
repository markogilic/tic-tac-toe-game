import React, { useState } from 'react';
import xPlayer from '../assets/icon-x.svg';
import oPlayer from '../assets/icon-o.svg';

function Square({ idx, value, onSquareClick }) {
  return (
    <div className="square" id={idx} onClick={onSquareClick}>
      {(() => {
        switch (value) {
          case 'X':
            return <img src={xPlayer} alt="xPlayer" />;
            break;
          case 'O':
            return <img src={oPlayer} alt="oPlayer" />;
            break;
        }
      })()}
    </div>
  );
}

export default Square;
