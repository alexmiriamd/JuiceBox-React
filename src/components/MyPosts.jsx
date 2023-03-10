import React, {useState, useEffect} from "react";
import { Navbar, Posts } from "./";
import { getPosts } from "../API-Adapter";

const MyPosts = () => {
    const [posts, setPosts] = useState([]);
    const [loggedIn, setLoggedIn] = useState(true);
    
    const displayPosts = async () => {
        const allPosts = await getPosts();
        setPosts(allPosts);
    }

    useEffect(()=>{
        displayPosts();
    }, []);

    return(
        <div id="myPosts">
            <Navbar loggedIn = {loggedIn} setLoggedIn = {setLoggedIn}/>
            {
                posts.map((post, idx) => {
                    if(post.author.username === window.localStorage.getItem("username")){       //filters out the posts not by current user
                    return(
                        <div id = "singlePost" key={idx}>
                            <h3 id = "postAuthor"> {post.author.username}</h3>
                            <h2 id = "postTitle" > {post.title} </h2>
                            <h4 id = "postContent"> {post.content} </h4>
                            <p id= "tags"> {post.tags.name} </p>
                        </div>    
                    )}
                })
            }
        </div>
    )
};

export default MyPosts