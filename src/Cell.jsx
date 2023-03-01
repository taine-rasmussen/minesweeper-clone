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

  window.oncontextmenu = function () {
    return false;
  }

  const handleClick = (e) => {
    console.log(cell, e)
    if (flagged) return;
  }

  return (
    <div
      key={position[0]}
      onMouseDown={(e) => handleClick(e)}
      className={`cell ${isBomb ? `bomb` : ``}`}
    >
    </div>
  )
}

export default Cell
