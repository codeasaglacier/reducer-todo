import React from 'react'
import Todo from './Todo'

const List = ({stateProp, dispatchProp}) => {
  console.log('State: ', stateProp.todos)

  const clearFinished = e => {
    dispatchProp( { type: 'CLEAR_FINISHED' } )
  }
 

  return (
    <div>
      <div>
        { stateProp.todos.map( todo => {
          return <Todo 
                  todo = { todo } 
                  dispatchProp = { dispatchProp }
                 
                 />
        })}
      </div>
      <button onClick = { clearFinished }> Clear Finished</button>
    </div>
  )
}
export default List