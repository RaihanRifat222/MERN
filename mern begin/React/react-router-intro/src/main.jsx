import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import Home from './components/Home/Home.jsx'
import Contact from './components/Contact/Contact.jsx'
import Posts from './components/Posts/Posts.jsx'
import PostDetails from './components/PostDetails/PostDetails.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    
    children: [
      {
        path: "about",
        element: <div>Hello from about</div>,
        
      },
      {
        path: "contact",
        element: <Contact/>,
        loader: () => fetch('https://jsonplaceholder.typicode.com/users')
      },
      {
        path: "posts",
        element: <Posts />,
        loader: () => fetch('https://jsonplaceholder.typicode.com/posts')
      },
      {
        path: "posts/:id",
        element: <PostDetails />,
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
      },
      
    ],
    
  },

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
