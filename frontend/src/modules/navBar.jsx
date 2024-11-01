import React from "react";
import { Link } from "react-router-dom";
import "../styles/navBar.css";


function Navbar() {
  return (
    <>
      <div className="navbar">
        <Link to="/"><button className="button_navbar">Home</button></Link>
        <Link to="/page1"><button className="button_navbar">page1</button></Link>
      </div>
    </>
  )
}

export default Navbar;