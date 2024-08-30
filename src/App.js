import React from 'react';
import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider,  } from 'react-router-dom';

import Home from './components/home/home';
import About from './components/about/about';
import Navi from './components/navbar/navi';
import Display from './components/display/display';
import Footer from './components/footer/footer';
import NavigateLA from './components/navigatela/NavigateLA';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
    {
      path: "/about",
      element: <About/>,
    },
    {
      path: "/display",
      element: <Display/>,
    },
    {
      path: "/navla",
      element: <NavigateLA/>,
    },
  ]);

  
  
  return (
    <>
    <Navi/>
    <RouterProvider router={router}/>
    <Footer/>
    </>
  );
}

export default App;
