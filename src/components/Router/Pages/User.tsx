import { useNavigate } from "react-router-dom";
export default function User() {
  let users = [
    { name: "Chaitanya", id: 24, userInfo: "abcdfg" },
    { name: "Nitin", id: 25, userInfo: "ajsndaosndalns" },
    { name: "Neelam", id: 25, userInfo: "laksdaoisdjaoisdo" },
  ];
  let navigate = useNavigate();
  function getUserInfo(user: any) {
    navigate(`/users/${user.id}`, { state: { userInfo: user.userInfo } });
  }
  return (
    <div>
      {users.map((user) => {
        return (
          <div key={Math.random()}>
            <p>Name: {user.name}</p>
            <button
              onClick={() => {
                getUserInfo(user);
              }}
            >
              Get user Info
            </button>
          </div>
        );
      })}
    </div>
  );
}
