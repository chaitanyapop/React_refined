let initialState = { todos: [] };
export default function todoReducer(state: any = initialState, action: any) {
  if (action.type == "post/addTodo") {
    state = { ...state, todos: [...state.todos, action.payload] };
    return state;
  } else {
    return state;
  }
}
