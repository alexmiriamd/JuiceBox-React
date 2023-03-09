import React, {useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import { postUserLogin } from "../API-Adapter";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    async function sendLoginUser(username, password){
        try{
            const result = await postUserLogin(username, password);
            if(result.token){
                window.localStorage.setItem("userToken", result.token);
                window.localStorage.setItem("username", username);
                navigate("/");
            }
            setUsername("");
            setPassword("");
        } catch (error) {
            console.error(error);
        }
    }

    return(
        <div id = "loginCard">
            <h1>
                juiceboxlr
            </h1>
            <h2>
                Welcome! Log in :
            </h2>
            <form
                onSubmit={async (event) => {
                    event.preventDefault();
                    await sendLoginUser(username, password);
                }}
            >
                <input
                placeholder = {"Username"}
                value = {username}
                required
                onChange = {(event) => {
                    setUsername(event.target.value);
                }}
                >
                </input>
                <input
                placeholder = {"Password"}
                type = {"password"}
                value = {password}
                required
                onChange = {(event) =>{
                    setPassword(event.target.value);
                }}
                >
                </input>
                <button type = "submit">
                    Log in!
                </button>
            </form>
            <h3>
                Don't have an account? <Link to= {"/register"}> Register Here! </Link>
            </h3>

        </div>
    )
}

export default Login;