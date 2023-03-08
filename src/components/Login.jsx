import React from "react";
import { Link } from "react-router-dom";

const Login = () => {

    return(
        <div id = "loginCard">
            <h1>
                juiceboxlr
            </h1>
            <h2>
                Welcome! Log in :
            </h2>
            <form>
                <input
                placeholder = {"Username"}
                >
                </input>
                <input
                placeholder = {"Password"}
                type = {"password"}
                >
                </input>
            </form>
            <h3>
                Don't have an account? <Link to= {"/register"}> Register Here! </Link>
            </h3>

        </div>
    )
}

export default Login;