import { Provider } from "react-redux";
import store from "../store/store";
import Rtk_child from "./Rtk_child";

export default function Rtk_parent() {
  return (
    <Provider store={store}>
      <Rtk_child></Rtk_child>
    </Provider>
  );
}
