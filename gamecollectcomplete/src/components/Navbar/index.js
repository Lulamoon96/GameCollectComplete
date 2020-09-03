import React from "react";
import LoginButton from "../LoginButton/index"
import LogoutButton from "../LogoutButton/index"
import "./style.css";
import { Link, useLocation } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  const { user, isAuthenticated } = useAuth0()

  const location = useLocation()
  
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">

      <span className="navbar-brand">
        <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
          GameCollectComplete
        </Link>
      </span>
      <span className="navbar-brand secondaryTab">
        <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
          Search Game
        </Link>
      </span>
      
      {isAuthenticated &&       
      <span className="navbar-brand secondaryTab">
        <Link to="/profile" className={location.pathname === "/profile" ? "nav-link active" : "nav-link"}>
          Profile
        </Link>
      </span>
      }

      {isAuthenticated ? <LogoutButton /> : <LoginButton />}

    </nav>
  );
}

export default Navbar;
