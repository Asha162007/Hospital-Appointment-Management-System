function Login() {

    const login = () => {

        localStorage.setItem("isLoggedIn", "true");

        window.location.href = "/dashboard";
    };

    return (

        <div style={{textAlign:"center",marginTop:"100px"}}>

            <h1>Hospital Login</h1>

            <input type="text" placeholder="Username" />

            <br /><br />

            <input type="password" placeholder="Password" />

            <br /><br />

            <button onClick={login}>
                Login
            </button>

        </div>
    );
}

export default Login;