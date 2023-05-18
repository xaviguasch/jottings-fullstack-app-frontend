import React, { useState } from 'react'
import classes from './ControlBoard.module.css'

const ControlBoard = ({ pendingTodosNum, setModeHandler, onClearCompeted }) => {
  return (
    <div className={classes.ControlBoard}>
      <p>{pendingTodosNum} items left</p>
      <button onClick={() => setModeHandler('all')}>All</button>
      <button onClick={() => setModeHandler('active')}>Active</button>
      <button onClick={() => setModeHandler('completed')}>Completed</button>
      <button onClick={() => onClearCompeted()}>Clear Completed</button>
    </div>
  )
}

export default ControlBoard
