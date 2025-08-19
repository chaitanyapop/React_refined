import HocCommonComponent from "./HocCommonComponent";

function Counter(props: any) {
  return (
    <div>
      <p>This is a counter</p>
      <p>counter value is: {props.count}</p>
      <button onClick={props.increament}>Increament counter</button>
    </div>
  );
}

export default HocCommonComponent(Counter);
