import { useState, useEffect } from 'react'
import './game.css';

const Gameboard = () => {

  const [gameboard, setGameboard] = useState([])
  const rows = 10
  const cols = 10
  const bombs = 20

  const createGameboard = (row, col, bombs) => {
    let game = []
    let bombCount = 0;

    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        game.push({
          value: 0,
          hidden: true,
          position: [row, col],
          neighbours: []
        })
      }
    };

    while (bombCount < bombs) {
      let randomPos = Math.floor(Math.random() * row * col)
      let bombPos;

      if (randomPos < 10) {
        bombPos = [0, randomPos]
      } else {
        bombPos = randomPos.toString().split("").map(Number)
      }
      console.log(bombPos)
      bombCount++
    }


    setGameboard(game)
  };

  useEffect(
    () => {
      createGameboard(rows, cols, bombs)
    }, []
  );

  const handleClick = (cell) => {
    console.log(cell)
  }

  return (
    <div className='gameboard'>
      {gameboard.map((cell, i) => {
        return (
          <div
            key={`${cell.position[0]} - ${i}`}
            onClick={() => handleClick(cell)}
            className='cell'
          >
          </div>
        )
      })}
    </div>
  )
}

export default Gameboard
