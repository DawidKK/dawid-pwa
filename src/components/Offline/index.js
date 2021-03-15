import React, { useState } from 'react'
import Alert from 'react-bootstrap/Alert'

const Offline = props => {
  const [todo, setTodo] = useState('')
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('storedTodos')))

  const handleSubmit = e => {
    e.preventDefault()
    const storedTodos = JSON.parse(localStorage.getItem('storedTodos')) || []
    const todosToStore = JSON.stringify([...storedTodos, todo])
    localStorage.setItem('storedTodos', todosToStore)
    setTodos(JSON.parse(todosToStore))
    setTodo('')
  }

  const handleChange = e => {
    setTodo(e.target.value)
  }

  const handleRemove = () => {
    localStorage.removeItem('storedTodos')
    setTodos(null)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input value={todo} onChange={handleChange} />
        <button>Submit</button>
      </form>
      {todos === null ? <Alert variant="success">No todos 🎉 🎉 🎉</Alert> : (
        <>
          <ul>
            {todos.map((todo, index) => <li key={index}>{todo}</li>)}
          </ul>
          <button onClick={handleRemove}>Clear all todo</button>
        </>
      )}
    </>
  )
}

export default Offline
