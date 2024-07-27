import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Project1 from './Project1.jsx';
import Project2 from './Project2.jsx';
import Project3 from './Project3.jsx';
const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>
  },
  {
    path:'/L-Shop',
    element:<Project1/>
  },
  {
    path:'/Employee-Manager',
    element:<Project2/>
  },
  {
    path:'/Layout-Project',
    element:<Project3/>
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}>

  </RouterProvider>
)
