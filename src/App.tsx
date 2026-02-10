// import { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import LazyLoadingParent from "./components/code_splitting/LazyLoadingParent";
import Main_file from "./components/composition/Main_file";
import ContextApiParent from "./components/context-API/ContextApiParent";
import BuggyComponent from "./components/Error boundary/BuggyComponent";
import ErrorBoundary from "./components/Error boundary/ErrorBoundary";
//import CustomHookPractice from "./components/customHookPractice";
import Counter from "./components/HOC/Counter";
import Comp1 from "./components/Lifecycle/Comp1";
import ReactMemoParent from "./components/ReactMemo/ReactMemoParent";
import UseCallbackParent from "./components/useCallbackPractice/UseCallbackParent";
import UseMemoParent from "./components/useMemoPractice/UseMemoParent";
import Navbar from "./components/Router/Components/Navbar";
import { lazy, Suspense } from "react";
import Home from "./components/Router/Pages/Home";
import UserDetail from "./components/Router/Pages/UserDetail";
import ApiMain from "./components/Api/ApiMain";
import Parent from "./components/Plain_redux/components/Parent";
import Rtk_parent from "./components/RTK/components/Rtk_parent";

const Dashboard = lazy(() => import("./components/Router/Pages/Dashboard"));
const User = lazy(() => import("./components/Router/Pages/User"));
const Profile = lazy(() => import("./components/Router/Pages/Profile"));
const Settings = lazy(() => import("./components/Router/Pages/Settings"));

function App() {
  // const [count, setCount] = useState(0);

  // function incrementOne() {
  //   //setCount((value) => value + 1);
  //   setCount(count + 1);
  // }

  // function decrementOne() {
  //   //setCount((value) => value - 1);
  //   setCount(count - 1);
  // }

  return (
    <div>
      {/* <span>This is counter</span>
      <p>Count : {count}</p>
      <button onClick={incrementOne}>Increment by one</button>
      <button onClick={decrementOne}>Decrement by one</button> */}
      {/* <CustomHookPractice></CustomHookPractice> */}
      {/* <Counter></Counter> */}
      {/* <Comp1></Comp1> */}
      {/* <ReactMemoParent></ReactMemoParent> */}
      {/* <UseMemoParent></UseMemoParent> */}
      {/* <UseCallbackParent></UseCallbackParent> */}
      {/* <ErrorBoundary>
        <BuggyComponent></BuggyComponent>
      </ErrorBoundary> */}
      <Main_file></Main_file>
      {/* <LazyLoadingParent></LazyLoadingParent> */}
      {/* <ContextApiParent></ContextApiParent> */}
      {/* <ApiMain></ApiMain> */}
      {/* <Parent></Parent> */}
      {/* <Rtk_parent></Rtk_parent> */}

      {/*Below is the example of routing........ */}
      {/* <Router>
        <Navbar></Navbar>
        <Suspense fallback={<h2>Loading....</h2>}></Suspense>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/User" element={<User />}></Route>
          <Route path="/users/:id" element={<UserDetail />}></Route>
          <Route path="/Dashboard" element={<Dashboard />}>
            <Route path="profile" element={<Profile />}></Route>
            <Route path="settings" element={<Settings />}></Route>
          </Route>
          <Route path="*" element={<h2>Page Not Found</h2>} />
        </Routes>
      </Router> */}
    </div>
  );
}

export default App;
