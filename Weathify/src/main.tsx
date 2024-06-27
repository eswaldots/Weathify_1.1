import React from 'react'
import ReactDOM from 'react-dom/client'
import Cfg from './config/config.tsx'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Page from "./Page.tsx";
import Weather from './Card.tsx'
import Arch from './test.tsx'
const router = createBrowserRouter([
    {
        path: "/",
        element: <Page/>,
    },
    {
        path: "/config",
        element:
            <Cfg/>,
        children: [

            {
                path: "city",
                element: <City/>},
            {
                path: "paths",
                element: <Paths/>
            }
        ],}
                ]);
import './index.css'
import City from "./config/City.tsx";
import Paths from "./config/Paths.tsx";
import Search from "./test.tsx";
ReactDOM.createRoot(document.getElementById('root')).render(
    <>
        <RouterProvider router={router}/>
    </>
)
                // Use contextBridge
window.ipcRenderer.on('main-process-message', (_event, message) => {
    console.log(message)
})
