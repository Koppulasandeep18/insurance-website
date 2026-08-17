const stats = [
  {
    number: "500+",
    label: "Happy Customers",
  },
  {
    number: "4+",
    label: "Financial Services",
  },
  {
    number: "100%",
    label: "Customer Support",
  },
  {
    number: "24/7",
    label: "Assistance",
  },
];

function Stats() {
  return (
    <section className="stats-section">
      <div className="stats-container">
        {stats.map((stat, index) => (
          <div className="stat-card" key={index}>
            <h2>{stat.number}</h2>
            <p>{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Stats;