import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import {
  Home,
  ContactUs,
  Careers,
  CaseStudies,
  Page404,
  About,
  Technologies,
  IndividualCaseStudy,
  Services,
  SharedLayout,
} from "./pages";


function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="technologies" element={<Technologies />} />
          <Route path="about" element={<About />} />
          <Route path="case-studies" element={<CaseStudies />} />
          <Route path="case-studies/:name" element={<IndividualCaseStudy />} />
          <Route path="contact" element={<ContactUs />} />
          <Route path="careers" element={<Careers />} />
        </Route>
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
