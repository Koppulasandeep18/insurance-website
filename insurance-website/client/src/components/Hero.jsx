function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h1>
          Secure Your <span>Future</span> Today
        </h1>

        <p>
          Get expert guidance for Term Insurance, Health Insurance,
          and Credit Cards with Padma Financial Services.
        </p>

        <a href="#contact" className="btn btn-primary">
          Get Free Consultation
        </a>

        <div className="hero-features">
          <div className="hero-feature">
            <div className="hero-feature-icon">🛡️</div>

            <div>
              <h4>Trusted Guidance</h4>
              <p>Simple and reliable financial assistance.</p>
            </div>
          </div>

          <div className="hero-feature">
            <div className="hero-feature-icon">🤝</div>

            <div>
              <h4>Personal Support</h4>
              <p>Get assistance based on your requirements.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-image">
        <img
          src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=80"
          alt="Financial Planning"
        />
      </div>
    </section>
  );
}

export default Hero;