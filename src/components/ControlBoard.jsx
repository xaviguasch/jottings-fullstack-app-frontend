import React, { useState } from 'react'
import classes from './ControlBoard.module.css'

const ControlBoard = ({ pendingTodosNum }) => {
  return (
    <div className={classes.ControlBoard}>
      <p>{pendingTodosNum} items left</p>
    </div>
  )
}

export default ControlBoard
