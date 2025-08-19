import { createContext, useState } from "react";

interface myName {
  name: string;
  setName: any;
}

export const MyContext = createContext<myName>({
  name: "chaitanya",
  setName: () => {},
});

export default function Context(props: any) {
  let [name, setName] = useState("chaitanya");

  return (
    <MyContext.Provider value={{ name, setName }}>
      {props.children}
    </MyContext.Provider>
  );
}
