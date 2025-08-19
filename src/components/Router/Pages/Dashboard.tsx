import { Link, Outlet } from "react-router-dom";

export default function Dashboard() {
  return (
    <div>
      <p>This is dashboard</p>
      <div>
        <Link to={"profile"}>Profile</Link>
        <Link to={"settings"}>Settings</Link>
      </div>
      <Outlet></Outlet>
    </div>
  );
}
