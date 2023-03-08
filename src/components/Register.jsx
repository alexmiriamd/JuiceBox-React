import React, {useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import { postRegisterUser } from "../API-Adapter";

const Register = () => {
    const [name, setName] = useState("");
    const [location, setLocation] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    async function sendRegisterUser(username, password, name, location) {
        try{
            await postRegisterUser(username, password, name, location);
            // setUsername("");
            // setPassword("");
            // setName("");
            // setPassword("");
            // setLocation("");
            window.localStorage.setItem("userToken", result.token);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div id = "registerCard">
            <h1>
                juiceboxlr
            </h1>
            <h2>
                Welcome! Sign Up :
            </h2>
            <form
                onSubmit = {(event) => {
                    event.preventDefault();
                    sendRegisterUser(username, password, name, location);
                    console.log(username, password, name, location, "this is onsubmit");
                    // navigate("/login");
                }}
            >
                <input 
                placeholder={"Your Name"}
                value = {name}
                required
                onChange = {(event) => {
                    setName(event.target.value);
                }}
                ></input>
                <input 
                placeholder={"Location"}
                value = {location}
                required
                onChange = {(event) => {
                    setLocation(event.target.value);
                }}
                ></input>
                <input
                placeholder = {"Username"}
                value = {username}
                required
                onChange = {(event) => {
                    setUsername(event.target.value);
                }}
                ></input>
                <input
                placeholder = {"Password"}
                type = {"password"}
                value = {password}
                required
                onChange = {(event) => {
                    setPassword(event.target.value);
                }}
                ></input>
                <input
                placeholder="Re-type Password"
                required
                ></input>
                <button type = "submit">
                    Register!
                </button>
            </form>
            <h3>
                Already have an account? <Link to= {"/login"}> Log in Here! </Link>
            </h3>

        </div>
    )
}

export default Register;