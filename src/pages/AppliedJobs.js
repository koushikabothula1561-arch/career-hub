import React, { useEffect, useState } from "react";

function AppliedJobs() {
  const [appliedJobs, setAppliedJobs] = useState([]);

  useEffect(() => {
    const jobs = JSON.parse(localStorage.getItem("appliedJobs")) || [];
    setAppliedJobs(jobs);
  }, []);

  const clearHistory = () => {
    if (window.confirm("Clear all applied jobs?")) {
      localStorage.removeItem("appliedJobs");
      setAppliedJobs([]);
    }
  };

  return (
    <div className="applied-page">
      <div className="applied-header">
        <h1>Applied Jobs History</h1>
        <p>Track all jobs you have applied for</p>

        {appliedJobs.length > 0 && (
          <button className="clear-btn" onClick={clearHistory}>
            Clear History
          </button>
        )}
      </div>

      {appliedJobs.length === 0 ? (
        <div className="empty-box">
          <h2>No Applied Jobs Yet</h2>
          <p>You haven't applied for any jobs.</p>
        </div>
      ) : (
        <div className="table-card">
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Job Title</th>
                <th>Company</th>
                <th>Qualification</th>
                <th>Phone</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {appliedJobs.map((job, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{job.name}</td>
                  <td>{job.email}</td>
                  <td>{job.jobTitle}</td>
                  <td>{job.company}</td>
                  <td>{job.qualification}</td>
                  <td>{job.phone}</td>
                  <td>
                    <span className="status-badge">
                      {job.status || "Applied"}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default AppliedJobs;