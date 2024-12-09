import React, { useState, useEffect } from 'react'
import { useDispatch }  from 'react-redux' 
import { addTodo, update } from '../features/todo/todoSlice'

function AddTodo({ currentTodo, setCurrentTodo }) {        
  
  const {id, text} = currentTodo   
  
  const [input, setInput] = useState('')
  
  const dispatch = useDispatch()

  // to load the edit text when clicked on edit button 
  useEffect(() => {
    if (text) {
      setInput(text)
    }
  }, [text])

  // for Edit and Add todo
  const addSaveTodoHandler = (e) => {
    
    e.preventDefault()

    if (id && text) {
      dispatch(update({id, input}))
      //setCurrentTodo('')
    }else {
      dispatch(addTodo(input))
    }
    setInput('')
  }

return (

  <form onSubmit={addSaveTodoHandler} className="space-x-3 mt-12">
  
    <input type="text" className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 
    focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 
    transition-colors duration-200 ease-in-out" placeholder="Enter a Todo..." value={input} 
    onChange={(e) => setInput(e.target.value)}/>
    
    <button type="submit" className={`text-white border-0 py-2 px-6 focus:outline-none rounded text-lg
    ${text ? 'bg-orange-500 hover:bg-orange-600' : 'bg-indigo-500 hover:bg-indigo-600'}`}>
      {text ? 'Update Todo' : 'Add Todo'}
    </button>

  </form>
)
}

export default AddTodo;
