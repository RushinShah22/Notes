import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import App from './App'
import LogInView from './Components/LogInView';
import SignUpView from './Components/SignUpView';


const el = document.getElementById("root");

const root = ReactDOM.createRoot(el);

const router = createBrowserRouter([{
    path: "/",
    element: <App/>
},{
    path: "/login", 
    element:  <LogInView />
}, {
    path: "/signup",
    element: <SignUpView />
}, {
    path: "/notes/:id",
}])

root.render(<RouterProvider router={router} />);
