import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'mapbox-gl/dist/mapbox-gl.css';
import reportWebVitals from './reportWebVitals';

import { Login } from "./pages/login";
import { Registration } from "./pages/registration";
import { Sitter } from "./pages/sitter";
import { Profile } from "./pages/profile";
import { Homepage } from "./pages/homepage";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/registration",
    element: <Registration />
  },
  {
    path: "/profile",
    element: <Profile />
  },
  {
    path: "/sitter",
    element: <Sitter />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <RouterProvider router={router} />
   
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
