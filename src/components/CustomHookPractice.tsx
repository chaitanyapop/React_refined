import { useState } from "react";
import useLocalStorage from "../custom hooks/useLocalStorage";

export default function CustomHookPractice() {
  //let [name, setName] = useState("");
  let [name, setName] = useLocalStorage("name", "");
  function handleInput(e: any) {
    setName(e);
  }
  return (
    <div>
      <p>Practice custom hook with useState and useEffect</p>
      <label>Enter name:</label>
      <input
        type="text"
        value={name}
        placeholder="Enter your name"
        onChange={(e) => {
          handleInput(e.target.value);
        }}
      ></input>
      <p>{name}</p>
    </div>
  );
}
