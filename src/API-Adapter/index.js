const BASE_URL = "https://juicebox-6o9q.onrender.com/api";

export const getPosts = async () => {           //GET all posts
    try{
        const response = await fetch(`${BASE_URL}/posts`,{
        method: "GET",
        headers: {"Content-Type": "application/json"},
     });
        const result = await response.json();
        const postArray = result.posts      //gets just the post array
        return postArray
    } catch(error) {
        console.error(error);
    }
};

export const postRegisterUser = async (username, password, name, location) => {     //POST (register) new user
    try{
        const response = await fetch(`${BASE_URL}/users/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                
                    username: username,
                    password: password,
                    name: name,
                    location: location
                
            }),
        });

        const result = await response.json();
        console.log(result);
        return result;
    } catch (error) {
        console.error(error);
    }
};

export const postUserLogin = async (username, password) => {        //POST login a user
    try{
        const response = await fetch(`${BASE_URL}/users/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: username,
                password: password
            }),
        });
        const result = await response.json();
        console.log(result);
        return result;
    } catch (error) {
        console.error(error);
    }
};