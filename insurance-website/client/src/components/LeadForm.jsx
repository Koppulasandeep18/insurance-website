import { useState } from "react";
import "./LeadForm.css";

function LeadForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setMessage(
      "Thank you! Our team will get in touch with you soon."
    );

    setFormData({
      name: "",
      phone: "",
      email: "",
      service: "",
    });
  };

  return (
    <section className="lead-premium" id="contact">
      <div className="lead-container">

        {/* LEFT CONTENT */}
        <div className="lead-info">
          <span className="lead-tag">GET STARTED</span>

          <h2>
            Let's Find the Right
            <span> Financial Solution.</span>
          </h2>

          <p>
            Looking for a Credit Card, Loan or Insurance? Share your details
            and our team will help you understand the available options.
          </p>

          <div className="lead-points">

            <div className="lead-point">
              <div className="lead-point-icon">✓</div>

              <div>
                <h4>Credit Cards</h4>
                <p>
                  Explore credit card options based on your requirements.
                </p>
              </div>
            </div>

            <div className="lead-point">
              <div className="lead-point-icon">✓</div>

              <div>
                <h4>Loans</h4>
                <p>
                  Get guidance to understand suitable loan options.
                </p>
              </div>
            </div>

            <div className="lead-point">
              <div className="lead-point-icon">✓</div>

              <div>
                <h4>Insurance</h4>
                <p>
                  Understand insurance options for your needs.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* FORM */}
        <div className="lead-form-card">

          <div className="lead-form-header">
            <h3>Request a Free Consultation</h3>

            <p>
              Fill in your details and we'll get back to you.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="premium-lead-form"
          >

            <div className="form-group">
              <label>Full Name</label>

              <input
                type="text"
                name="name"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Phone Number</label>

              <input
                type="tel"
                name="phone"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Email Address</label>

              <input
                type="email"
                name="email"
                placeholder="Enter your email address"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>I'm Interested In</label>

              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
              >
                <option value="">Select a service</option>

                <option value="Credit Card">
                  Credit Cards
                </option>

                <option value="Loan">
                  Loans
                </option>

                <option value="Insurance">
                  Insurance
                </option>
              </select>
            </div>

            <button
              type="submit"
              className="lead-submit-btn"
            >
              Request Free Consultation
              <span>→</span>
            </button>

            {message && (
              <p className="lead-success-message">
                ✓ {message}
              </p>
            )}

          </form>
        </div>

      </div>
    </section>
  );
}

export default LeadForm;