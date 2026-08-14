import { useState } from "react";

export default function LeadForm() {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    service: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setMessage("Submitting...");

    try {
      const response = await fetch(
        "http://localhost:5000/api/leads",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (response.ok) {
        setMessage("Callback request submitted successfully! We will contact you soon.");

        setFormData({
          name: "",
          mobile: "",
          service: "",
        });
      } else {
        setMessage(data.message || "Something went wrong!");
      }
    } catch (error) {
      console.error("Lead Form Error:", error);
      setMessage("Server connection failed!");
    }
  };

  return (
    <section className="lead-form-section" id="contact">
      <div className="form-container">
        <div className="form-info">
          <h2>Get Free Consultation</h2>

          <p>
            Share your details and our team will help you choose the right
            financial solution for your needs.
          </p>
        </div>

        <form className="lead-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="tel"
            name="mobile"
            placeholder="Mobile Number"
            value={formData.mobile}
            onChange={handleChange}
            required
          />

          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
          >
            <option value="">Select Service</option>
            <option value="Term Insurance">
              Term Insurance
            </option>
            <option value="Health Insurance">
              Health Insurance
            </option>
            <option value="Credit Card">
              Credit Card
            </option>
          </select>

          <button type="submit">
            Request a Callback
          </button>

          {message && (
            <p className="form-message">
              {message}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}