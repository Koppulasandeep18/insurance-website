import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      {/* Padma Brand */}
      <div className="logo">
        <span className="padma-name">Padma</span>
        <small>FINANCIAL SERVICES</small>
      </div>

      {/* Navigation */}
      <div className="nav-links">
        <a href="#home">HOME</a>
        <a href="#services">SERVICES</a>
        <a href="#contact">CONTACT US</a>

        <Link to="/dashboard">
          DASHBOARD
        </Link>
      </div>

      {/* Consultation Button */}
      <a href="#contact" className="nav-button">
        GET FREE CONSULTATION
      </a>
    </nav>
  );
}

export default Navbar;