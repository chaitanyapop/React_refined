import { useLocation, useParams } from "react-router-dom";

export default function UserDetail() {
  let { id } = useParams();
  let location = useLocation();

  return (
    <div>
      <p>User id is, {id}</p>
      <p>User info is, {location.state?.userInfo}</p>
    </div>
  );
}
