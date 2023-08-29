import React, { useState } from 'react';
import Square from './Square';

function Board({ xIsNext, setXIsNext }) {
  const [square, setSquare] = useState(Array(9).fill(null));
  function handleClick(idx) {
    const nextSquare = square.slice();
    if (square[idx]) {
      return;
    }
    if (xIsNext) {
      nextSquare[idx] = 'X';
    } else {
      nextSquare[idx] = 'O';
    }
    setSquare(nextSquare);
    setXIsNext(!xIsNext);
  }
  console.log(square);
  return (
    <div className="board">
      {square.map((value, idx) => (
        <Square
          key={idx}
          idx={idx}
          value={square[idx]}
          onSquareClick={() => handleClick(idx)}
        />
      ))}
      ;
    </div>
  );
}

export default Board;
