import React, { useState } from 'react'



const Form = ({stateProp, dispatchProp}) => {
  const [ todo, setTodo ] = useState( '' )

  console.log('Props: ', stateProp )
  console.log('From Todo: ', todo )

  const handleChanges = e => {
    setTodo( e.target.value )
  }

  const addTodo = e => {
    e.preventDefault()
    dispatchProp( { type: 'ADD_TODO', payload: todo } )
  }

  // const toggleFinished = e => {
  //   dispatchProp( { type: 'TOGGLE_FINISHED' } )
  // }

 
  return (
    <div>
      <div>
        <h1>To Do Today</h1>
      </div>
      <form>
        <input
          className = 'todo'
          placeholder = 'What to do?'
          type = 'text'
          name = 'todo'
          value = { todo }
          onChange = { handleChanges }
        />
        <button onClick = { addTodo }>Add To Do</button>
      </form>
     
    </div>
  )
}
export default Form