import React from 'react'
import './game.css';

const Cell = (props) => {
  const {
    cell: {
      value,
      position,
      flagged
    },
    cell
  } = props;

  const isBomb = value === 1

  const handleClick = () => {
    if (flagged) return;
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
