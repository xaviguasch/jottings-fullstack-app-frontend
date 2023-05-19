import axios from 'axios'

const baseUrl = 'https://dull-red-gosling-wrap.cyclic.app/api'

const getAllTodos = async (setTodos) => {
  try {
    const response = await axios.get(baseUrl)

    setTodos(response.data)
  } catch (error) {
    console.log(error)
  }
}

const addNewTodo = async (newTodo, setTodos) => {
  try {
    const response = await axios.post(`${baseUrl}/save`, { text: newTodo })

    const secondResponse = await getAllTodos(setTodos)
  } catch (error) {
    console.log(error)
  }
}

const deleteTodo = async (_id, setTodos) => {
  try {
    const response = await axios.delete(`${baseUrl}/${_id}`)

    const secondResponse = await getAllTodos(setTodos)
  } catch (error) {
    console.log(error)
  }
}

const deleteCompleted = async (setTodos) => {
  try {
    const response = await axios.delete(`${baseUrl}/clear-completed`)
    const secondResponse = await getAllTodos(setTodos)
  } catch (error) {
    console.log(error)
  }
}

const editTodo = async (id, isCompleted, setTodos) => {
  try {
    const response = await axios.put(`${baseUrl}/${id}`, { isCompleted })

    const secondResponse = await getAllTodos(setTodos)
  } catch (error) {
    console.log(error)
  }
}

export { getAllTodos, addNewTodo, deleteTodo, editTodo, deleteCompleted }
