import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Skills from "../Pages/Skills/Skills";
import Education from "../Pages/Education/Education";
import Projects from "../Pages/Projects/Projects";
import Contact from "../Pages/Contact/Contact";
import ProjectCard from "../Pages/Projects/ProjectCard";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
           path:"/about",
           element:<About></About>
        },
        {
          path:"/skill",
          element:<Skills></Skills>
        },
        {
          path:"/education",
          element:<Education></Education>
        },
        {
          path:"/project",
          element:<Projects></Projects>,
          
        },
        {
          path:"/contact",
          element:<Contact></Contact>
        },
        {
          path:"/details/:id",
          element:<ProjectCard></ProjectCard>
          
        }
       
      ]
    },
  ]);