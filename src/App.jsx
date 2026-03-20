import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Symptoms from "./pages/Symptoms";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/symptoms" element={<Symptoms />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;