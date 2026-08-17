import "./WhyUs.css";

function WhyUs() {
  const reasons = [
    {
      number: "01",
      icon: "🎯",
      title: "Personalized Guidance",
      description:
        "Your requirements are different, so we help you understand options based on your individual needs.",
    },
    {
      number: "02",
      icon: "🔍",
      title: "Clear Comparisons",
      description:
        "We simplify different financial options so you can understand important features more clearly.",
    },
    {
      number: "03",
      icon: "🤝",
      title: "Dedicated Support",
      description:
        "From your first enquiry to the next steps, our team is here to guide and assist you.",
    },
    {
      number: "04",
      icon: "⚡",
      title: "Simple Process",
      description:
        "No unnecessary confusion. We keep the process clear, straightforward and easy to understand.",
    },
  ];

  return (
    <section className="why-premium" id="why-us">
      <div className="why-container">

        <div className="why-left">
          <span className="section-tag">WHY PADMA</span>

          <h2>
            Guidance That Makes
            <span> Financial Decisions Easier.</span>
          </h2>

          <p className="why-description">
            Financial decisions can feel complicated. PADMA Financial Services
            helps you understand Credit Cards, Loans and Insurance options with
            a simple and transparent approach.
          </p>

          <div className="why-stats">
            <div className="why-stat">
              <strong>500+</strong>
              <span>Customers Guided</span>
            </div>

            <div className="why-stat">
              <strong>3</strong>
              <span>Core Services</span>
            </div>

            <div className="why-stat">
              <strong>24/7</strong>
              <span>Support Available</span>
            </div>
          </div>

          <a href="#contact" className="why-button">
            Talk To Our Team
            <span>→</span>
          </a>
        </div>

        <div className="why-right">
          <div className="why-grid">
            {reasons.map((reason) => (
              <div className="why-card" key={reason.number}>
                <div className="why-card-top">
                  <span className="why-number">{reason.number}</span>
                  <span className="why-icon">{reason.icon}</span>
                </div>

                <h3>{reason.title}</h3>

                <p>{reason.description}</p>

                <div className="why-card-line"></div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default WhyUs;