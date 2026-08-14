function Services() {
  return (
    <section className="services-section" id="services">
      <h2>Our Services</h2>

      <div className="services-wrapper">

        {/* Credit Cards */}
        <div className="service-card">
          <h3>💳 Credit Cards</h3>

          <ul>
            <li>Find the right credit card</li>
            <li>Compare benefits and offers</li>
            <li>Rewards and cashback options</li>
            <li>Simple application guidance</li>
          </ul>

          <a href="#contact">
            <button>Explore Credit Cards</button>
          </a>
        </div>

        {/* Term Insurance */}
        <div className="service-card">
          <h3>🛡️ Term Insurance</h3>

          <ul>
            <li>Protect your family's future</li>
            <li>Compare suitable plans</li>
            <li>Affordable premium options</li>
            <li>Expert guidance and support</li>
          </ul>

          <a href="#contact">
            <button>Explore Insurance</button>
          </a>
        </div>

        {/* Consultation */}
        <div className="service-card">
          <h3>Get Free Consultation</h3>

          <p style={{ color: "#667085", marginBottom: "20px" }}>
            Share your details and our team will help you choose the
            right financial solution.
          </p>

          <a href="#contact">
            <button>Request a Callback</button>
          </a>
        </div>

      </div>
    </section>
  );
}

export default Services;