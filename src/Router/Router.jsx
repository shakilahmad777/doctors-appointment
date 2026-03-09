import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root/Root";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import { Suspense } from "react";
import DoctorsDetails from "../Pages/DoctorsDetails/DoctorsDetails";
import Bookings from "../Pages/Bookings/Bookings";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                index: true,
                path: '/',
                Component: Home,
            },
            {
                path: '/doctors/:id',
                loader: () => fetch('/doctors.json'),
                Component: DoctorsDetails
            },
            {
                path: '/bookings',
                loader: () => fetch('/doctors.json'),
                Component: Bookings
            }
        ]
    }
])
