import { useState } from "react";

function TodoList({ todo , handleDelete, handleEdit}) {
  const [isEditing, setIsEditing] = useState('')
  const [newText, setNewText] = useState('')
  
  
  const handleEditClick =(id , currentText) =>{
    setIsEditing(id)
    setNewText(currentText)
  }

  const handleSave = (id) => {
    handleEdit(id, newText)
    setIsEditing(null)
    setNewText('')
  }

  return (
    <>
       <div>
        <ul>
          {todo.map((todos) => (
            <div key={todos.id}>
              <li>
                <p>
                    {todos.text}
                </p>
              </li>
              {isEditing === todos.id ? (
                <>
                    
                        <input 
                            type="text"
                            value={newText}
                            onChange={(e) => setNewText(e.target.value)}
                        
                            />
                        <button onClick={() => handleSave(todos.id)}>Save</button>
                        <button onClick={() => setIsEditing(null)}>Cancel</button>
                    
                </>
              ):
              (
                <>
                  <button onClick={() => handleDelete(todos.id)}>Delete</button>
                  <button onClick={() => handleEditClick(todos.id, todos.text)}>Edit</button>
                </>

              )
                  
            }
            </div>
          ))}
        </ul>
      </div>
    </>
  );
}

export default TodoList;
