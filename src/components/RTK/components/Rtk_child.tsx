import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, addTodo } from "../store/store";

export default function Rtk_child() {
  const dispatch = useDispatch();
  const count = useSelector((state: any) => state.countReducer.count);
  const todos = useSelector((state: any) => state.todosReducer.todos);
  const [todoInput, setTodoInput] = useState("");

  return (
    <div style={{ padding: "20px" }}>
      <h1>Redux Toolkit Example</h1>

      {/* Counter */}
      <h2>Counter: {count}</h2>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>

      <hr />

      {/* Todos */}
      <h2>Todos</h2>
      <input
        value={todoInput}
        onChange={(e) => setTodoInput(e.target.value)}
        placeholder="Enter todo"
      />
      <button
        onClick={() => {
          if (todoInput.trim()) {
            dispatch(addTodo<any>(todoInput));
            setTodoInput("");
          }
        }}
      >
        Add Todo
      </button>

      <ul>
        {todos.map((todo: any, index: any) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}
