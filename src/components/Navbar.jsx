import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = (props) => {
  const loggedIn = props.loggedIn;
  
  const navigate = useNavigate();

  const logOut = () => {
    window.localStorage.removeItem("userToken");
    window.localStorage.removeItem("username");
    console.log("you logged out");
    navigate("/");
    window.location.reload(true);
  }

  return (
    <div id="navbar">
      <Link id = "siteName" to = {"/"}>
        <h2> juiceboxlr </h2>
      </Link>
      <div id = "nav">
        {loggedIn ? 
        (<>
          <Link to={"/myposts"}>
            <h3> My Posts </h3>
          </Link>
          <Link id = "createPostLink" to = {"/createpost"}>
            <h3> Create A Post </h3>
          </Link>
          <button id = "logoutButton" onClick={logOut}>
            <h3> Log Out </h3>
          </button>
        </>)
        :
        (<>
          <Link id = "loginLink" to = {"/login"}>
            <h3> Login </h3>     
          </Link>
          <Link id = "signUpLink" to = {"/register"}>
            <h3> Sign Up </h3>
          </Link>
        </>
        )}
      </div>
    </div>
  );
};

export default Navbar;