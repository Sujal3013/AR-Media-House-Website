import React from 'react'

const NavBar = () => {
  return (
    <nav>
      <div className="logo">Your Logo</div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
      <button>Get Started</button>
    </nav>
  )
}

export default NavBar