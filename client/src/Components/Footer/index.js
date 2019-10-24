import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Footer() {
  return (
    <footer id="sticky-footer" className="py-4 bg-dark text-white-50">
      <div className="container text-center">
        <small>Copyright &copy; Your Website</small>
      </div>
    </footer>
  );
}

export default Footer;
