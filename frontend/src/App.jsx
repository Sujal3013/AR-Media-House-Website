import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import Careers from "./pages/Careers";
import CaseStudies from "./pages/CaseStudies";
import Page404 from "./pages/Page404";
import About from "./pages/About";
import Technologies from "./pages/Technologies";
import Services from "./pages/Services";
import SharedLayout from "./pages/SharedLayout";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <SharedLayout/>
          }
        >
          <Route index element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="technologies" element={<Technologies />} />
          <Route path="about" element={<About />} />
          <Route path="case-studies" element={<CaseStudies />} />
          <Route path="contact" element={<ContactUs />} />
          <Route path="careers" element={<Careers />} />
        </Route>
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
