import React, { useState } from "react";
import "./navbar.css";


import { NavLink } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  const { loginWithRedirect } = useAuth0();
  const { logout } = useAuth0();
  const { isAuthenticated } = useAuth0();
  const { user } = useAuth0();

  return (
    <>
      <nav className="main-nav">
        {/* 1st logo part  */}
        <div className="logo">
          <h2>
            <span>B</span>udget
            <span>-E</span>xpense
            <span>T</span>racker
          </h2>
        </div>

        {/* 2nd menu part  */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">about</NavLink>
            
            </li>

            <li>{isAuthenticated && <p> {user.name} </p>}</li>
          
            {isAuthenticated ? (
              <li>
                <button className= "b1" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                  Log Out
                </button>
              </li> 
            ) : ( 
              <li>
                <button className= "b1" onClick={() => loginWithRedirect()}>Log In</button>
              </li>
            )}
           
            <li>
              <NavLink to="/service">service</NavLink>
            </li>
          </ul>
        </div>

       
      </nav>

      {/* hero section  */}
      {/* <section className="hero-section">
        <p>Welcome to </p>
        <h1>Thapa Technical</h1>
      </section> */}
    </>
  );
};

export default Navbar;
