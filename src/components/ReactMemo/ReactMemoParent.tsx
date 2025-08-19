import { useState } from "react";
import ReactMemo from "./ReactMemo";

export default function ReactMemoParent() {
  let [count, setCount] = useState(0);
  const user = { name: "Chaitanya", age: 25 };
  return (
    <div>
      <ReactMemo user={user}></ReactMemo>
      <button
        onClick={() => {
          setCount((count) => count + 1);
        }}
      >
        Click counter
      </button>
    </div>
  );
}
