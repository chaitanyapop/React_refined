import Context from "./Context";
import ContextApiChildOne from "./ContextApiChildOne";
import ContextApiChildTwo from "./ContextApiChildTwo";

export default function ContextApiParent() {
  return (
    <Context>
      <ContextApiChildOne></ContextApiChildOne>
      <ContextApiChildTwo></ContextApiChildTwo>
    </Context>
  );
}
