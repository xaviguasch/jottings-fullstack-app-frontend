import { useState, useEffect } from 'react'

import './App.css'

import {
  getAllTodos,
  deleteTodo,
  editTodo,
  addNewTodo,
  deleteCompleted,
} from './utils/apiTodo'

import CreateNewTodo from './components/CreateNewTodo'
import Todo from './components/Todo'
import ControlBoard from './components/ControlBoard'

function App() {
  const [todos, setTodos] = useState([])
  const [mode, setMode] = useState('all')

  useEffect(() => {
    getAllTodos(setTodos)
  }, [])

  const completedTodos = todos.filter((todo) => todo.isCompleted)
  const uncompletedTodos = todos.filter((todo) => !todo.isCompleted)

  const clearCompletedHandler = () => {
    deleteCompleted(setTodos)
  }

  let filteredTodos = []

  if (mode === 'all') {
    filteredTodos = todos
  } else if (mode === 'active') {
    filteredTodos = uncompletedTodos
  } else if (mode === 'completed') {
    filteredTodos = completedTodos
  }

  return (
    <>
      <h1>Jottings App</h1>
      <CreateNewTodo setTodos={setTodos} addNewTodoHandler={addNewTodo} />
      {todos &&
        filteredTodos.map((todo) => {
          return (
            <Todo
              key={todo._id}
              todoText={todo.text}
              todoIsCompleted={todo.isCompleted}
              deleteTodoHandler={() => deleteTodo(todo._id, setTodos)}
              editTodoHandler={editTodo}
              setTodos={setTodos}
              id={todo._id}
            />
          )
        })}
      <ControlBoard
        pendingTodosNum={uncompletedTodos.length}
        setModeHandler={setMode}
        onClearCompeted={clearCompletedHandler}
      />
    </>
  )
}

export default App
