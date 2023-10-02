import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";

import { CreateProduct } from "../pages/create-product.jsx";
import LandingPage from "../pages/landing-page.jsx";

export default function Router() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <LandingPage/>
        },
        {
            path: "/create-product",
            element: <CreateProduct/>
        },
        {
            path: "*",
            element: <div>404 page not found</div>
        }
    ]);

    return <RouterProvider router={router} />
}