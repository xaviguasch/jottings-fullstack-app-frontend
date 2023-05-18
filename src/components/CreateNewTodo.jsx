import React, { useState } from 'react'

import classes from './CreateNewTodo.module.css'

const CreateNewTodo = ({ setTodos, addNewTodoHandler }) => {
  const [newTodo, setNewTodo] = useState('')

  const addTodoHandler = (e) => {
    e.preventDefault()

    addNewTodoHandler(newTodo, setTodos)

    setNewTodo('')
  }

  return (
    <div className={classes.CreateNewTodo}>
      <form onSubmit={addTodoHandler}>
        <label htmlFor='newTodo'>
          <input
            type='text'
            id='newTodo'
            placeholder='Create a new todo'
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
          />
        </label>
      </form>
    </div>
  )
}

export default CreateNewTodo
