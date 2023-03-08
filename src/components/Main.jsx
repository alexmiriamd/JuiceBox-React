import React, {useState, useEffect} from "react";
import { Navbar, Posts } from "./";
import { getPosts } from "../API-Adapter";

const Main = () => {
    const [posts, setPosts] = useState([]);
    
    const displayPosts = async () => {
        const allPosts = await getPosts();
        setPosts(allPosts);
    }

    useEffect(()=>{
        displayPosts();
    });

    return(
        <div id="main">
            <Navbar />
            <Posts posts = {posts} setPosts = {setPosts}/> 
        </div>
    )
}

export default Main