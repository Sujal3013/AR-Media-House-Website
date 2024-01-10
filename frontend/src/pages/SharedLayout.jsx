import React from "react";
import { Outlet,useLocation } from "react-router-dom";
import {Navbar, Footer} from "../components";
import { useEffect } from "react";

export default function SharedLayout() {
  const {pathname}=useLocation();
  useEffect(()=>{
    window.scrollTo({top:0,behavior:"smooth"});
  },[pathname]);
   
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
