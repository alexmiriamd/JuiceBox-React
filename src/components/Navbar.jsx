import React, {useState} from "react";
import {Link } from "react-router-dom";

const Navbar = (props) => {
  const loggedIn = props.loggedIn;
  
  const logOut = () => {
    window.localStorage.removeItem("userToken");
    window.localStorage.removeItem("username");
    console.log("you logged out");
  }

  return (
    <div id="navbar">
      <h2> juiceboxlr </h2>
      <div id = "nav">
        {loggedIn ? 
        (<>
        <Link>
         <h3> My Posts </h3>
        </Link>
        <button type="button">
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
        )
        }
      </div>
    </div>
  );
};

export default Navbar;