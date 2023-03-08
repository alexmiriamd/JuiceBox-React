import React from "react";
import {Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div id="navbar">
      <h2> juiceboxlr </h2>
      <div id = "nav">
        <Link id = "loginLink" to = {"/login"}>
          <h3> Login </h3>     
        </Link>
        <Link id = "signUpLink" to = {"/register"}>
          <h3> Sign Up </h3>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;