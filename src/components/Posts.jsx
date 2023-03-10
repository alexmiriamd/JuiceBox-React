import React, {useState} from "react";
import {Link} from "react-router-dom";


const Posts = (props) => {
    const posts = props.posts;
    const setPosts = props.setPosts;

    return (
        <div id = "allPosts">
            {
                posts.map((post, idx) => {
                    console.log(posts)
                    return(
                        <div id = "singlePost" key={idx}>
                            <h3 id = "postAuthor"> {post.author.username}</h3>
                            <h2 id = "postTitle" > {post.title} </h2>
                            <h4 id = "postContent"> {post.content} </h4>
                            <p id= "tags"> {post.tags.name} </p>
                            { post.author.username === window.localStorage.getItem("username") ?            //only displays on current users posts
                            <div className = "postButtons">
                               <Link to="/updatepost" onClick = {() => {
                                    console.log(post);
                                    window.localStorage.setItem("postId", post.id);
                                    window.localStorage.setItem("postTitle", post.title);
                                    window.localStorage.setItem("postContent", post.content);
                                    window.localStorage.setItem("postTags", post.tags.name);
                                }} >
                                <button id="updateButton">
                                    <h3> Update </h3>
                                </button>
                                </Link> 
                                <button id="updateButton" >
                                    <h3> Delete</h3>
                                </button>
                            </div>
                            :null }
                        </div>    
                    )
                })
            }
        </div>
    )
}

export default Posts