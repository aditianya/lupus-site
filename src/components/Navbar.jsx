import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Navbar.css";

function Navbar() {

  const [scroll, setScroll] = useState(false);

  useEffect(() => {

    const handleScroll = () => {

      if (window.scrollY > 50) {
        setScroll(true);
      } else {
        setScroll(false);
      }

    };

    window.addEventListener("scroll", handleScroll);

  }, []);

  return (

    <div className={scroll ? "nav active" : "nav"}>

      <div className="logo">
        LupusCare
      </div>

      <div className="links">

         <Link to="/">Home</Link>
  <Link to="/symptoms">Symptoms</Link>
  <a href="#info">Did You Know</a>
  <a href="#features">Features</a>

  <Link to="/medications">Medications</Link>
  <Link to="/stories">Stories</Link>
      </div>

    </div>

  );

}

export default Navbar;