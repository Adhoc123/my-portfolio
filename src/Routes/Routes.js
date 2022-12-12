import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Main from "../Layout/Main";
import Blogs from "../Pages/Blogs/Blogs";
import Details2 from "../Pages/Details/Details2";
import Details3 from "../Pages/Details/Details3";
import Details4 from "../Pages/Details/Details4";
import SingleDetails from "../Pages/Details/SingleDetails";
import Home from "../Pages/Home/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: `/project/${1}`,
                element: <SingleDetails></SingleDetails>
                
            },
            {
                path: `/project/${2}`,
                element: <Details2></Details2>    
            },
            {
                path: `/project/${3}`,
                element: <Details3></Details3>    
            },
            {
                path: `/project/${4}`,
                element: <Details4></Details4>    
            },
        ]
    }
]);

export default router;