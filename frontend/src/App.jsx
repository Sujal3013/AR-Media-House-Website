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
import { WinSizeProvider } from "./context/winSizeContext";


function App() {
  

  return (
    <BrowserRouter>
      <WinSizeProvider>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="technologies" element={<Technologies />} />
          <Route path="about" element={<About />} />
          <Route path="case-studies" element={<CaseStudies />} />
          <Route path="case-studies/:id" element={<IndividualCaseStudy />} />
          <Route path="contact" element={<ContactUs />} />
          <Route path="careers" element={<Careers />} />
        </Route>
        <Route path="*" element={<Page404 />} />
      </Routes>
      </WinSizeProvider>
    </BrowserRouter>

  );
}

export default App;
