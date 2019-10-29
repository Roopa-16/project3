import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <Link to="/About" className="navbar-brand">
        StyleFish Icon
      </Link>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to="/Home"
              className={
                window.location.pathname === "/Home"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Go Fish
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className={
                window.location.pathname === "/Closet"
                  ? "nav-link active"
                  : "nav-link"
              }
              to="/Closet"
            >
              Closet
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/LogIn"
              className={
                window.location.pathname === "/LogIn"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Log in
            </Link>
          </li>
          {/* <li className="nav-item">
            <Link
              to="/ClothingDetail"
              className={
                window.location.pathname === "/ClothingDetail"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Clothing Detail
            </Link>
          </li> */}
          {/* <li className="nav-item">
            <Link
              to="/Outfit"
              className={
                window.location.pathname === "/Outfit"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Outfit
            </Link>
          </li> */}
          <li className="nav-item">
            <Link
              to="/About"
              className={
                window.location.pathname === "/About"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              About page
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
