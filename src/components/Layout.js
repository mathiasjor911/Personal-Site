import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"

export default function Layout({ children }) {
  return (
    <div className="wrapper">
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}
