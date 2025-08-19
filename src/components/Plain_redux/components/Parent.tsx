import { Provider } from "react-redux";
import Child from "./Child";
import store from "../store/singleStore";
export default function Parent() {
  return (
    <Provider store={store}>
      <Child />
    </Provider>
  );
}
