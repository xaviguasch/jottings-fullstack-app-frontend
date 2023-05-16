import axios from 'axios'

const baseUrl = 'http://localhost:5000/api'

const getAllTodos = async (setTodos) => {
  try {
    const response = await axios.get(baseUrl)

    setTodos(response.data)
  } catch (error) {
    console.log(error)
  }
}

const deleteTodo = async (_id, setTodos) => {
  console.log(_id)
  console.log(setTodos)

  try {
    const response = await axios.delete(`${baseUrl}/${_id}`)

    const secondResponse = await getAllTodos(setTodos)
  } catch (error) {
    console.log(error)
  }
}

export { getAllTodos, deleteTodo }
