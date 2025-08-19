import React from "react";

let UseCallbackChild = React.memo(function (props: any) {
  console.log("Executing child component");
  return (
    <div>
      <button onClick={props.memoizedFunc}>Change Info</button>
    </div>
  );
});

export default UseCallbackChild;
