
import "./App.css";
import DoctorForm from "./components/DoctorForm";
import DoctorList from "./components/DoctorList";
import Header from "./components/Header";
import Layout from "./components/Layout";
import SearchDoctor from "./components/SearchDoctor";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchOptions from "./components/SearchOptions";
import SearchDoctorByPID from "./components/SearchDoctorByPID";
import PatientForm from "./components/PatientForm";
import RegisterationOptions from "./components/RegisterationOptions";
import HomePage from "./components/HomePage";
import EditOptions from "./components/EditOptions";



function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index  element={<HomePage/>} />
          <Route path="/searchDoctorByCity" element={<SearchDoctor title="Search Doctor by City" spec="false" />} />
          <Route path="/searchDoctorByCityAndSpec" element={<SearchDoctor title="Search Doctor by City and Speciality" spec="true" />} />
          <Route path="/addDoctor" element={<DoctorForm title="Doctor Registration"/>} />
          <Route path="/doctorListByCity/:city"  element={<DoctorList title="Doctors List" />} />
          <Route path="/doctorListByCityAndSpec/:city/:speciality"  element={<DoctorList title="Doctors List" />} />
          <Route path="/doctorListByPID/:pid"  element={<DoctorList title="Doctors List" />} />
          <Route path="/searchDoctorOptions" element={<SearchOptions title="Search Options" />} />
          <Route path="/searchDoctorByPID" element={<SearchDoctorByPID title="Search Doctor by Patient Id" />} />
          <Route path="/allDoctors" element={<DoctorList title="Doctors List" />} />
          <Route path="/addPatient" element={<PatientForm title="Patient Registration"/>} />
          <Route path="/registrationOptions" element={<RegisterationOptions title="Registration Options"/>} />
          <Route path="/editOptions" element={<EditOptions title="Edit Options"/>} />
        </Route>
      </Routes>
    </BrowserRouter> 
    </div>
  );
}
export default App;
