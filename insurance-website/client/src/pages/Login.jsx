import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setMessage("");
    setLoading(true);

    try {
      const response = await fetch(
"https://insurance-website-nwtt.onrender.com/",        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        setMessage(data.message || "Login failed");
        setLoading(false);
        return;
      }

      localStorage.setItem("user", JSON.stringify(data.user));

      setMessage("Login successful!");

      setTimeout(() => {
        navigate("/dashboard");
      }, 500);

    } catch (error) {
      console.error("Login error:", error);

      setMessage(
        "Unable to connect to server. Please check if the backend is running."
      );

      setLoading(false);
    }
  };

  return (
    <div className="login-page">
      <div className="login-wrapper">

        <div className="login-info">
          <div className="login-logo">
            PADMA<span>.</span>
          </div>

          <h1>
            Welcome to Your
            <span> Dashboard.</span>
          </h1>

          <p>
            Login to access your dashboard and manage leads,
            customer enquiries and business information.
          </p>

          <div className="login-features">
            <div>✓ Manage Leads</div>
            <div>✓ Track Customers</div>
            <div>✓ View Business Data</div>
          </div>
        </div>

        <div className="login-card">
          <div className="login-header">
            <h2>Welcome Back</h2>
            <p>Enter your details to access the dashboard.</p>
          </div>

          <form onSubmit={handleSubmit}>

            <div className="login-group">
              <label>Email Address</label>

              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="login-group">
              <label>Password</label>

              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            {message && (
              <p
                style={{
                  marginBottom: "15px",
                  fontSize: "14px",
                  color: message === "Login successful!"
                    ? "green"
                    : "red",
                }}
              >
                {message}
              </p>
            )}

            <button
              type="submit"
              className="login-btn"
              disabled={loading}
            >
              {loading ? "Logging in..." : "Login to Dashboard"}
              <span>→</span>
            </button>

          </form>
        </div>

      </div>
    </div>
  );
}

export default Login;