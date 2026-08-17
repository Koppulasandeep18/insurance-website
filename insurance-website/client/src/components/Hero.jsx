function Hero() {
  return (
    <section className="premium-hero" id="home">
      <div className="hero-left">

        <div className="hero-badge">
          ✦ TRUSTED FINANCIAL GUIDANCE
        </div>

        <h1>
          Your Financial Journey,
          <span> Guided With Confidence.</span>
        </h1>

        <p>
          We simplify financial decisions and help you discover the right
          options for Credit Cards, Health Insurance, Term Insurance and Loans.
        </p>

        <div className="hero-buttons">
          <a href="#contact" className="hero-primary">
            Get Free Consultation →
          </a>

          <a href="#services" className="hero-secondary">
            Explore Services
          </a>
        </div>

        <div className="hero-trust">
          <div>
            <strong>500+</strong>
            <span>Happy Customers</span>
          </div>

          <div>
            <strong>4+</strong>
            <span>Financial Services</span>
          </div>

          <div>
            <strong>24/7</strong>
            <span>Customer Support</span>
          </div>
        </div>

      </div>

      <div className="hero-right">

        <div className="hero-glow"></div>

        <div className="financial-card main-card">
          <div className="card-icon">📊</div>
          <p>SMART FINANCIAL</p>
          <h3>Better Decisions Start Here</h3>

          <div className="mini-chart">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div className="floating-card card-one">
          <span className="float-icon">🛡️</span>
          <div>
            <strong>Secure Future</strong>
            <p>Insurance Guidance</p>
          </div>
        </div>

        <div className="floating-card card-two">
          <span className="float-icon">💳</span>
          <div>
            <strong>Smart Choices</strong>
            <p>Credit Card Advisory</p>
          </div>
        </div>

        <div className="floating-card card-three">
          <span className="float-icon">🏠</span>
          <div>
            <strong>Right Solutions</strong>
            <p>Loan Assistance</p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;