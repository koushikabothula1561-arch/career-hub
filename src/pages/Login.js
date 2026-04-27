import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const loginUser = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      const result = await response.text();

      if (result === "Login Success") {
        localStorage.setItem("userEmail", user.email);
        alert("Login successful!");
        navigate("/dashboard");
      } else {
        alert("Invalid email or password");
      }
    } catch (error) {
      alert("Unable to connect to server");
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <h2>User Login</h2>
        <p>Welcome back! Login to continue your career journey.</p>

        <form onSubmit={loginUser}>
          <input
            type="email"
            name="email"
            placeholder="Enter email"
            value={user.email}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Enter password"
            value={user.password}
            onChange={handleChange}
            required
          />

          <button type="submit">Login</button>
        </form>

        <h4>
          Don’t have an account? <Link to="/register">Register</Link>
        </h4>
      </div>
    </div>
  );
}

export default Login;