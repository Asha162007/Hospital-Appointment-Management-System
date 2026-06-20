import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Doctor from "./pages/Doctor";
import Patient from "./pages/Patient";
import Appointment from "./pages/Appointment";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/doctors" element={<Doctor />} />
        <Route path="/patients" element={<Patient />} />
        <Route path="/appointments" element={<Appointment />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;