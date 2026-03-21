import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="nav">

      <div className="logo">
        LupusCare
      </div>

      <div className="links">

        <Link to="/">Home</Link>
        <Link to="/symptoms">Symptoms</Link>
        <Link to="/medications">Medications</Link>
        <Link to="/stories">Stories</Link>
        <Link to="/doctors">Doctors</Link>
        <Link to="/community">Community</Link>
        <Link to="/faq">FAQ</Link>
        <Link to="/tracker">Tracker</Link>
        <Link to="/chatbot">Chatbot</Link>
        <Link to="/donate">Donate</Link>

      </div>

    </div>
  );
}

export default Navbar;