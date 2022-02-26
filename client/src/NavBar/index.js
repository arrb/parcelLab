import React from "react";
import {  Link } from "react-router-dom";


const NavBar= () =>{
  return (
  <div className="top-navbar">
    <li className="headerlink-title">
      <Link to="/">Home</Link>
    </li>
  </div>
  );
}
export default NavBar;