import React from "react";
import ReactDOM from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider,
    createRoutesFromElements,
    Route,
} from "react-router-dom"

import { 
    Main,
    Login,
    Register,
    CreatePost,
    MyPosts
} from "./components";

const container = document.getElementById("app");
const root = ReactDOM.createRoot(container);

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<Main />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/createpost" element={<CreatePost />} />
            <Route path="/myposts" element={<MyPosts />} />
        </>
    )
)

root.render(<RouterProvider router={router} />);
