import React, { useEffect, useState } from "react";
// import "../App.css";
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
  const [filterDoctors, setFilterDocotors] = useState([initialState]);
  const [searchText,setSearchText]=useState("");
 
  const checkParams = async () => {
    if('pid' in params){
        setUrl(`http://localhost:8080/doctor/doctor-by-pid?PID=${params.pid}`);
        console.log(params.pid);
        fetchDoctors();
    }
    else if('city' in params && 'speciality' in params){
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
        if(url==="")return;
        const response = await fetch(url);
        const responseStatus = response.status;
        if (responseStatus === 404) {
          const res = await response.json();
          alert(res);
          console.log(res);
        } else {
          const responseDoctors = await response.json();
          setDoctors(responseDoctors);
          setFilterDocotors(responseDoctors);
          console.log(responseDoctors);
        }
      } catch (error) {
        alert("Error Occured " + error);
      }
    }
 
    function search(){
      if(searchText===""){
        setFilterDocotors(doctors);
        return;
      }
        const filteredDoctors=doctors.filter((doctor)=>{
            return doctor.name.toLowerCase().includes(searchText.toLowerCase()) || doctor.city.toLowerCase().includes(searchText.toLowerCase()) || doctor.speciality.toLowerCase().includes(searchText.toLowerCase()) || doctor.email.includes(searchText) || doctor.phone.includes(searchText);
        });
        console.log(filteredDoctors)
        setFilterDocotors(filteredDoctors);
    }
    useEffect(() => {
        search();
    }, [searchText]);
  return (
    <div className="flex-column doctor-list-container">
      <h1>{title}</h1>
      <div className="flex-last">
            
            <input
              id="search"
              name="search"
              placeholder="Search"
              onChange={(e)=>{setSearchText(e.target.value)}} 
              value={searchText}
              
            />
          </div>
      
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
          {filterDoctors.map((doctor) => (
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
