import { motion } from "framer-motion";
import "./Home.css";

function Home() {
  const symptoms = [
    "Fatigue",
    "Joint pain",
    "Skin rash",
    "Hair fall",
  ];

  return (
    <div>

      {/* HERO */}

      <div className="hero">

        <div className="circle c1"></div>
        <div className="circle c2"></div>
        <div className="circle c3"></div>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Lupus Health Platform
        </motion.h1>

        <p>
          Symptoms • Doctors • Tracker • Chatbot • Community
        </p>

      </div>


      {/* SECTION */}

      <div className="section" data-aos="fade-up">

        <h2>Common Symptoms</h2>

        {symptoms.map((s, i) => (
          <div
            key={i}
            className="card"
            data-aos="zoom-in"
          >
            {s}
          </div>
        ))}

      </div>


      {/* SECOND SECTION */}

      <div className="section" data-aos="fade-right">

        <h2>Features</h2>

        <div className="card">Chatbot</div>
        <div className="card">Tracker</div>
        <div className="card">Doctors</div>
        <div className="card">Community</div>

      </div>

    </div>
  );
}

export default Home;