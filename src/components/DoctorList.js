import React, { useEffect, useState } from "react";
import "../App.css";
import { useParams } from "react-router-dom";

function DoctorList({ title }) {
    
    const [url, setUrl] = useState("");
    const params=useParams();
  useEffect(() => {
    checkParams();
  }, [url]);

 
  const initialState={
    name:"",
    email:"",
    phone:"",
    city:"",
    speciality:""
    }
  const [doctors, setDoctors] = useState([initialState]);
 
  const checkParams = async () => {
   
    if('city' in params && 'speciality' in params){
        setUrl(`http://localhost:8080/doctor/doctor-list-by-city-and-speciality?city=${params.city}&speciality=${params.speciality}`);
        console.log(params.city," ",params.speciality)
        fetchDoctors();

    }
    else if('city' in params){
        setUrl(`http://localhost:8080/doctor/doctor-list-by-city?city=${params.city}`);
        console.log(params.city);
        fetchDoctors();
    }
    else{       
        setUrl("http://localhost:8080/doctor/doctor-list");
        fetchDoctors();
    }
    
  };

  async function fetchDoctors() {
    try {
        if(url!==""){
        const response = await fetch(url);
        const responseStatus = response.status;
        if (responseStatus === 404) {
          const res = await response.json();
          console.log(res);
        } else {
          const doctors = await response.json();
          setDoctors(doctors);
          console.log(doctors);
        }
      }
      } catch (error) {
        alert("Error Occured " + error);
      }
    }
 
  return (
    <div className="flex-column doctor-list-container">
      <h1>{title}</h1>
      <table className="doctor-table">
        <thead>
          <tr className="row-data-alignment doctor-table-head">
            <td><b>Doctor Id</b></td>
            <td>
              <b>Name</b>
            </td>
            <td>
              <b>Email</b>
            </td>
            <td>
              <b>Phone</b>
            </td>
            <td>
              <b>City</b>
            </td>
            <td>
              <b>Speciality</b>
            </td>
          </tr>
        </thead>
        <tbody>
          {doctors.map((doctor) => (
            <tr key={doctor.did} className="row-data-alignment">
              <td>{doctor.did}</td>
              <td>{doctor.name}</td>
              <td>{doctor.email}</td>
              <td>{doctor.phone}</td>
              <td>{doctor.city}</td>
              <td>{doctor.speciality}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DoctorList;
