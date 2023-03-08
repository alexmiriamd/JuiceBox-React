import React from "react";

const Posts = (props) => {
    const posts = props.posts;
    const setPosts = props.setPosts;

    return (
        console.log(posts),
        <div id = "allPosts">
            {
                posts.map((post, idx) => {
                    return(
                        <div id = "singlePost" key={idx}>
                            <h3 id = "postAuthor"> {post.author.name}</h3>
                            <h2 id = "postTitle" > {post.title} </h2>
                            <h4 id = "postContent"> {post.content} {post.tags.name}</h4>
                        </div>    
                    )
                })
            }
        </div>
    )
}

export default Posts