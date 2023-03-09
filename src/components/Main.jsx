import React, {useState, useEffect} from "react";
import { Navbar, Posts } from "./";
import { getPosts } from "../API-Adapter";

const Main = () => {
    const [posts, setPosts] = useState([]);
    const [loggedIn, setLoggedIn] = useState(false);
    
    const displayPosts = async () => {
        const allPosts = await getPosts();
        setPosts(allPosts);
    }

    useEffect(()=>{
        displayPosts();
    }, []);


    function checkLoggedIn(){
        if(window.localStorage.getItem("userToken")){
          setLoggedIn(true)
          console.log(loggedIn);
        }
    }

    useEffect(()=>{
        checkLoggedIn();
    },[loggedIn])

    return(
        <div id="main">
            <Navbar loggedIn = {loggedIn} setLoggedIn = {setLoggedIn}/>
            <Posts posts = {posts} setPosts = {setPosts}/> 
        </div>
    )
}

export default Main