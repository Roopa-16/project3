import React from "react";

function Jumbotron({ children }) {
  return (
    <div
      style={{ height: 100, clear: "both", paddingBottom: 200, textAlign: "center", float:"inherit"}}
      className="jumbotron"
    >
      {children}
    </div>
  );
}

export default Jumbotron;
