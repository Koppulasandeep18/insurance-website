import { Link } from "react-router-dom";

import Navbar from "../components/Navbar.jsx";
import Hero from "../components/Hero.jsx";
import Services from "../components/Services.jsx";
import HowItWorks from "../components/HowItWorks.jsx";
import LeadForm from "../components/LeadForm.jsx";
import Footer from "../components/Footer.jsx";

function Home() {
  return (
    <>
      <Navbar />

      <Hero />

      {/* Dashboard Login Button */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "30px 20px",
          background: "#ffffff",
        }}
      >
        <Link
          to="/login"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "10px",
            padding: "15px 28px",
            background: "#142f5a",
            color: "#ffffff",
            textDecoration: "none",
            borderRadius: "10px",
            fontSize: "15px",
            fontWeight: "700",
          }}
        >
          Login to Dashboard →
        </Link>
      </div>

      <Services />

      <HowItWorks />

      <LeadForm />

      <Footer />
    </>
  );
}

export default Home;