import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Home, 
  CaseStudies, 
  Technologies, 
  Services, 
  Page404,
  Careers,  
  Contacts, 
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
          <Route path="case-studies" element={<CaseStudies />} />
          <Route path="contact" element={<Contacts />} />
          <Route path="careers" element={<Careers />} />
        </Route>
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
