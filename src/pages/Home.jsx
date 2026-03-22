import { motion } from "framer-motion";
import "./Home.css";

function Home() {

  const symptoms = [
    "Fatigue",
    "Joint pain",
    "Skin rash",
    "Hair fall",
  ];

  const features = [
    "Chatbot",
    "Tracker",
    "Doctors",
    "Community",
  ];

  return (
    <div>

      {/* HERO SECTION */}

      <div className="hero">

        <div className="circle c1"></div>
        <div className="circle c2"></div>
        <div className="circle c3"></div>

        <motion.h1
          initial={{ opacity: 0, y: -50 }}
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
          Symptoms • Doctors • Tracker • Chatbot • Community
        </motion.p>

      </div>



      {/* SYMPTOMS SECTION */}

      <div
        className="section"
        data-aos="fade-up"
      >

        <h2>Common Symptoms</h2>

        <div className="card-container">

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

      </div>



      {/* FEATURES SECTION */}

      <div
        className="section"
        data-aos="fade-right"
      >

        <h2>Features</h2>

        <div className="card-container">

          {features.map((f, i) => (
            <div
              key={i}
              className="card"
              data-aos="zoom-in"
            >
              {f}
            </div>
          ))}

        </div>

      </div>


    </div>
  );
}

export default Home;