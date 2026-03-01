import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const { setUser } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handelLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ email, password }),
    });
    const data = await res.json();
    if (res.ok) {
      setUser(data);
      navigate("/notes");
    } else {
      alert(data.message);
    }
  };
  return (
    <>
      <div>
        <h1>Login</h1>
        <form>
          <input
            type="text"
            value={email}
            placeholder="Enter Email..."
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            value={password}
            placeholder="Enter Password..."
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Login</button>
          <p>
            Don't have account? <Link to="/register">Register</Link>
          </p>
        </form>
      </div>
    </>
  );
};
export default Login;
