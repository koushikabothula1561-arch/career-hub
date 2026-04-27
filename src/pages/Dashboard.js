import React from "react";

function Dashboard() {
  const userEmail = localStorage.getItem("userEmail") || "test@gmail.com";

  return (
    <div className="dashboard-page">
      <div className="dashboard-banner">
        <div>
          <p className="welcome-text">Welcome back</p>
          <h1>Student Dashboard</h1>
          <p className="dashboard-email">{userEmail}</p>
        </div>
        <div className="dashboard-badge">CareerHub Pro</div>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <span>👨‍🎓</span>
          <h2>100+</h2>
          <p>Registered Students</p>
        </div>

        <div className="stat-card">
          <span>💼</span>
          <h2>50+</h2>
          <p>Available Jobs</p>
        </div>

        <div className="stat-card">
          <span>🚀</span>
          <h2>8</h2>
          <p>Career Paths</p>
        </div>

        <div className="stat-card">
          <span>🟢</span>
          <h2>Live</h2>
          <p>MySQL Storage</p>
        </div>
      </div>

      <section className="roadmap-section">
        <div className="section-title">
          <h2>Career Roadmaps</h2>
          <p>Choose a path and start building your future.</p>
        </div>

        <div className="roadmap-grid">
          <div className="roadmap-card">
            <h3>Full Stack Developer</h3>
            <p>HTML → CSS → JavaScript → React → Java → Spring Boot → MySQL</p>
          </div>

          <div className="roadmap-card">
            <h3>Data Analyst</h3>
            <p>Excel → SQL → Python → Power BI → Statistics → Projects</p>
          </div>

          <div className="roadmap-card">
            <h3>Cloud Engineer</h3>
            <p>Linux → Networking → AWS → EC2 → S3 → RDS</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Dashboard;