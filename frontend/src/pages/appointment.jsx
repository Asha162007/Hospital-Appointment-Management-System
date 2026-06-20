import { useEffect, useState } from "react";
import axios from "axios";

function Appointment() {

    const [appointmentDate, setAppointmentDate] = useState("");
    const [status, setStatus] = useState("");

    const [patientId, setPatientId] = useState("");
    const [doctorId, setDoctorId] = useState("");

    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        getAppointments();
    }, []);

    const getAppointments = () => {

        axios.get("http://localhost:8080/appointments")
            .then((response) => {

                setAppointments(response.data);

            })
            .catch((error) => {

                console.log(error);

            });
    };

    const bookAppointment = () => {

        const appointment = {

            appointmentDate: appointmentDate,

            status: status,

            patient: {
                id: patientId
            },

            doctor: {
                id: doctorId
            }
        };

        axios.post("http://localhost:8080/appointments", appointment)
            .then((response) => {

                alert("Appointment Booked Successfully");

                setAppointmentDate("");
                setStatus("");
                setPatientId("");
                setDoctorId("");

                getAppointments();

            })
            .catch((error) => {

                console.log(error);

            });
    };

    return (

        <div style={{ textAlign: "center" }}>

            <h1>Appointment Management</h1>

            <input
                type="date"
                value={appointmentDate}
                onChange={(e) => setAppointmentDate(e.target.value)}
            />

            <br /><br />

            <input
                type="text"
                placeholder="Status"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
            />

            <br /><br />

            <input
                type="number"
                placeholder="Patient ID"
                value={patientId}
                onChange={(e) => setPatientId(e.target.value)}
            />

            <br /><br />

            <input
                type="number"
                placeholder="Doctor ID"
                value={doctorId}
                onChange={(e) => setDoctorId(e.target.value)}
            />

            <br /><br />

            <button onClick={bookAppointment}>
                Book Appointment
            </button>

            <br /><br />

            <h2>Appointment List</h2>

            <table
                border="1"
                style={{
                    margin: "auto",
                    width: "90%"
                }}
            >
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Date</th>
                        <th>Status</th>
                        <th>Patient ID</th>
                        <th>Doctor ID</th>
                    </tr>
                </thead>

                <tbody>

                    {appointments.map((appointment) => (

                        <tr key={appointment.id}>

                            <td>{appointment.id}</td>

                            <td>{appointment.appointmentDate}</td>

                            <td>{appointment.status}</td>

                            <td>{appointment.patient?.id}</td>

                            <td>{appointment.doctor?.id}</td>

                        </tr>

                    ))}

                </tbody>

            </table>

        </div>

    );
}

export default Appointment;