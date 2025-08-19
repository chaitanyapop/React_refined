let initialState = { count: 0 };
export default function counterReducer(state: any = initialState, action: any) {
  if (action.type == "post/increment") {
    state = { ...state, count: state.count + 1 };
    return state;
  } else if (action.type == "post/decrement") {
    state = { ...state, count: state.count - 1 };
    return state;
  } else {
    return state;
  }
}
