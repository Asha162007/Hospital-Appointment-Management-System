import { useEffect, useState } from "react";
import axios from "axios";

function Patient() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const [patients, setPatients] = useState([]);

    useEffect(() => {
        getPatients();
    }, []);

    const getPatients = () => {

        axios.get("http://localhost:8080/patients")
            .then((response) => {

                setPatients(response.data);

            })
            .catch((error) => {

                console.log(error);

            });
    };

    const addPatient = () => {

        const patient = {
            name,
            email,
            phone
        };

        axios.post("http://localhost:8080/patients", patient)
            .then((response) => {

                alert("Patient Added Successfully");

                setName("");
                setEmail("");
                setPhone("");

                getPatients();

            })
            .catch((error) => {

                console.log(error);

            });
    };

    return (

        <div style={{ textAlign: "center" }}>

            <h1>Patient Management</h1>

            <input
                type="text"
                placeholder="Patient Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <br /><br />

            <input
                type="email"
                placeholder="Patient Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <br /><br />

            <input
                type="text"
                placeholder="Patient Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
            />

            <br /><br />

            <button onClick={addPatient}>
                Add Patient
            </button>

            <br /><br />

            <h2>Patient List</h2>

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
                        <th>Email</th>
                        <th>Phone</th>
                    </tr>

                </thead>

                <tbody>

                    {patients.map((patient) => (

                        <tr key={patient.id}>

                            <td>{patient.id}</td>
                            <td>{patient.name}</td>
                            <td>{patient.email}</td>
                            <td>{patient.phone}</td>

                        </tr>

                    ))}

                </tbody>

            </table>

        </div>

    );
}

export default Patient;