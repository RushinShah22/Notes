import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

import App from './App'
import LogInView from './Components/LogInView';
import SignUpView from './Components/SignUpView';
import EditNoteView from './Components/EditNoteView';
import { MyNotesProvider} from './NotesContext';



const el = document.getElementById("root");


const root = ReactDOM.createRoot(el);

const router = createBrowserRouter([{
    path: "/",
    element: <MyNotesProvider children={<App />}/>
   
  
},{
    path: "/login", 
    element:  <MyNotesProvider children={<LogInView />}/>,
   
}, {
    path: "/signup",
    element: <MyNotesProvider children={<SignUpView />} />,
    
}, {
    path: "/notes/:id",
    element: <MyNotesProvider children={<EditNoteView />} />,
}])




root.render(<RouterProvider router={router} />);


