import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'remixicon/fonts/remixicon.css'
// 路由
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './shared/errorPage/errorPage'
import Homepage from './portal/pages/homepage/homepage'
import SideBar from './dashboard/components/sideBar/sideBar'
import Home from './dashboard/pages/home/home'


const router = createBrowserRouter([
  {
    //门户首页
    path: "/",
    element: <Homepage/>,
    errorElement:<ErrorPage/>
  },{
    path: "/dashboard",
    element: <SideBar/>,
    errorElement:<ErrorPage/>,
    children:[
      // dashboard的首页
      {
        path: "",
        element: <Home />,
      }
    ]
  },
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
