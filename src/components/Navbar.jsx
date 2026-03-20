import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/symptoms">Symptoms</Link>
    </nav>
  );
}

export default Navbar;