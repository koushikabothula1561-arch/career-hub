import React, { useState } from "react";

function Jobs() {
  const [selectedJob, setSelectedJob] = useState(null);
  const [form, setForm] = useState({
    name: "",
    email: localStorage.getItem("userEmail") || "",
    phone: "",
  });

  const jobs = [
    {
      id: 1,
      title: "Frontend Developer",
      company: "TechNova",
      location: "Hyderabad",
      salary: "₹4-6 LPA",
    },
    {
      id: 2,
      title: "Backend Developer",
      company: "CodeCraft",
      location: "Bangalore",
      salary: "₹5-8 LPA",
    },
    {
      id: 3,
      title: "Data Analyst",
      company: "DataVision",
      location: "Chennai",
      salary: "₹3-5 LPA",
    },
  ];

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const applyJob = (e) => {
    e.preventDefault();

    const newApplication = {
      ...selectedJob,
      ...form,
      date: new Date().toLocaleDateString(),
    };

    const old = JSON.parse(localStorage.getItem("appliedJobs")) || [];
    localStorage.setItem("appliedJobs", JSON.stringify([...old, newApplication]));

    alert("Applied Successfully!");

    setSelectedJob(null);
    setForm({ name: "", email: form.email, phone: "" });
  };

  return (
    <div className="jobs-section">
      <h1>Available Jobs</h1>

      <div className="jobs-grid">
        {jobs.map((job) => (
          <div className="job-card" key={job.id}>
            <h3>{job.title}</h3>
            <p><b>Company:</b> {job.company}</p>
            <p><b>Location:</b> {job.location}</p>
            <p><b>Salary:</b> {job.salary}</p>

            <button className="apply-btn" onClick={() => setSelectedJob(job)}>
              Apply Now
            </button>
          </div>
        ))}
      </div>

      {/* APPLY POPUP */}
      {selectedJob && (
        <div className="modal">
          <div className="modal-box">
            <h2>Apply for {selectedJob.title}</h2>

            <form onSubmit={applyJob}>
              <input
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                required
              />

              <input
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
                required
              />

              <input
                name="phone"
                placeholder="Phone"
                value={form.phone}
                onChange={handleChange}
                required
              />

              <button type="submit">Submit</button>
              <button type="button" className="cancel" onClick={() => setSelectedJob(null)}>
                Cancel
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Jobs;