import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handelRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("http://localhost:5000/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ name, email, password }),
    });
    const data = await res.json();
    if (res.ok) {
      alert("Registered Successfully. Please login!");
      navigate("/");
    } else {
      alert(data.message);
    }
  };

  return (
    <>
      <div>
        <h1>Register</h1>
        <form onSubmit={handelRegister}>
          <input
            type="text"
            value={name}
            placeholder="Enter Name.."
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <br />
          <input
            type="email"
            value={email}
            placeholder="Enter Email.."
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <br />
          <input
            type="password"
            value={password}
            placeholder="Enter Password.."
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <br />
          <button type="submit">Register</button>
          <br />
          <p>
            Already have account? <Link to="/">Login</Link>
          </p>
        </form>
      </div>
    </>
  );
};
export default Register;
