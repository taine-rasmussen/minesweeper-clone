import { useState, useEffect } from 'react'
import './game.css';

const Gameboard = () => {

  const [gameboard, setGameboard] = useState([])
  const rows = 10
  const cols = 10

  const createGameboard = () => {
    let game = []
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        game.push({
          value: 0,
          hidden: true,
          position: [i, j],
          neighbours: []
        })
      }
    };
    setGameboard(game)
  };

  useEffect(
    () => {
      createGameboard()
    }, []
  );

  console.log(gameboard)

  return (
    <div className='gameboard'>
      {gameboard.map((cell, i) => {
        return (
          <div className='cell' key={`${cell.position[0]} - ${i}`}>
          </div>
        )
      })}
    </div>
  )
}

export default Gameboard
