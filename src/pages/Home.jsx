import { motion } from "framer-motion";
import "./Home.css";

import Features from "../components/Features";
import bg from "../assets/lupus.jpg"; // make sure this exists

function Home() {

  return (

    <div>

      {/* ================= HERO ================= */}

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

        </div>

      </div>


      {/* ================= FEATURES ================= */}

      <Features />


    </div>

  );

}

export default Home;