import React from "react";
import About from "../components/About";
import SignUp from "../components/SignUp";
import Articles from "../components/Articles";
import Article from "../components/Article";
import Categories from "../components/Categories";
import Category from "../components/Category";
import Author from "../components/Author";
import Profile from "../components/Profile";
import EditProfileForm from "../components/EditProfileForm";
import Root from "../components/Root";

import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Link,
  NavLink,
} from "react-router-dom";

import "./App.css";

const router =
  /* Wrap this Root Route to create Router here */
  createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        {/* Add Routes here! */}
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/articles/:title" element={<Article />} />

        <Route path="/cateogries" element={<Categories />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/authors" element={<Author />} />
        <Route path="/authors/:name" element={<Author />} />
      </Route>
    )
  );

function App() {
  return <>{<RouterProvider router={router} />}</>;
}

export default App;
