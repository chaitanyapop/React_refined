import React from "react";

const ReactMemo = React.memo(function ({
  user,
}: {
  user: { name: string; age: number };
}) {
  console.log("executing");
  return (
    <div>
      <p>User name is: {user.name}</p>
      <p>User age is: {user.age}</p>
    </div>
  );
});

export default ReactMemo;
