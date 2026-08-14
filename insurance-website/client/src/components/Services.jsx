function Services() {
  return (
    <section className="services-section" id="services">
      <div className="services-container">
        <h2>Our Services</h2>

        <div className="services-grid">
          
          {/* Credit Cards */}
          <div className="service-card">
            <h3>💳 Credit Cards</h3>

            <ul>
              <li>Find the right credit card</li>
              <li>Compare benefits and offers</li>
              <li>Rewards and cashback options</li>
              <li>Simple application guidance</li>
            </ul>

            <a href="#contact" className="service-btn">
              Explore Credit Cards
            </a>
          </div>

          {/* Insurance */}
          <div className="service-card">
            <h3>🛡️ Insurance</h3>

            <ul>
              <li>Protect your family's future</li>
              <li>Compare suitable plans</li>
              <li>Affordable premium options</li>
              <li>Expert guidance and support</li>
            </ul>

            <a href="#contact" className="service-btn">
              Explore Insurance
            </a>
          </div>

          {/* Free Consultation */}
          <div className="service-card consultation-card">
            <h3>Get Free Consultation</h3>

            <p>
              Share your details and our team will help you choose the right
              financial solution.
            </p>

            <a href="#contact" className="service-btn">
              Request a Callback
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Services;