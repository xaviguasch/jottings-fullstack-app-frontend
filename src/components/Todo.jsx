import React from 'react'
import classes from './Todo.module.css'

const Todo = ({ todoText, todoIsCompleted, deleteTodoHandler }) => {
  return (
    <div className={classes.Todo}>
      <h2>{todoText}</h2>
      <span>{todoIsCompleted ? 'completed' : 'not completed'}</span>
      <button onClick={deleteTodoHandler}>Delete</button>
    </div>
  )
}

export default Todo
