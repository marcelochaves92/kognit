import React from "react";
import ReactDOM from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider,
    Route,
} from "react-router-dom";
import Login from "./components/Login";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Login />,
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router}>
            <Route path="/" element={<Login />} />
        </RouterProvider>
    </React.StrictMode>
);
