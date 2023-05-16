import axios from 'axios'

const baseUrl = 'http://localhost:5000/api'

const getAllTodos = async (setTodos) => {
  const response = await axios.get(baseUrl)

  setTodos(response.data)
}

export { getAllTodos }
