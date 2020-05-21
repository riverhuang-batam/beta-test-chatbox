import React from "react";
import { NavLink } from "react-router-dom";
import "../style.css";

export default function Sidebar() {
  const logOut = () => {
    localStorage.clear();
    window.location.href = "/";
  };
  return (
    <div style={{ width: "75px", height: "100vh", backgroundColor: "#1f2d3c" }}>
      <div className="list-group">
        <NavLink to="/" className="list-group-item list-group-item-action">
          <i className="fas fa-comment-dots fa-lg" />
        </NavLink>

        <NavLink
          to="/profile"
          className="list-group-item list-group-item-action"
        >
          <i className="fas fa-user-circle fa-lg" />
        </NavLink>
        {/* <NavLink to="/group" className="list-group-item list-group-item-action">
          Group
        </NavLink> */}
        <NavLink
          to="/listContact"
          className="list-group-item list-group-item-action"
        >
          <i className="fas fa-users fa-lg" />
        </NavLink>
        <NavLink to="/about" className="list-group-item list-group-item-action">
          <i className="fas fa-info-circle fa-lg" />
        </NavLink>
        <a
          href="/"
          onClick={logOut}
          className="mb-auto list-group-item list-group-item-action mt-auto"
        >
          <i className="fas fa-sign-out-alt fa-lg" />
        </a>
      </div>
    </div>
  );
}
