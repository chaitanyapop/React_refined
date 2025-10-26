import React, { useState } from "react";
import "./Composition_parent.css";
export default function Composition_parent(props: any) {
  let [session, setSession] = useState(5);

  function endSession() {
    setSession(0);
  }
  let childElement = props.children.map((child: any) => {
    return React.cloneElement(child, { session });
  }); // this session value is sent to all individual childs like header footer body as a prop
  return (
    <div className="composition_container">
      {childElement}
      {/* childElement is an array of react components and array of react components
      are treated as individual component internally by react */}
      <button onClick={endSession}>End Session</button>
    </div>
  );
}
