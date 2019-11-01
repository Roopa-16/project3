import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import { logOut } from "../../utils/Session";
import { Redirect } from "react-router-dom";

function Nav(props) {
  //   useEffect(()=> {
  // console.log(`inside use effect, see this once`);
  // console.log(props);
  //   })

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-primary">
      <Link to="/Home" className="navbar-brand">
        <img
          src="/assets/logoStyleFish.png"
          width="50px"
          height="50px"
          className="logo"
        ></img>
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

          <li className="nav-item">
            <Link
              to="/LogIn"
              className={
                window.location.pathname === "/LogOut"
                  ? "nav-link active"
                  : "nav-link"
              }
              onClick={() => {
                logOut();
              }}
            >
              Log Out
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;

/* {props.isAuthed ? (
            <li className="nav-item">
              <Link
                to="/LogOut"
                className={
                  window.location.pathname === "/LogOut"
                    ? "nav-link active"
                    : "nav-link"
                }
                onClick={() => {
                  props.setIsAuthed(false);
                }}
              >
                Log Out
              </Link>
            </li>
          ) : (
            ""
          )} */
