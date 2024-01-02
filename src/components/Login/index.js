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

  const handleLogin = () => {
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
      localStorage.setItem("loggedIn", true);
      navigate("/Home");
    }
  };

  const handleKeypress = (e) => {
    if (e.keyCode === 13) {
      handleLogin();
    }
  };

  return (
    <Wrapper>
      <div className="login-page">
        {/* XXXXXX can change the onKeyDown onSubmit={handleLogin} which has a built in keypress handler, and then you can delete this function*/}
        <form className="login-form" onKeyDown={handleKeypress}>
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
              // this is EXACTLY what I mean. this is the proper way to reset the validation for a field.
              onChange={(event) => {
                setPassword(event.target.value);
                setValidPassword(true);
              }}
            />
          </div>
          {/* change this button to type='submit' and then delete the onClick handler */}
          <button className="login-button" type="button" onClick={handleLogin}>
            Login
          </button>
        </form>
        {/* this H3 is bigger in size than the login-title above. you should not have bigger sub-titles than main-titles */}
        <h3>
          Don't have an account? Click <Link to="/CreateUser">Here!</Link>
        </h3>
      </div>
    </Wrapper>
  );
}
