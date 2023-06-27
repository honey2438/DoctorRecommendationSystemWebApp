import React,{useState} from 'react';
// import '../App.css';
import {Link} from 'react-router-dom';


function SearchDoctorByPID({title}) {
  const[PID,setPID]=useState("");
  const url=`/doctorListByPID/${PID}`;
  const reset=()=>{
    setPID("");
  }

  return (
    <div className="flex-column">
    <h1>{title}</h1>
    <div className="search-form-container flex-center">
      <form className="doctor-form flex-column">
        
        <div className="inputgroup">
          <label className="form-label" htmlFor="pid">
            Patient Id*
          </label>
          <input
           
            required
            className="form-input"
            id="pid"
            name="pid"
            onChange={(e) => {
              setPID(e.target.value);
            }}
            value={PID}
          />
        </div>
        <div className="flex-center inputgroup">
          
            <button className="form-btn"><Link to={url}>Search</Link></button>
         
          <button className="form-btn" onClick={reset}>
            Clear
          </button>
        </div>
      </form>
    </div>
  </div>
  )
}

export default SearchDoctorByPID