import React, { useReducer } from 'react';
import './App.css';
import { initialState, reducer } from './reducers/reducer'
import Form from './component/Form'
import List from './component/List'

function App() {
  //useReducer should be in the outermost component
  const [ state, dispatch ] = useReducer( reducer, initialState )


  return (
    <div className="App">
      <Form stateProp = { state } dispatchProp = { dispatch }/>
      <List stateProp = { state } dispatchProp = { dispatch }/>
    </div>
  );
}

export default App;
