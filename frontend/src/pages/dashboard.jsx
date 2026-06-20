function Dashboard() {

    return (

        <div style={{textAlign:"center"}}>

            <h1>Hospital Appointment Management System</h1>

            <br />

            <a href="/doctors">
                <button>Doctors</button>
            </a>

            <br /><br />

            <a href="/patients">
                <button>Patients</button>
            </a>

            <br /><br />

            <a href="/appointments">
                <button>Appointments</button>
            </a>

        </div>

    );
}

export default Dashboard;