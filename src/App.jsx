import { useState } from 'react';
import Board from './component/Board';

import './App.css';

function App() {
  const [xIsNext, setXIsNext] = useState(true);
  return (
    <>
      {/* head component logo,turn and reste button  @todo */}
      <Board xIsNext={xIsNext} setXIsNext={setXIsNext} />
    </>
  );
}

export default App;
