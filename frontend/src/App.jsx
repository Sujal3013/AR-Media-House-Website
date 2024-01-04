import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Home, 
  CaseStudy, 
  Technologies, 
  Services, 
  Page404,
  Careers,  
  ContactUs, 
  About, 
  SharedLayout,
} from "./Pages";

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
          <Route path="case-studies" element={<CaseStudy />} />
          <Route path="contact" element={<ContactUs />} />
          <Route path="careers" element={<Careers />} />
        </Route>
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
