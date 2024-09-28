import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Home from './pages/home';
import Index from './pages';

const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path="/" element={<App />}>
   <Route index element={<Index />} />
   <Route path="home" element={<Home />} />

   </Route>
)
);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


