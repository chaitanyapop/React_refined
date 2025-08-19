import { useEffect, useState } from "react";
import Main from "./Main";

export default function Comp1() {
  let [name, setName] = useState("chaitanya");
  let [age, setAge] = useState("25");
  return (
    <div>
      <Main name={name} age={age}></Main>
      <button
        onClick={() => {
          setName("ABC");
          setAge("29");
        }}
      ></button>
    </div>
  );
}
