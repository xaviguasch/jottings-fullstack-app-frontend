import { useState, useEffect } from 'react'

import './App.css'

import { getAllTodos } from './utils/apiTodo'

import Search from './components/Search'
import Todo from './components/Todo'

function App() {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    getAllTodos(setTodos)
  }, [])

  return (
    <>
      <h1>Jottings App</h1>
      <Search />
      {todos.map((todo) => {
        return (
          <Todo
            key={todo._id}
            todoText={todo.text}
            todoIsCompleted={todo.todoIsCompleted}
          />
        )
      })}
    </>
  )
}

export default App
