import { useState } from 'react'
import './App.css'
import TodoForm from './TodoForm'
import TodoList from './TodoList'

function App() {
  const [todo, setTodo] = useState([])

  const todoList = (todos) => {
    setTodo([...todo, todos])
  }
  const handleDelete = (id) => {
    setTodo(todo.filter((todos) => todos.id !== id))
  };

  const handleEdit = (id, newText) => {
    setTodo(todo.map((todos) => todos.id == id ? {...todos, text: newText} : todos))
  }

  return (
    <>
      <TodoForm todoList ={todoList} />
      <TodoList todo={todo} handleDelete={handleDelete} handleEdit={handleEdit}/>
    </>
  )
}

export default App
