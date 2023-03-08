import React from "react";

const Posts = (props) => {
    const posts = props.posts;
    const setPosts = props.setPosts;

    return (
        <div id = "allPosts">
            {
                posts.map((post, idx) => {
                    return(
                        <div id = "singlePost" key={idx}>
                            <h3 id = "postAuthor"> {post.author.name}</h3>
                            <h2 id = "postTitle" > {post.title} </h2>
                            <h4 id = "postContent"> {post.content} </h4>
                            <p id= "tags"> {post.tags.name} </p>
                        </div>    
                    )
                })
            }
        </div>
    )
}

export default Posts