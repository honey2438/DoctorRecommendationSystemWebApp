import React, { useState } from "react";

function DoctorForm() {
  let [data, setData] = useState({});

  let postData = (event) => {
    event.preventDefault();

    let name = document.getElementsByClassName("form-input")[0];
    let email = document.getElementsByClassName("form-input")[1];
    let phone = document.getElementsByClassName("form-input")[2];
    let city;
    let i = 0;
    let cit = document.getElementById("city");
    for (i = 0; i < cit.length; i++) {
      if (cit[i].selected) {
        city = cit[i];
        break;
      }
    }
    let speciality;
    let spec = document.getElementById("speciality");
    for (i = 0; i < spec.length; i++) {
      if (spec[i].selected) {
        speciality = spec[i];
        break;
      }
    }

    data = {
      name: name.value,
      city: city.value,
      speciality: speciality.value,
      phone: phone.value,
      email: email.value,
    };
    setData(data);
    postFunction();
  };

  async function postFunction() {
    // Simple POST request with a JSON body using fetch
    var requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=UTF-8" },
      body: JSON.stringify(data),
    };
    var response = await fetch(
      "http://localhost:8080/doctor/save-doctor",
      requestOptions
    );
    var responseData =  response.status;
    if(responseData === 404){
        var validation=await response.json();
        var messages=validation.messages;
        var messagesString="";
        for(var i=0;i<messages.length;i++){
            messagesString+= messages[i]+"\n";
        }
        alert(messagesString);
    }
    if(responseData === 200){
        alert("Doctor Added Successfully");
    }
  }
  return (
    <div className="form-container flex-center">
      <form className="doctor-form flex-column">
        <div className="inputgroup">
          <label className="form-label" htmlFor="name">
            Name*
          </label>
          <input required className="form-input" id="name" name="name" />
        </div>
        <div className="inputgroup">
          <label className="form-label" htmlFor="email">
            Email*
          </label>
          <input
            required
            className="form-input"
            id="email"
            name="email"
            type="email"
          />
        </div>
        <div className="inputgroup">
          <label className="form-label" htmlFor="phone">
            Phone No*
          </label>
          <input
            required
            className="form-input"
            id="phone"
            name="phone"
            type="phone"
          />
        </div>
        <div className="inputgroup">
          <label className="form-label" htmlFor="city">
            City*
          </label>
          <select id="city" name="city" className="form-input">
            <option value="Noida">Noida</option>
            <option value="Delhi">Delhi</option>
            <option value="Faridabad">Faridabad</option>
          </select>
        </div>
        <div className="inputgroup">
          <label className="form-label" htmlFor="speciality">
            Speciality*
          </label>
          <select className="form-input" id="speciality" name="speciality">
            <option value="orthopedic">Orthopedic</option>
            <option value="gynecology">Gynecology</option>
            <option value="dermatology">Dermatology</option>
            <option value="ent">ENT</option>
          </select>
        </div>
        <div className="inputgroup">
          <button className="form-btn" onClick={postData}>
            Add
          </button>
          <button className="form-btn">Clear</button>
        </div>
      </form>
    </div>
  );
}

export default DoctorForm;
