import { useEffect, useState, type Component } from "react";

function HocCommonComponent(ChildComponent: any) {
  return function () {
    useEffect(() => {
      console.log("hello world");
    }, []);
    let [count, setCount] = useState(0);
    function increament() {
      setCount((value) => value + 1);
    }
    return (
      <ChildComponent count={count} increament={increament}></ChildComponent>
    );
  };
}
export default HocCommonComponent;
