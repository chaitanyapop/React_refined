import { configureStore, createSlice } from "@reduxjs/toolkit";
import counterReducer from "../../Plain_redux/reducers/counterReducer";

let todoSlice = createSlice({
  name: "todo",
  initialState: { todos: [] },
  reducers: {
    addTodo: (state: any, action: any) => {
      state.todos.push(action.payload);
    },
  },
});

let counterSlice = createSlice({
  name: "count",
  initialState: { count: 0 }, // it is not a compulsion to have initial state in the form of object always
  reducers: {
    increment: (state: any) => {
      state.count = state.count + 1;
    },
    decrement: (state: any) => {
      state.count = state.count - 1;
    },
  },
});

const logger = (store: any) => (next: any) => (action: any) => {
  console.log("Dispatching:", action);
  let result = next(action); // forward the action
  console.log("Next state:", store.getState());
  return result;
};

let store = configureStore({
  reducer: {
    countReducer: counterSlice.reducer,
    todosReducer: todoSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger), // 👈 add here
});
export let { increment, decrement } = counterSlice.actions;
export let { addTodo } = todoSlice.actions;
export default store;

//what if I do not want it to go to the reducer after something is going wrong in middleware which I cheked by doing an api call there to backend

/*
const apiCheckMiddleware = store => next => async action => {
  if (action.type === 'user/login') {
    const response = await fetch('/api/check', { method: 'POST' });

    if (!response.ok) {
      console.error('API check failed, blocking reducer');
      return; // 👈 stop here, action never goes to reducer
    }
  }

  return next(action); // 👈 only forward if check passes
}; */
