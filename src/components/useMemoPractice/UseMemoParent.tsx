import { useMemo, useState } from "react";
import UseMemoChild from "./UseMemoChild";

function UseMemoParent() {
  let [count, setCount] = useState(0);
  let user = useMemo(() => {
    return { name: "chaitanya", age: "25" };
  }, []);
  return (
    <div>
      <p>This is parent and your info is</p>
      <UseMemoChild user={user}></UseMemoChild>
      <p>The counter value is {count}</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click me
      </button>
    </div>
  );
}
export default UseMemoParent;
