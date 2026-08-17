function Navbar() {
  return (
    <>
      {/* Top Bar */}
      <div className="top-bar">
        <div className="top-bar-content">
          <span>Trusted Financial Guidance For Better Decisions</span>

          <div className="top-contact">
            <span>📞 +91 95818 65754</span>
            <span>✉️ padmafinancialservices@gmail.com</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header className="navbar">
        <a href="#home" className="brand">
          <div className="brand-icon">P</div>

          <div>
            <h2>PADMA</h2>
            <span>FINANCIAL SERVICES</span>
          </div>
        </a>

        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About Us</a>
          <a href="#services">Services</a>
          <a href="#why-us">Why Choose Us</a>
          <a href="#process">How It Works</a>
        </nav>

        <a href="#contact" className="nav-button">
          Get Free Consultation →
        </a>
      </header>
    </>
  );
}

export default Navbar;