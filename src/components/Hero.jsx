import { motion } from "framer-motion";

function Hero() {
  return (
    <div
      style={{
        height: "100vh",
        background:
          "linear-gradient(45deg,#1f3c88,#6a0dad)",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        Lupus Health Platform
      </motion.h1>

      <p>
        Symptoms • Doctors • Tracker • Chatbot
      </p>
    </div>
  );
}

export default Hero;