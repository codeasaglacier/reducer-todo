export const initialState = {
todos: [
  {
    item: 'Get Coffee',
    completed: false,
    id: 0
  },
  {
    item: 'Meditate',
    completed: false,
    id: 1
  },
  {
    item: 'Workout',
    completed: false,
    id: 2
  },
  {
    item: 'Have Breakfast',
    completed: false,
    id: 3
  },
  {
    item: 'Write Code',
    completed: false,
    id: 4
  }
]

}

export const reducer = ( state, action ) => {
  switch( action.type ) {
    case 'ADD_TODO':
      return { ...state, 
        todos: [ ...state.todos, 
          {item: action.payload, completed: false, id: new Date()} 
        ]}


    case 'TOGGLE_FINISHED':
      let newArray = [...state.todos];
      console.log( 'NewArray: ', newArray)
      let toDoId = state.todos.findIndex(todo => {
             return todo.id === action.payload;
            });
            console.log('toDoId:', toDoId);
      newArray[toDoId].completed = !newArray[toDoId].completed;
      return { ...state, todos: newArray };


    case 'CLEAR_FINISHED':
      const stillTodo = state.todos.filter((todo) => {
        return todo.completed === false
      })
      return { ...state, todos: stillTodo }

    default:
      return state
  }
}

