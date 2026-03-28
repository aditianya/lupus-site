import { motion } from "framer-motion";
import "./Home.css";
import bg from "../assets/lupus.jpg";
import Card from "../components/Card";
import InfoSection from "../components/InfoSection";
import Features from "../components/Features";
function Home() {

  const symptoms = [
  {
    title: "Fatigue",
    text: "Extreme tiredness"
  },
  {
    title: "Joint pain",
    text: "Pain in joints"
  },
  {
    title: "Skin rash",
    text: "Butterfly rash"
  },
  {
    title: "Hair fall",
    text: "Hair loss"
  }
];

  return (
    <div>

      {/* HERO */}
      <div
  className="hero"
  style={{ backgroundImage: `url(${bg})` }}
>

  <div className="hero-overlay">

    <motion.h1
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      Lupus Health Platform
    </motion.h1>

    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
    >
      Understand • Track • Manage • Connect
    </motion.p>
    <InfoSection />
    <Features />
  </div>

</div>

      {/* SYMPTOMS */}

      <div className="section">

        <h2>Common Symptoms</h2>

        <div className="card-container">

          {symptoms.map((s, i) => (

            <div key={i} className="card">

              <h3>{s.name}</h3>

              <p>
                Learn more about this symptom
              </p>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}

export default Home;