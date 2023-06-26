// import DoctorForm from "./components/DoctorForm";
import "./App.css";
import DoctorForm from "./components/DoctorForm";
import DoctorList from "./components/DoctorList";
import Header from "./components/Header";
import Layout from "./components/Layout";
// import DoctorList from "./components/DoctorList";
import SearchDoctor from "./components/SearchDoctor";
import { BrowserRouter, Routes, Route } from "react-router-dom";



function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index  element={<DoctorList title="Doctors List" />} />
          <Route path="searchDoctorByCity" element={<SearchDoctor title="Search Doctor by City" spec="false" />} />
          <Route path="searchDoctorByCityAndSpec" element={<SearchDoctor title="Search Doctor by City and Speciality" spec="true" />} />
          <Route path="addDoctor" element={<DoctorForm title="Doctor Registration"/>} />
          <Route path="doctorListByCity/:city"  element={<DoctorList title="Doctors List" />} />
          <Route path="doctorListByCityAndSpec/:city/:speciality"  element={<DoctorList title="Doctors List" />} />

        </Route>
      </Routes>
    </BrowserRouter> 
    </div>
  );
}
export default App;
