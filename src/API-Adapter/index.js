const BASE_URL = "https://juicebox-6o9q.onrender.com/api";

export const getPosts = async () => {           //GET all posts
    try{
        const response = await fetch(`${BASE_URL}/posts`, {
            headers: {
                Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFsYmVydCIsImlkIjoxLCJpYXQiOjE2NzgxMjczODV9.N7S28JiR-75LeH7eQmnPBQh-TJR-mtpcPxEcL14QfBk",
                "Content-Type": "application/json"
            }
        })
        const result = await response.json();
        const postArray = result.posts      //gets just the post array
        return postArray
    } catch(error) {
        console.error(error);
    }
};