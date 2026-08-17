function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-image">
        <img
          src="https://images.unsplash.com/photo-1556761175-b413da4baf72"
          alt="Financial consultation"
        />
      </div>

      <div className="about-content">
        <p className="about-label">ABOUT PADMA FINANCIAL SERVICES</p>

        <h2>Your Trusted Partner for Better Financial Decisions</h2>

        <p>
          At Padma Financial Services, we help individuals and families
          understand and explore financial products based on their
          requirements.
        </p>

        <p>
          From Credit Cards and Insurance to Loans, we provide simple
          guidance and assistance throughout the process.
        </p>

        <div className="about-points">
          <div>
            <span>✓</span>
            Personalized guidance
          </div>

          <div>
            <span>✓</span>
            Simple and transparent process
          </div>

          <div>
            <span>✓</span>
            Multiple financial solutions
          </div>

          <div>
            <span>✓</span>
            Dedicated customer support
          </div>
        </div>

        <a href="#contact" className="btn btn-primary">
          Talk to Our Expert →
        </a>
      </div>
    </section>
  );
}

export default About;