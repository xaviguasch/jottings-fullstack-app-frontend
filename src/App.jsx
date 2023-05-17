import { useState, useEffect } from 'react'

import './App.css'

import { getAllTodos, deleteTodo, editTodo } from './utils/apiTodo'

import CreateNewTodo from './components/CreateNewTodo'
import Todo from './components/Todo'

function App() {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    getAllTodos(setTodos)
  }, [])

  return (
    <>
      <h1>Jottings App</h1>
      <CreateNewTodo />
      {todos &&
        todos.map((todo) => {
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
    </>
  )
}

export default App
