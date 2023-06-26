import React from "react";
import { Link, Outlet } from "react-router-dom";
import "../App.css";

function Layout() {
  return (
    <>
      <nav>
        <ul className="flex-row navbar">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/registrationOptions">Register</Link>
          </li>
          <li>
            <Link to="/editOptions">Edit</Link>
          </li>
          <li>
            <Link to="/searchDoctorOptions">Search Doctor</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}

export default Layout;
