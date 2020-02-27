import React, { useReducer } from 'react'
import { initialState, reducer } from '../reducers/reducer'


const Todo = (props) => {
  const [ state, dispatch ] = useReducer( reducer, initialState )
  const toggleFinished = e => {
    dispatch( { type: 'TOGGLE_FINISHED',  payload: props.id } )
  }
  return (
    <p 
      onClick = { toggleFinished }
    >{ props.todo.item }</p>
  )
}
export default Todo