import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>

      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-content">
          <h1>CareerHub</h1>
          <h3>Build Your Future Career</h3>

          <p>
            CareerHub is a full stack career guidance and job application portal
            built using React, Spring Boot, and MySQL.
          </p>

          <div className="hero-buttons">
            <Link to="/dashboard" className="primary-btn">
              Get Started
            </Link>

            <Link to="/jobs" className="secondary-btn">
              Explore Jobs
            </Link>
          </div>
        </div>
      </section>

      {/* CAREER CARDS */}
      <section className="card-container">

        <div className="card">
          <img
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=90"
            alt="Software Developer"
          />
          <div className="card-content">
            <h2>Software Developer</h2>
            <p>
              Build websites, backend systems, and scalable applications using modern technologies.
            </p>
          </div>
        </div>

        <div className="card">
          <img
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=90"
            alt="Data Scientist"
          />
          <div className="card-content">
            <h2>Data Scientist</h2>
            <p>
              Analyze data, build machine learning models, and generate business insights.
            </p>
          </div>
        </div>

        <div className="card">
          <img
            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=900&q=90"
            alt="Cyber Security"
          />
          <div className="card-content">
            <h2>Cyber Security</h2>
            <p>
              Protect systems, networks, and data from cyber threats and attacks.
            </p>
          </div>
        </div>

        <div className="card">
          <img
            src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=900&q=90"
            alt="AI Engineer"
          />
          <div className="card-content">
            <h2>AI Engineer</h2>
            <p>
              Build intelligent applications using AI, deep learning, and automation.
            </p>
          </div>
        </div>

      </section>

    </div>
  );
}

export default Home;