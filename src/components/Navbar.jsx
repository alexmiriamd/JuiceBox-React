import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  const loggedIn = props.loggedIn;
  
  const logOut = () => {
    window.localStorage.removeItem("userToken");
    window.localStorage.removeItem("username");
    console.log("you logged out");
    window.location.reload(true);
  }

  return (
    <div id="navbar">
      <h2> juiceboxlr </h2>
      <div id = "nav">
        {loggedIn ? 
        (<>
          <Link id = "createPostLink" to = {"/createpost"}>
          <h3> Create A Post </h3>
          </Link>
          <button onClick={logOut}>
            Log Out
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