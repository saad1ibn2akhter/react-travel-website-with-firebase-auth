import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root.jsx';
import Home from './components/Home/Home.jsx';
import Login from './components/Login/Login.jsx';
import Register from './components/Register/Register.jsx';
import SingleSlide from './components/Home/SingleSlide.jsx';
import TravelBooking from './components/Home/TravelBooking.jsx';
import Hotel from './components/Home/Hotel/Hotel.jsx';
import AuthProvider from './components/providers/AuthProvider.jsx';
import PrivateRoute from './components/routes/PrivateRoute.jsx';
import Profile from './components/Profile/Profile.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('/slide.json')
      },
      {
        path: '/Login',
        element: <Login></Login>
      },
      {
        path: '/Register',
        element: <Register></Register>
      },
      // {
      //   path:'/SingleSlide',
      //   element:<SingleSlide></SingleSlide>
      // }
      {
        path: '/TravelBooking/:id',
        element: <PrivateRoute><TravelBooking></TravelBooking></PrivateRoute>,
        loader: () => fetch('/slide.json')
      },
      {
        path: '/Hotel/:id',
        element: <Hotel></Hotel>,
        loader: () => fetch('/slide.json')
      },
      {
        path:'/Profile',
        element:<Profile></Profile>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
        <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
