import { useEffect, useState } from "react";
import axios from "axios";

function Doctor() {

    const [name, setName] = useState("");
    const [specialization, setSpecialization] = useState("");
    const [experience, setExperience] = useState("");

    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        getDoctors();
    }, []);

    const getDoctors = () => {

        axios.get("http://localhost:8080/doctors")
            .then((response) => {

                setDoctors(response.data);

            })
            .catch((error) => {

                console.log(error);

            });
    };

    const addDoctor = () => {

        const doctor = {

            name: name,
            specialization: specialization,
            experience: experience

        };

        axios.post("http://localhost:8080/doctors", doctor)
            .then((response) => {

                alert("Doctor Added Successfully");

                setName("");
                setSpecialization("");
                setExperience("");

                getDoctors();

            })
            .catch((error) => {

                console.log(error);

            });
    };

    return (

        <div style={{ textAlign: "center" }}>

            <h1>Doctor Management</h1>

            <input
                type="text"
                placeholder="Doctor Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <br /><br />

            <input
                type="text"
                placeholder="Specialization"
                value={specialization}
                onChange={(e) => setSpecialization(e.target.value)}
            />

            <br /><br />

            <input
                type="number"
                placeholder="Experience"
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
            />

            <br /><br />

            <button onClick={addDoctor}>
                Add Doctor
            </button>

            <br /><br />

            <h2>Doctor List</h2>

            <table
                border="1"
                style={{
                    margin: "auto",
                    width: "80%"
                }}
            >
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Specialization</th>
                        <th>Experience</th>
                    </tr>
                </thead>

                <tbody>

                    {doctors.map((doctor) => (

                        <tr key={doctor.id}>

                            <td>{doctor.id}</td>

                            <td>{doctor.name}</td>

                            <td>{doctor.specialization}</td>

                            <td>{doctor.experience}</td>

                        </tr>

                    ))}

                </tbody>

            </table>

        </div>

    );
}

export default Doctor;