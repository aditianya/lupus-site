import { motion } from "framer-motion";
import "./Home.css";

function Home() {
  const symptoms = [
    "Fatigue",
    "Joint pain",
    "Skin rash",
    "Fever",
  ];

  return (
    <div>

      {/* HERO SECTION */}
      <div className="hero">

        <div className="circle c1"></div>
        <div className="circle c2"></div>
        <div className="circle c3"></div>

        <img
          src="/butterfly.png"
          className="butterfly"
          alt="butterfly"
        />

        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1>Lupus Awareness Website</h1>
          <p>Spreading knowledge and support</p>
        </motion.div>

      </div>


      {/* SYMPTOMS SECTION */}

      <div className="symptoms">

        <h2>Common Symptoms</h2>

        <div className="card-container">

          {symptoms.map((s, i) => (
            <motion.div
              key={i}
              className="card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {s}
            </motion.div>
          ))}

        </div>

      </div>

    </div>
  );
}

export default Home;