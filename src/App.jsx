import { useState, useEffect } from 'react'

import './App.css'

import { getAllTodos } from './utils/apiTodo'

import Search from './components/Search'

function App() {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    getAllTodos(setTodos)
  }, [])

  return (
    <>
      <h1>Jottings App</h1>
      <Search />
    </>
  )
}

export default App
