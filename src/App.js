import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './Components/Home/Home.jsx'
import Rules from './Components/Rules/Rules.jsx';
import Login from './Components/Login/Login.jsx';
import Registation from './Components/Registation/Registation.jsx';
import Contact from './Components/Contact/Contact.jsx';
import Help from './Components/Help/Help.jsx';
import Main from './Components/Layout/Main.jsx';
import Calculate from './Components/Calculate/Calculate.jsx'
import Month from './Components/Month/Month.jsx';
 
const App = () => {
  const route = createBrowserRouter([
    {path: '/', element: <Main/>, children:[
      {path: '/', element: <Home/> },
      {path: '/home', element: <Home/> },
      {path: '/month', element: <Month/>},
      {path: '/calculate', element: <Calculate/> },
      {path: '/rules', element: <Rules/> },
      {path: '/login', element: <Login/> },
      {path: '/registation', element: <Registation/> },
      {path: '/contact', element: <Contact/> },
      {path: '/help', element: <Help/> },
    ] },
    {path: '*', element: <h1>Valsun Sala Contact kor 301 Badhone Head quater</h1> }

  ])
  return (
    <div>
      <RouterProvider router={route}/>
    </div>
  );
};

export default App;