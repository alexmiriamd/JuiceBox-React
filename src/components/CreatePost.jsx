import React, { useState } from "react";
import { postCreatePost } from "../API-Adapter";
import Navbar from "./Navbar"

const CreatePost = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [tags, setTags] = useState("");

    const sendNewPost = async (title, content, tags) => {
        try{
            await postCreatePost(title, content, tags);

        } catch(error){
            console.error(error)
        }
    }

    return(
        <div>
            <Navbar />
            <h1>
                Write something cool here: 
            </h1>
            <form
                onSubmit = {(event) => {
                    event.preventDefault();
                    sendNewPost(title, content, tags);
                    console.log(title, content, tags);
                    
                }}
            >
                <input 
                placeholder={"Title"}
                value = {title}
                required
                onChange = {(event) => {
                    setTitle(event.target.value);
                }}
                ></input>
                <textarea 
                placeholder={"Write your post here!"}
                value = {content}
                required
                rows="5"
                cols="60"
                onChange = {(event) => {
                    setContent(event.target.value);
                }}
                ></textarea>
                <input
                placeholder = {"Tags"}
                value = {tags}
                //not required
                onChange = {(event) => {
                    setTags(event.target.value);
                }}
                ></input>
                <button type = "submit">
                    Create Post!
                </button>
            </form>
        </div>
    )
}

export default CreatePost;