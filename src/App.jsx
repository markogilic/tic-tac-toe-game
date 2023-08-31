import { useState } from 'react';
import Board from './component/Board';

import './App.css';

function App() {
  const [xIsNext, setXIsNext] = useState(false);
  const [winner, setWinner] = useState('');
  return (
    <>
      {/* head component logo,turn and reste button  @todo */}
      <Board xIsNext={xIsNext} setXIsNext={setXIsNext} setWinner={setWinner} />

      {(() => {
        switch (winner) {
          case 'X':
            return (
              <div className="winner-message">Player {winner} is winner</div>
            );
            break;
          case 'O':
            return (
              <div className="winner-message">Player {winner} is winner</div>
            );
            break;
          case 'Draw':
            return <div className="winner-message">Draw</div>;
        }
      })()}
    </>
  );
}

export default App;
