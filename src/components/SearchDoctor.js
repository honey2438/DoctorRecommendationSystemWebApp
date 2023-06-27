import React, { useState } from "react";
// import "../App.css";
import { Link } from "react-router-dom";

function SearchDoctor({ title, spec }) {
  const [city, setCity] = useState("");
  const [speciality, setSpeciality] = useState("");
  const url=spec==="true"?`/doctorListByCityAndSpec/${city}/${speciality}`:`/doctorListByCity/${city}`;
  const searchDoctor = async (event) => {
    event.preventDefault();
    return url;
  };
  const resetForm = (event) => {
    event.preventDefault();
    setCity("");
    setSpeciality("");
  };
  return (
    <div className="flex-column">
      <h1>{title}</h1>
      <div className="search-form-container flex-center">
        <form className="doctor-form flex-column">
          <div className="inputgroup">
            <label className="form-label" htmlFor="name">
              City*
            </label>
            <input
              required
              className="form-input"
              id="name"
              name="name"
              onChange={(e) => {
                setCity(e.target.value);
              }}
              value={city}
            />
          </div>
          <div className="inputgroup">
            <label className="form-label" htmlFor="name">
              Speciality*
            </label>
            <input
              disabled={spec !== "true"}
              required
              className="form-input"
              id="name"
              name="name"
              onChange={(e) => {
                setSpeciality(e.target.value);
              }}
              value={speciality}
            />
          </div>
          <div className="flex-center inputgroup">
            
              <button className="form-btn" onClick={(e)=>{e.preventDefault();}}><Link to={url}>Search</Link></button>
           
            <button className="form-btn" onClick={resetForm}>
              Clear
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SearchDoctor;
