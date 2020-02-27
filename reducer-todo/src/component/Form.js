import React, { useState, useReducer } from 'react'
import { initialState, reducer } from '../reducers/reducer'
import List from './List'

const Form = () => {
  const [ todo, setTodo ] = useState( '' )
  //useReducer should be in the outermost component
  const [ state, dispatch ] = useReducer( reducer, initialState )

  console.log( state )

  const handleChanges = e => {
    setTodo( e.target.value )
  }

  const handleSubmit = e => {
    e.preventDefault()
    dispatch( { type: 'ADD_TODO', payload: todo })
  }

  const addTodo = e => {
    dispatch( { type: 'ADD_TODO' } )
  }

  const toggleFinished = e => {
    dispatch( { type: 'TOGGLE_FINISHED' } )
  }

 
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
        <button onClick = { handleSubmit }>Add To Do</button>
      </form>
      <List todos = { state.todos } />
    </div>
  )
}
export default Form