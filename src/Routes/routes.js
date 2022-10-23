import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Category from "../Pages/Category/Category/Category";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Login/Register";
import News from "../Pages/News/News/News";
import Profile from "../Pages/Others/Profile";
import Terms from "../Pages/Others/Terms";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('https://news-portal-server-six.vercel.app/news')
            },
            {
                path: "/category/:id",
                element: <Category></Category>,
                loader: ({ params }) => fetch(`https://news-portal-server-six.vercel.app/category/${params.id}`)
            },
            {
                path: "/news/:id",
                element: <PrivateRoute><News></News></PrivateRoute>,
                loader: ({ params }) => fetch(`https://news-portal-server-six.vercel.app/news/${params.id}`)
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: "/terms",
                element: <Terms />
            },
            {
                path: "/profile",
                element: <PrivateRoute><Profile></Profile></PrivateRoute>
            }

        ]
    }
])

export default router;