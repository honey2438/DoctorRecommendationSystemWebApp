import React from "react";
import { Link, Outlet } from "react-router-dom";
import "../App.css";

function Layout() {
  return (
    <>
      <nav>
        <ul className="flex-row navbar">
          <li>
            <Link to="/">All Doctors</Link>
          </li>
          <li>
            <Link to="/searchDoctorByCity">Search By City</Link>
          </li>
          <li>
            <Link to="searchDoctorByCityAndSpec">Search By City And Spec</Link>
          </li>
          <li>
            <Link to="addDoctor">Add Doctor</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}

export default Layout;
