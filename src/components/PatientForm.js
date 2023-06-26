import React, { useState } from "react";

function PatientForm({ title }) {
  const initialState = {
    name: "",
    email: "",
    phone: "",
    city: "",
    symptom: "",
  };
  const [data, setData] = useState(initialState);

  function reset(event) {
    event.preventDefault();
    setData(initialState);
  }

  async function postFunction(event) {
    event.preventDefault();
    console.log(data);
    // Simple POST request with a JSON body using fetch
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=UTF-8" },
      body: JSON.stringify(data),
    };
    try {
      const response = await fetch(
        "http://localhost:8080/patient/save-patient",
        requestOptions
      );
      const responseStatus = response.status;
      if (responseStatus === 404) {
        const validation = await response.json();
        const messages = validation.messages;
        let messagesString = "";
        for (var i = 0; i < messages.length; i++) {
          messagesString += messages[i] + "\n";
        }
        alert(messagesString);
      } else {
        alert("Patient Added Successfully");
      }
    } catch (error) {
      alert("Error Occured " + error);
    }
  }
  return (
    <div className="flex-column">
      <h1>{title}</h1>
      <div className="form-container flex-center">
        <form className="doctor-form flex-column">
          <div className="inputgroup">
            <label className="form-label" htmlFor="name">
              Name*
            </label>
            <input
              required
              className="form-input"
              id="name"
              name="name"
              onChange={(e) => {
                setData({ ...data, name: e.target.value });
              }}
              value={data.name}
            />
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
              onChange={(e) => {
                setData({ ...data, email: e.target.value });
              }}
              value={data.email}
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
              onChange={(e) => {
                setData({ ...data, phone: e.target.value });
              }}
              value={data.phone}
            />
          </div>
          <div className="inputgroup">
            <label className="form-label" htmlFor="city">
              City*
            </label>
            <input
              required
              className="form-input"
              id="city"
              name="city"
              type="city"
              onChange={(e) => {
                setData({ ...data, city: e.target.value });
              }}
              value={data.city}
            />
          </div>
          <div className="inputgroup">
            <label className="form-label" htmlFor="speciality">
              Symptom*
            </label>
            <select
              className="form-input"
              id="speciality"
              name="speciality"
              onChange={(e) => {
                setData({ ...data, symptom: e.target.value });
              }}
              value={data.speciality}
            >
              <option value="arthritis">Arthritis</option>
              <option value="backpain">Backpain</option>
              <option value="tissue injuries">Tissue Injuries</option>
              <option value="dysmenorrhea">Dysmenorrhea</option>
              <option value="skin infection">Skin Infection</option>
              <option value="skin burn">Skin Burn</option>
              <option value="ear pain">Ear Pain</option>
            </select>
          </div>
          <div className="inputgroup">
            <button className="form-btn" onClick={postFunction}>
              Add
            </button>
            <button className="form-btn" onClick={reset}>
              Clear
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PatientForm;
