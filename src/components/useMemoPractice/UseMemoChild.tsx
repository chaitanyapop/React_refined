import React from "react";

const UseMemoChild = React.memo(function (props: any) {
  console.log("Child is rendering", props);
  return (
    <div>
      <p>{props.user.name}</p>
      <p>{props.user.age}</p>
    </div>
  );
});
export default UseMemoChild;
