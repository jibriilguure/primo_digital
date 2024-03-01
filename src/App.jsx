import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage"; // Import your ErrorPage component
import AboutUsSection from "./pages/AboutUsSection";
import ContactUsPage from "./pages/ContactUsPage";
// import AboutPage from "./pages/AboutPage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="/about" element={<AboutUsSection />} />
        <Route path="/contact" element={<ContactUsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
