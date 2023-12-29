import React, {useState, useEffect} from "react";
import { Wrapper } from "./styles";
import {useNavigate, Link} from "react-router-dom";



export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginData, setLoginData] = useState("pizza");
  const [validUsername, setValidUsername] = useState(true);
  const [validPassword, setValidPassword] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const loginData = JSON.parse(localStorage.getItem("userData"));
    if (loginData) {
      setLoginData(loginData)
    }
  }, []);

  const handleLogin = () => {
    const errorCheck = {
      username: validUsername,
      password: validPassword,
    }

    if (username === "") {
      setValidUsername(false);
      errorCheck.username = false;
    }

    if (password === "") {
      setValidPassword(false);
      errorCheck.password = false;
    }

    if (loginData.username === username) {
      errorCheck.username = true;
    }

    if (loginData.password === password) {
      errorCheck.password = true;
    }

    if (
      (username === loginData.username &&
      password === loginData.password)
    ) {
      navigate("/Home");
    }
  };

  const handleKeypress = e => {
    if (e.keyCode === 13) {
      handleLogin();

    }
  };

  return (
    <Wrapper>
      <div className="login-page">
        <form className="login-form" onKeyDown={handleKeypress}>
        <p className="login-title">Login</p>
        <div className="login-form">
        <input
        className={validUsername ? "login-input" : "invalid-input"}
        type="username"
        placeholder="Username"
        onChange={
          (event) => {setUsername(event.target.value);
          setValidUsername(true)}}
        />
        <input
        className={validPassword ? "login-input" : "invalid-input"}
        type="password"
        placeholder="Password"
        onChange={
          (event) => {setPassword(event.target.value)
          setValidPassword(true)}}
        />
        </div>
        <button className="login-button" type="button" onClick={handleLogin}>Login</button>
        </form>
        <h3>Don't have an account? Click <Link to="/CreateUser">Here!</Link></h3>
      </div>
    </Wrapper>
  );
}
