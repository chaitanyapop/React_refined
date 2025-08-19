import { useContext } from "react";
import Context, { MyContext } from "./Context";

export default function ContextApiChildTwo() {
  let nameContext = useContext(MyContext);

  return (
    <div>
      <p>My name is {nameContext.name}</p>
      <button
        onClick={() => {
          nameContext.setName("Parandkar");
        }}
      >
        Change Name
      </button>
    </div>
  );
}
