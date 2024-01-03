import React, { useState, useEffect } from "react";
import { Wrapper } from "./styles";
import { useNavigate, Link } from "react-router-dom";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginData, setLoginData] = useState("");
  const [validUsername, setValidUsername] = useState(true);
  const [validPassword, setValidPassword] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const loginData = JSON.parse(localStorage.getItem("userData"));
    if (loginData) {
      setLoginData(loginData);
    }
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();

    const errorCheck = {
      username: validUsername,
      password: validPassword,
    };

    if (username === "" || username !== loginData.username) {
      setValidUsername(false);
      errorCheck.username = false;
    }

    if (password === "" || password !== loginData.password) {
      setValidPassword(false);
      errorCheck.password = false;
    }

    if (username === loginData.username && password === loginData.password) {
      navigate("/Home");
      sessionStorage.setItem("loggedIn", true);
    }
  };

  return (
    <Wrapper>
      <div className="login-page">
        <form className="login-form" onSubmit={ (e) => {handleLogin(e)}}>
          <p className="login-title">Login</p>
          <div className="login-form">
            <input
              className={validUsername ? "valid-input" : "invalid-input"}
              type="username"
              placeholder="Username"
              onChange={(event) => {
                setUsername(event.target.value);
                setValidUsername(true);
              }}
            />
            <input
              className={validPassword ? "valid-input" : "invalid-input"}
              type="password"
              placeholder="Password"
              onChange={(event) => {
                setPassword(event.target.value);
                setValidPassword(true);
              }}
            />
          </div>
          <button className="login-button" type="submit">
            Login
          </button>
        </form>
        <div className="create-account">
          Don't have an account? Click <Link to="/CreateUser">Here!</Link>
        </div>
      </div>
    </Wrapper>
  );
}
