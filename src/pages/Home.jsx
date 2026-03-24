import { motion } from "framer-motion";
import "./Home.css";
import bg from "../assets/lupus.jpg";

function Home() {

  const symptoms = [
    { name: "Fatigue" },
    { name: "Joint pain" },
    { name: "Skin rash" },
    { name: "Hair fall" },
  ];

  return (
    <div>

      {/* HERO */}

      <div
        className="hero"
        style={{
          backgroundImage: `url(${bg})`,
        }}
      >

        <div className="overlay">

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Lupus Health Platform
          </motion.h1>

          <p>
            Symptoms • Doctors • Tracker • Chatbot • Community
          </p>

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