import React from 'react'
import './game.css';

const Cell = (props) => {
  const {
    cell: {
      value,
      position
    },
    cell
  } = props;

  const isBomb = value === 1

  const handleClick = () => {
    console.log(cell)
  }


  return (
    <div
      key={position[0]}
      onClick={handleClick}
      className={`cell ${isBomb ? `bomb` : ``}`}
    >
    </div>
  )
}

export default Cell
