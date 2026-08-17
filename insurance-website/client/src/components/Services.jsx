import "./Services.css";

function Services() {
  const services = [
    {
      number: "01",
      icon: "💳",
      title: "Credit Cards",
      subtitle: "SMART CARD CHOICES",
      description:
        "Find and understand credit card options that match your lifestyle, spending habits and financial needs.",
      features: [
        "Card Eligibility Guidance",
        "Benefits & Rewards",
        "Card Comparison",
      ],
      button: "Explore Credit Cards",
    },
    {
      number: "02",
      icon: "🏦",
      title: "Loans",
      subtitle: "FINANCE YOUR GOALS",
      description:
        "Explore suitable loan options and get clear guidance on eligibility, requirements and the application process.",
      features: [
        "Personal Loan Guidance",
        "Home & Business Loans",
        "Eligibility Assistance",
      ],
      button: "Explore Loans",
    },
    {
      number: "03",
      icon: "🛡️",
      title: "Insurance",
      subtitle: "PROTECT YOUR FUTURE",
      description:
        "Understand insurance options designed to help protect your health, family and financial future.",
      features: [
        "Health Insurance",
        "Term Insurance",
        "Plan Comparison",
      ],
      button: "Explore Insurance",
    },
  ];

  return (
    <section className="premium-services" id="services">
      <div className="services-container">
        {/* SECTION HEADER */}
        <div className="services-top">
          <div className="services-heading">
            <span className="section-tag">OUR SERVICES</span>

            <h2>
              Financial Solutions
              <br />
              <span>Made Simple.</span>
            </h2>
          </div>

          <p className="services-intro">
            From choosing the right credit card to finding suitable loans and
            insurance protection, we help you understand your financial options
            clearly and confidently.
          </p>
        </div>

        {/* SERVICE CARDS */}
        <div className="services-grid">
          {services.map((service) => (
            <div className="premium-service-card" key={service.number}>
              <div className="service-card-top">
                <span className="service-number">
                  {service.number}
                </span>

                <div className="service-icon">
                  {service.icon}
                </div>
              </div>

              <div className="service-content">
                <p className="service-subtitle">
                  {service.subtitle}
                </p>

                <h3>{service.title}</h3>

                <p className="service-description">
                  {service.description}
                </p>

                <div className="service-line"></div>

                <ul className="service-features">
                  {service.features.map((feature) => (
                    <li key={feature}>
                      <span className="check-icon">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href="#contact"
                className="service-explore-btn"
              >
                <span>{service.button}</span>
                <span className="arrow">→</span>
              </a>
            </div>
          ))}
        </div>

        {/* CONSULTATION BANNER */}
        <div className="services-bottom">
          <div className="services-bottom-left">
            <span className="bottom-tag">
              NOT SURE WHERE TO START?
            </span>

            <h3>
              Let's find the right financial solution for you.
            </h3>

            <p>
              Talk with our team and explore Credit Cards, Loans and Insurance
              options based on your requirements.
            </p>
          </div>

          <a
            href="#contact"
            className="services-consult-btn"
          >
            Get Free Consultation
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Services;