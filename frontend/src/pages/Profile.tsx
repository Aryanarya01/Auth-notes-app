

// const Profile = ()=>{
//     return(
//         <>
//         <h1>Profile</h1>
//         </>
//     )
// }

// export default Profile;
import { useAuth } from "../context/AuthContext";

const Profile = () => {
  const { user, logout } = useAuth();

  return (
    <div>
      <h2>Profile</h2>

      <p><strong>Name:</strong> {user?.name}</p>
      <p><strong>Email:</strong> {user?.email}</p>

      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Profile;  