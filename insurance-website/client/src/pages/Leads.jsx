import { useEffect, useState } from "react";

function Leads() {
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");

  // =========================
  // FETCH ALL LEADS
  // =========================
  const fetchLeads = async () => {
    try {
      setLoading(true);

      const response = await fetch(
        "http://localhost:5000/api/leads"
      );

      const data = await response.json();

      if (response.ok) {
        setLeads(data.leads);
      } else {
        setMessage("Failed to fetch leads");
      }
    } catch (error) {
      console.error("Fetch Error:", error);
      setMessage("Server connection failed");
    } finally {
      setLoading(false);
    }
  };

  // Load leads when page opens
  useEffect(() => {
    fetchLeads();
  }, []);

  // =========================
  // UPDATE LEAD STATUS
  // =========================
  const updateStatus = async (leadId, newStatus) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/leads/${leadId}/status`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            status: newStatus,
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        // Update status immediately on screen
        setLeads((previousLeads) =>
          previousLeads.map((lead) =>
            lead._id === leadId
              ? { ...lead, status: data.lead.status }
              : lead
          )
        );

        setMessage("Lead status updated successfully! ✅");
      } else {
        setMessage(
          data.message || "Failed to update status"
        );
      }
    } catch (error) {
      console.error("Update Error:", error);
      setMessage("Server connection failed");
    }
  };

  if (loading) {
    return (
      <div style={{ padding: "40px" }}>
        <h2>Loading leads...</h2>
      </div>
    );
  }

  return (
    <div style={{ padding: "40px" }}>
      <h1>Insurance Leads Dashboard</h1>

      {message && (
        <p
          style={{
            marginTop: "10px",
            marginBottom: "20px",
          }}
        >
          {message}
        </p>
      )}

      {leads.length === 0 ? (
        <p>No leads found.</p>
      ) : (
        <table
          border="1"
          cellPadding="12"
          style={{
            borderCollapse: "collapse",
            width: "100%",
            marginTop: "20px",
          }}
        >
          <thead>
            <tr>
              <th>Name</th>
              <th>Mobile</th>
              <th>Service</th>
              <th>Status</th>
              <th>Created At</th>
            </tr>
          </thead>

          <tbody>
            {leads.map((lead) => (
              <tr key={lead._id}>
                <td>{lead.name}</td>

                <td>{lead.mobile}</td>

                <td>{lead.service}</td>

                <td>
                  <select
                    value={lead.status || "New"}
                    onChange={(e) =>
                      updateStatus(
                        lead._id,
                        e.target.value
                      )
                    }
                  >
                    <option value="New">New</option>
                    <option value="Contacted">
                      Contacted
                    </option>
                    <option value="Interested">
                      Interested
                    </option>
                    <option value="Converted">
                      Converted
                    </option>
                    <option value="Not Interested">
                      Not Interested
                    </option>
                  </select>
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
      )}
    </div>
  );
}

export default Leads;