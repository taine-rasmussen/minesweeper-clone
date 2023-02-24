import { useState, useEffect } from 'react'
import './game.css';

function App() {

  const [gameboard, setGameboard] = useState([])

  const rows = 10
  const cols = 10


  const createGameboard = () => {
    let game = []
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        game.push([i, j])
      }
    };
    setGameboard(game)
  };

  useEffect(
    () => {
      createGameboard()
    }, []
  );

  return (
    <div className="App">
      <div className='gameboard'>
        {gameboard.map((cell, i) => {
          return (
            <div className='cell' key={cell}>
              {cell}
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default App;
