import React, { useState } from 'react';
import Square from './Square';

function Board({ xIsNext, setXIsNext, setWinner }) {
  const [square, setSquare] = useState(Array(9).fill(null));
  const [selectionXPlayer, setSelectionXPLayer] = useState([]);
  const [selectionOPlayer, setSelectionOPLayer] = useState([]);

  const winningCombination = [
    [0, 1, 2], // 1st row
    [3, 4, 5], // 2nd row
    [6, 7, 8], // 3rd row
    [0, 3, 6], // 1st column
    [1, 4, 7], // 2nd column
    [2, 5, 8], // 3rd column
    [0, 4, 8], // 1st diagonal
    [2, 4, 6], // 2nd diagonal
  ];
  function compareArray(arr1, arr2) {
    const newArrya = arr1.filter((value) => arr2.includes(value));
    if (newArrya.length === 3) {
      return true;
    } else {
      return false;
    }
  }
  function isDraw(arr) {
    return arr.every((value) => value !== null);
  }

  function chekWinner(playerArray, mark) {
    const winner = winningCombination.filter((value) => {
      if (compareArray(value, playerArray)) {
        setWinner(mark);
      }
    });
  }

  function handleClick(idx) {
    const nextSquare = square.slice();

    if (square[idx]) {
      return;
    }
    if (xIsNext) {
      nextSquare[idx] = 'X';

      selectionXPlayer.push(idx);
      selectionXPlayer.sort();
      chekWinner(selectionXPlayer, 'X');
    } else {
      nextSquare[idx] = 'O';

      selectionOPlayer.push(idx);
      selectionOPlayer.sort();
      chekWinner(selectionOPlayer, 'O');
    }
    setSquare(nextSquare);
    setXIsNext(!xIsNext);
  }
  console.log(square);
  console.log(isDraw(square));
  console.log('X', selectionXPlayer, 'O', selectionOPlayer);
  // console.log(compareArray(arrayOne, arrayTwo));
  if (isDraw(square)) {
    setWinner('Draw');
  }
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
