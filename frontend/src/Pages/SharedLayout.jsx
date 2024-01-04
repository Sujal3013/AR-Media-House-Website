import React from "react";
import { Outlet,Link } from "react-router-dom";
import "../styles/SharedLayout.css";
export default function SharedLayout() {
  return (
    <div>
      <nav >
        <div className="logo">Your Logo</div>
        <ul >
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <button>Let's Work Together</button>
      </nav>

      <main>
        <Outlet />
      </main>
      <footer>Footer</footer>
    </div>
  );
}
