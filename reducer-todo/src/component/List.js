import React, { useState, useReducer } from 'react'
import { initialState, reducer } from '../reducers/reducer'
import Todo from './Todo'

const List = props => {
  //useReducer should be in the outermost component
  const [ state, dispatch ] = useReducer( reducer, initialState )

  console.log('State: ', state.todos)

  const clearFinished = e => {
    dispatch( { type: 'CLEAR_FINISHED' } )
  }


  return (
    <div>
      <div>
        { props.todos.map( todo => {
          return <Todo todo = { todo } />
        })}
      </div>
      <button onClick = { clearFinished }> Clear Finished</button>
    </div>
  )
}
export default List