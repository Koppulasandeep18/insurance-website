import "./Footer.css";

function Footer() {
  return (
    <footer className="premium-footer">
      <div className="footer-container">
        
        {/* BRAND */}
        <div className="footer-brand">
          <a href="/" className="footer-logo">
            PADMA<span>.</span>
          </a>

          <p>
            Helping you explore financial solutions with clarity and confidence.
          </p>

          <p className="footer-small">
            Credit Cards, Loans and Insurance guidance made simple.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div className="footer-column">
          <h4>Quick Links</h4>

          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#why-us">Why PADMA</a>
          <a href="#how-it-works">How It Works</a>
        </div>

        {/* SERVICES */}
        <div className="footer-column">
          <h4>Our Services</h4>

          <a href="#services">Credit Cards</a>
          <a href="#services">Loans</a>
          <a href="#services">Insurance</a>
        </div>

        {/* CONTACT */}
        <div className="footer-column">
          <h4>Get In Touch</h4>

          <p>Have questions? We're here to help.</p>

          <a href="#contact" className="footer-contact-btn">
            Contact Us
            <span>→</span>
          </a>
        </div>

      </div>

      {/* FOOTER BOTTOM */}
      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} PADMA Financial Services.
          All rights reserved.
        </p>

        <div className="footer-bottom-links">
          <a href="#privacy">Privacy Policy</a>
          <a href="#terms">Terms & Conditions</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;