import React, {useState} from "react";
import { patchPosts } from "../API-Adapter";
import Navbar from "./Navbar"


const UpdatePost = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [tags, setTags] = useState("");
    const postId = window.localStorage.getItem("postId");

    const [loggedIn, setLoggedIn] = useState(true);


    const sendUpdatedPost = async (postId, title, content, tags) => {
        
        try{
            await patchPosts(postId, title, content, tags);
        } catch(error){
            console.error(error);
        }
    }

    return(
        <div>
            <Navbar loggedIn = {loggedIn} setLoggedIn = {setLoggedIn} />
            <h1>
                Update Post: 
            </h1>
            {/* <form
                onSubmit = {(event) => {
                    event.preventDefault();
                    sendUpdatedPost(postId, title, content, tags);
                    console.log(title, content, tags);
                    
                }}
            >
                <h2 contentEditable="true" onChange = {(event) => {
                    setTitle(event.target.value);
                }}>
                    {window.localStorage.getItem("postTitle")}
                </h2>
                <h4 contentEditable="true" onChange = {(event) => {
                    setContent(event.target.value);
                }}>
                    {window.localStorage.getItem("postContent")}
                </h4>
                <h5 contentEditable="true" onChange = {(event) => {
                    setTags(event.target.value);
                }}> 
                    {window.localStorage.getItem("postTags")}
                </h5>
                <button type = "submit" >
                    Update Post!
                </button>
            </form> */}
        </div>
    )
}

export default UpdatePost