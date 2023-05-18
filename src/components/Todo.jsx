import React, { useState, useEffect } from 'react'
import classes from './Todo.module.css'

const Todo = ({
  todoText,
  todoIsCompleted,
  deleteTodoHandler,
  editTodoHandler,
  id,
  setTodos,
}) => {
  const [isCompleted, setIsCompleted] = useState(todoIsCompleted || false)

  useEffect(() => {
    editTodoHandler(id, isCompleted, setTodos)
  }, [isCompleted])

  useEffect(() => {
    console.log('inside Todo useEffect')
    console.log(todoIsCompleted)
    console.log(todoText)
  }, [])

  const markAsCompleteHandler = (e) => {
    setIsCompleted(e.target.checked)
  }
  return (
    <div className={classes.Todo}>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type='checkbox'
          id='is-completed-checkbox'
          checked={isCompleted}
          onChange={(e) => markAsCompleteHandler(e)}
        />
        <label htmlFor='is-completed-checkbox'>
          <h2>{todoText}</h2>
          <span>{isCompleted ? 'completed' : 'not completed'}</span>
        </label>
        <button onClick={deleteTodoHandler}>Delete</button>
      </form>
      <hr />
    </div>
  )
}

export default Todo
