import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const email = localStorage.getItem("userEmail");

  const logout = () => {
    localStorage.removeItem("userEmail");
    alert("Logged out successfully!");
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <h2 className="logo">CareerHub</h2>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/jobs">Jobs</Link>
        <Link to="/applied-jobs">Applied Jobs</Link>

        {!email && <Link to="/register">Register</Link>}
        {!email && <Link to="/login">Login</Link>}

        {email && <span className="user-email">{email}</span>}
        {email && (
          <button className="logout-btn" onClick={logout}>
            Logout
          </button>
        )}
      </div>
    </nav>
  );
}

export default Navbar;