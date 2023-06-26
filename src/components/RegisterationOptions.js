import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

function RegisterationOptions({title}) {
  return (
    <div className='flex-column'>
        <h1>{title}</h1>
        
        <div className="search-options-container" >
        <div className="register-options-inner-container flex-column">
        <button className="form-btn">
            <Link to="/addPatient">Register Patient</Link>
          </button>
          <button className="form-btn">
            <Link to="/addDoctor">Register Doctor</Link>
          </button>
        </div>
      </div>
     
    </div>
  )
}

export default RegisterationOptions