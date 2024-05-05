import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import JobDetails from "../Pages/JobDetails/JobDetails";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import AddJob from "../Pages/AddJob/AddJob";
import MyPostedJob from "../Pages/MyPostedJob/MyPostedJob";
import UpdateJob from "../Pages/UpdateJob/UpdateJob";

const router = createBrowserRouter([{
    path:'/',
    element:<Main/>,
    errorElement:<ErrorPage/>,
    children:[
        {
            path:'/',
            element:<Home/>
        },
        {
            path:'/login',
            element:<Login/>
        },
        {
            path:'/registration',
            element:<Registration/>
        },
        {
            path:'/jobs/:id',
            element:<JobDetails/>,
            loader:async({params})=> await fetch(`http://localhost:5000/jobs/${params.id}`)
        },
        {
            path:'/addjob',
            element:<AddJob/>
        },
        {
            path:'/postedjob',
            element:<MyPostedJob/>
        },
        {
            path:'/upjob/:id',
            element:<UpdateJob/>,
            loader: async ({params})=>  await fetch(`http://localhost:5000/jobs/${params.id}`)
        }
]
}])

export default router