import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./styles/reset.css";
import "./styles/global.css";

import HomePage from './pages/HomePage.jsx';
import ProjectPage from './pages/ProjectPage.jsx';
import LoginPage from "./pages/LoginPage.jsx";
import CreateAccountPage from './pages/CreateAccountPage.jsx';
import CreateProjectPage from './pages/CreateProjectPage.jsx';
import CreatePledgePage from './pages/CreatePledgePage.jsx';

import NavBar from "./components/NavBar.jsx";



const router = createBrowserRouter ([
  {
    path: "/",
    element: <NavBar/>,
    children: [
      { path: "/", element: <HomePage />},
      { path: "/login", element: <LoginPage /> },
      { path: "/createaccount", element: <CreateAccountPage /> },
      { path: "/projects", element: <CreateProjectPage /> },
      { path: "/project/:id", element: <ProjectPage />},
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
