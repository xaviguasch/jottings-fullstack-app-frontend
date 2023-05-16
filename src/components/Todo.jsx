import React from 'react'
import classes from './Todo.module.css'

const Todo = ({ todoText, todoIsCompleted }) => {
  return (
    <div>
      <h2>{todoText}</h2>
      <span>{todoIsCompleted ? 'completed' : 'not completed'}</span>
    </div>
  )
}

export default Todo
