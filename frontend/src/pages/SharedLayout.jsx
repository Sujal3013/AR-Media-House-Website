import React from 'react'
import { Outlet } from 'react-router-dom'

export default function SharedLayout() {
  return (
    <div>
        <nav>Nav Bar</nav>
        <main>
          <Outlet />
        </main>
        <footer>
          Footer
        </footer>
    </div>
  )
}
