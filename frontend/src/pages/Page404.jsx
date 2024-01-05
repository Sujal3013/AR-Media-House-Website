import React from 'react'
import { Button, Navbar } from '../components';
export default function Page404() {
  document.querySelector("title").innerHTML = "404 - AR Media House";
  return (
    <>
<Navbar/>
    <div className="flex items-center justify-center h-screen bg-gray-100">
    <div className="text-center">
      <h1 className="text-6xl font-bold text-gray-800">404</h1>
      <p className="text-2xl text-gray-600">Page Not Found</p>
      <p className="mt-4 text-gray-500">The page you are looking for might be in another universe.</p>
      <Button to="/" arrow="true" className="bg-primary-500 text-secondary-500 text-sm mx-auto py-2  px-3 mt-3">
        Back to Home
      </Button>
    </div>
  </div>
  </>
  )
}
