import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Analytics from "./pages/Analytics";
import Tracking from "./pages/Tracking";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Media from "./pages/Media";

function App() {
  return (
    <Router>
      <div className="bg-surface font-body-md text-on-surface antialiased overflow-x-hidden selection:bg-primary selection:text-white">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/tracking" element={<Tracking />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/media" element={<Media />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
