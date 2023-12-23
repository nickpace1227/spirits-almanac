import React, {useState, useEffect} from "react";
import { Wrapper } from "./styles";
import {useNavigate, Link} from "react-router-dom";



export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginData, setLoginData] = useState("pizza");
  const navigate = useNavigate();
  const refreshPage = () => {
    window.location.reload(false)
  };

  useEffect(() => {
    const loginData = JSON.parse(localStorage.getItem("userData"));
    if (loginData) {
      setLoginData(loginData)
    }
  }, []);

  const handleLogin = () => {
    if (
      (username === loginData.username &&
      password === loginData.password)
    ) {
      navigate("/Home");
      localStorage.setItem("loggedIn", true);
    } else {
      alert("Incorrect Username or Password");
      refreshPage()
    }
  };

  const handleKeypress = e => {
    if (e.keyCode === 13) {
      handleLogin();

    }
  };

  return (
    <Wrapper>
      <form className="login-page" onKeyDown={handleKeypress}>
      <p className="login-title">Login</p>
      <input
        type="username"
        placeholder="Username"
        onChange={(event) => setUsername(event.target.value)}
      />
      <br />
      <input
        type="password"
        placeholder="Password"
        onChange={(event) => setPassword(event.target.value)}
      />
      <br />
      <button type="button" onClick={handleLogin}>Login</button>
      </form>
      <h3>Don't have an account? Click <Link to="/CreateUser">Here!</Link></h3>
    </Wrapper>
  );
}
