import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Child() {
  const dispatch = useDispatch();
  const count = useSelector((state: any) => state.counter.count);
  const todos = useSelector((state: any) => state.todo.todos);

  const [todoInput, setTodoInput] = useState("");
  return (
    <div style={{ padding: "20px" }}>
      <h1>Redux combineReducers Example</h1>

      {/* Counter */}
      <h2>Counter: {count}</h2>
      <button onClick={() => dispatch({ type: "post/increment" })}>+</button>
      <button onClick={() => dispatch({ type: "post/decrement" })}>-</button>

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
            dispatch({ type: "post/addTodo", payload: todoInput });
            setTodoInput("");
          }
        }}
      >
        Add Todo
      </button>

      <ul>
        {todos?.map((todo: any, index: any) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}
