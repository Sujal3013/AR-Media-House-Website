import { Outlet, useLocation } from "react-router-dom";
import { Navbar, Footer, ScrolltoTop } from "../components";
import { useEffect } from "react";

export default function SharedLayout() {
  const {pathname}=useLocation();
  useEffect(()=>{
    window.scrollTo({top:0,behavior:"auto"});
  },[pathname]);
   
  return (
    <>
      <Navbar />
      <main className="overflow-hidden">
        <Outlet />
      </main>
      
      <Footer />
      <ScrolltoTop/>
    </>
  )
}
