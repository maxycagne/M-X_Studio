import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import OurProjects from "./Pages/OurProjects";
import ServicesPage from "./Pages/ServicesPage";
import BlogsPage from "./Pages/BlogsPage";
import CareersPage from "./Pages/CareersPage";
import ContactPage from "./Pages/ContactPage";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-background font-sans text-foreground">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/projects" element={<OurProjects />} />
            <Route path="/blogs" element={<BlogsPage />} />
            <Route path="/careers" element={<CareersPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
