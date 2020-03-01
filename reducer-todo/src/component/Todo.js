import React from 'react'



const Todo = ( { dispatchProp, todo}) => {
  const toggleFinished = ( id ) => {
    dispatchProp( { type: 'TOGGLE_FINISHED', payload: id} )
  }
  return (
    <p 
      onClick = { () => toggleFinished(todo.id) }
      className = {todo.completed ? 'finished' : '' }
    >{ todo.item }</p>
  )
}
export default Todo