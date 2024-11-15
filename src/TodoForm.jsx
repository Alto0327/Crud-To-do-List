import { useState } from "react"

function TodoForm ({ todoList }) {
    const[input, setInput] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        if(input){
            todoList({text: input, id: Date.now() })
            setInput('')
        }
    }

    return(
        <>
            <h1>Todo List</h1>
            <form >
                <input type="text" placeholder="Enter a Task" value={input} onChange={(e)=> setInput(e.target.value)}/>
                <button onClick={handleSubmit}> Add Todo</button>
            </form>

        </>
    )
}

export default TodoForm