import "./HowItWorks.css";

function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Share Your Requirement",
      description:
        "Tell us what you are looking for — a Credit Card, Loan or Insurance solution.",
    },
    {
      number: "02",
      title: "Explore Suitable Options",
      description:
        "Our team helps you understand available options based on your requirements.",
    },
    {
      number: "03",
      title: "Compare & Choose",
      description:
        "Review important features, eligibility and benefits before making your decision.",
    },
    {
      number: "04",
      title: "Get Complete Support",
      description:
        "We guide you through the next steps and assist you throughout the process.",
    },
  ];

  return (
    <section className="how-it-works" id="how-it-works">
      <div className="how-container">

        <div className="how-header">
          <span className="how-tag">HOW IT WORKS</span>

          <h2>
            Simple Steps.
            <span> Smarter Decisions.</span>
          </h2>

          <p>
            A simple and transparent process to help you explore financial
            solutions with more clarity and confidence.
          </p>
        </div>

        <div className="steps-wrapper">
          {steps.map((step, index) => (
            <div className="step-item" key={step.number}>
              
              <div className="step-top">
                <div className="step-number">
                  {step.number}
                </div>

                {index !== steps.length - 1 && (
                  <div className="step-line"></div>
                )}
              </div>

              <div className="step-content">
                <h3>{step.title}</h3>

                <p>{step.description}</p>
              </div>

            </div>
          ))}
        </div>

        <div className="how-bottom">
          <p>
            Ready to explore the right financial solution?
          </p>

          <a href="#contact">
            Get Started
            <span>→</span>
          </a>
        </div>

      </div>
    </section>
  );
}

export default HowItWorks;