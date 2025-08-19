import { useState } from "react";

function BuggyComponent() {
  let [trigger, setTrigger] = useState(false);
  if (trigger) {
    throw new Error("There is an issue");
  }
  return (
    <div>
      <p>This is our normal component</p>
      <button
        onClick={() => {
          setTrigger(true);
        }}
      >
        Click to throw an error
      </button>
    </div>
  );
}

export default BuggyComponent;
