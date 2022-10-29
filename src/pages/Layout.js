import React from "react";
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
      <>
      <nav>
      <ul>
         <li className="logo">
<i className="fa fa-home"></i>

<Link style={{textDecoration: 'none', color: '#ffffff'}} to="/">Home</Link>
         </li>
         <li className="about">
<Link style={{textDecoration: 'none', color: '#ffffff'}} to="/about">About</Link>
         </li>                                                                                            
                                                                                   
         </ul>
         </nav>

         <Outlet />
         </>
         )
         };
export default Layout;
