import React from 'react'
import { Outlet } from 'react-router-dom'
import { Navbar, Footer } from '../components';

export default function SharedLayout() {
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
