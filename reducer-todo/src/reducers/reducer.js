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
      return { ...state, todos: [ ...state.todos, {item: action.payload, completed: false, id: new Date()} ]}
    case 'TOGGLE_FINISHED':
      return { ...state, }
    case 'CLEAR_FINISHED':
      return { ...state, }
    default:
      return state
  }
}

