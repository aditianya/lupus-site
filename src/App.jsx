import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Symptoms from "./pages/Symptoms";
import Medications from "./pages/Medications";
import Stories from "./pages/Stories";
import Doctors from "./pages/Doctors";
import Community from "./pages/Community";
import FAQ from "./pages/FAQ";
import Tracker from "./pages/Tracker";
import Chatbot from "./pages/Chatbot";
import Donate from "./pages/Donate";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/symptoms" element={<Symptoms />} />
        <Route path="/medications" element={<Medications />} />
        <Route path="/stories" element={<Stories />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/community" element={<Community />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/tracker" element={<Tracker />} />
        <Route path="/chatbot" element={<Chatbot />} />
        <Route path="/donate" element={<Donate />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;