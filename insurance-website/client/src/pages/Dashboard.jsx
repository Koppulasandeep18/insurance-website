import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Dashboard.css";

function Dashboard() {
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetchLeads();
  }, []);

  const fetchLeads = async () => {
    try {
      setLoading(true);
      setMessage("");

      const response = await fetch(
"https://insurance-website-nwtt.onrender.com/api/leads"      );

      const data = await response.json();

      if (response.ok && data.success) {
        setLeads(data.leads);
      } else {
        setMessage(data.message || "Failed to fetch leads");
      }
    } catch (error) {
      console.error("Fetch Error:", error);
      setMessage("Server connection failed");
    } finally {
      setLoading(false);
    }
  };

  const totalLeads = leads.length;

  const newLeads = leads.filter(
    (lead) => !lead.status || lead.status === "New"
  ).length;

  const contactedLeads = leads.filter(
    (lead) => lead.status === "Contacted"
  ).length;

  const interestedLeads = leads.filter(
    (lead) => lead.status === "Interested"
  ).length;

  return (
    <div className="dashboard-page">

      <header className="dashboard-header">
        <div className="dashboard-brand">
          <div className="brand-logo">
            P
          </div>

          <div>
            <h1>Padma Leads Dashboard</h1>
            <p>Padma Financial Services</p>
          </div>
        </div>

        <Link to="/" className="back-button">
          ← Back to Website
        </Link>
      </header>

      <div className="dashboard-welcome">
        <div>
          <h2>Welcome to Padma Financial Services</h2>
          <p>
            Manage and track all customer enquiries from one place.
          </p>
        </div>
      </div>

      <div className="dashboard-stats">

        <div className="stat-card">
          <div className="stat-icon">👥</div>

          <div>
            <span>Total Leads</span>
            <h2>{totalLeads}</h2>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">🆕</div>

          <div>
            <span>New Leads</span>
            <h2>{newLeads}</h2>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">📞</div>

          <div>
            <span>Contacted</span>
            <h2>{contactedLeads}</h2>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">⭐</div>

          <div>
            <span>Interested</span>
            <h2>{interestedLeads}</h2>
          </div>
        </div>

      </div>

      <div className="leads-container">

        <div className="table-header">
          <div>
            <h2>Customer Enquiries</h2>
            <p>
              Leads submitted through Padma Financial Services website
            </p>
          </div>

          <button
            onClick={fetchLeads}
            className="refresh-button"
          >
            ↻ Refresh Leads
          </button>
        </div>

        {loading && (
          <div className="loading">
            Loading customer enquiries...
          </div>
        )}

        {message && (
          <div className="error-message">
            {message}
          </div>
        )}

        {!loading && leads.length === 0 && (
          <div className="no-leads">
            <div className="empty-icon">📋</div>

            <h3>No Customer Enquiries Yet</h3>

            <p>
              New enquiries submitted through your website will appear here.
            </p>
          </div>
        )}

        {!loading && leads.length > 0 && (
          <div className="table-wrapper">

            <table className="leads-table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Customer Name</th>
                  <th>Mobile Number</th>
                  <th>Service</th>
                  <th>Status</th>
                  <th>Submitted On</th>
                </tr>
              </thead>

              <tbody>
                {leads.map((lead, index) => (
                  <tr key={lead._id}>

                    <td>{index + 1}</td>

                    <td className="customer-name">
                      {lead.name}
                    </td>

                    <td>{lead.mobile}</td>

                    <td>
                      <span className="service-badge">
                        {lead.service}
                      </span>
                    </td>

                    <td>
                      <span
                        className={`status status-${(
                          lead.status || "New"
                        )
                          .toLowerCase()
                          .replace(" ", "-")}`}
                      >
                        {lead.status || "New"}
                      </span>
                    </td>

                    <td>
                      {lead.createdAt
                        ? new Date(
                            lead.createdAt
                          ).toLocaleString()
                        : "N/A"}
                    </td>

                  </tr>
                ))}
              </tbody>
            </table>

          </div>
        )}

      </div>

      <footer className="dashboard-footer">
        © 2026 Padma Financial Services. All Rights Reserved.
      </footer>

    </div>
  );
}

export default Dashboard;