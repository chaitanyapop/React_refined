import { useCallback, useState } from "react";
import UseCallbackChild from "./UseCallbackChild";

function UseCallbackParent() {
  let [info, setInfo] = useState({ name: "chaitanya", age: "25" });
  let [count, setCount] = useState(0);
  let memoizedFunc = useCallback(() => {
    console.log("useCallback executing");
    setInfo({ name: "ABC", age: "30" });
  }, []); // want to execute only once no need to create any new array
  return (
    <div>
      <p>
        Your info is: name - :{info.name}, age - :{info.age}
      </p>
      <p>Counter value is: {count}</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click for counter inc
      </button>
      <UseCallbackChild memoizedFunc={memoizedFunc}></UseCallbackChild>
    </div>
  );
}
export default UseCallbackParent;
