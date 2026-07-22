import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LoadingScreen from "./components/LoadingScreen";
import QuoteRequestModal from "./components/QuoteRequestModal";
import { QuoteModalProvider } from "./context/QuoteModalContext";
import Home from "./pages/Home";
import Analytics from "./pages/Analytics";
import Tracking from "./pages/Tracking";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Media from "./pages/Media";
import Categories from "./pages/Categories";
import CategoryDetail from "./pages/CategoryDetail";
import ServiceVerticalDetail from "./pages/ServiceVerticalDetail";

function App() {
  return (
    <QuoteModalProvider>
      <Router>
        <div className="bg-surface font-body-md text-on-surface antialiased overflow-x-hidden selection:bg-primary selection:text-white">
          <LoadingScreen />
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/tracking" element={<Tracking />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/media" element={<Media />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/categories/:slug" element={<CategoryDetail />} />
            <Route path="/services/:slug" element={<ServiceVerticalDetail />} />
          </Routes>
          <Footer />
          <QuoteRequestModal />
        </div>
      </Router>
    </QuoteModalProvider>
  );
}

export default App;
