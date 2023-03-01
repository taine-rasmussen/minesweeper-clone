import { useState, useEffect } from 'react'
import Cell from './Cell'
import './game.css';

const Gameboard = () => {
  const [gameboard, setGameboard] = useState([])
  const rows = 10
  const cols = 10
  const bombs = 30

  const createGameboard = (row, col, bombs) => {
    let game = []
    let bombCount = 0;
    let bombPositions = []

    while (bombCount < bombs) {
      let randomPos = Math.floor(Math.random() * row * col)
      let bombPos;
      if (randomPos < 10) {
        bombPos = [0, randomPos]
      } else {
        bombPos = randomPos.toString().split("").map(Number)
      }
      bombPositions.push(bombPos)
      bombCount++
    }

    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        let isBomb;
        bombPositions.forEach((pos) => {
          if (JSON.stringify(pos) === JSON.stringify([row, col])) {
            return isBomb = true
          };
        })
        game.push({
          value: isBomb ? 1 : 0,
          hidden: true,
          position: [row, col],
          neighbours: [],
          flagged: false
        })
      }
    };

    setGameboard(game)
  };

  useEffect(
    () => {
      createGameboard(rows, cols, bombs)
    }, []
  );

  return (
    <div className='gameboard'>
      {gameboard.map((cell) => (
        <Cell
          cell={cell}
        />
      ))}
    </div >
  )
}

export default Gameboard
