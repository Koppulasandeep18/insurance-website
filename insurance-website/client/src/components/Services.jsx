import "./Services.css";

function Services() {
  return (
    <section className="services" id="services">
      <h2>Our Services</h2>

      <div className="services-grid">

        {/* Credit Cards */}
        <div className="service-card">
          <h3>💳 Credit Cards</h3>

          <ul>
            <li>✓ Find the right credit card</li>
            <li>✓ Compare benefits and offers</li>
            <li>✓ Rewards and cashback options</li>
            <li>✓ Simple application guidance</li>
          </ul>

          <a href="#contact" className="service-btn">
            Explore Credit Cards
          </a>
        </div>

        {/* Insurance */}
        <div className="service-card">
          <h3>🛡️ Insurance</h3>

          <ul>
            <li>✓ Protect your family's future</li>
            <li>✓ Compare suitable plans</li>
            <li>✓ Affordable premium options</li>
            <li>✓ Expert guidance and support</li>
          </ul>

          <a href="#contact" className="service-btn">
            Explore Insurance
          </a>
        </div>

        {/* Loans */}
        <div className="service-card">
          <h3>🏦 Loans</h3>

          <ul>
            <li>✓ Personal loan assistance</li>
            <li>✓ Home loan guidance</li>
            <li>✓ Compare suitable loan options</li>
            <li>✓ Simple application support</li>
          </ul>

          <a href="#contact" className="service-btn">
            Explore Loans
          </a>
        </div>

      </div>
    </section>
  );
}

export default Services;