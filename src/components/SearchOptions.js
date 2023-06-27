import React from "react";
import { Link } from "react-router-dom";
// import "../App.css";

function SearchOptions({ title }) {
  return (
    <div className="flex-column">
      <h1>{title}</h1>
      <div className="search-options-container" >
        <div className="search-options-inner-container flex-column">
        <button className="form-btn">
            <Link to="/allDoctors">All Doctors</Link>
          </button>
          <button className="form-btn">
            <Link to="/searchDoctorByCity">Search By City</Link>
          </button>
          <button className="form-btn">
            <Link to="/searchDoctorByCityAndSpec">Search By City and Speciality</Link>
          </button>
          <button className="form-btn">
            <Link to="/searchDoctorByPID">Search By PID</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default SearchOptions;
