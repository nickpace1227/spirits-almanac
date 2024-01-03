import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Wrapper } from "./styles.js";

export default function CreateUser() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [validName, setValidName] = useState(true);
  const [validUsername, setValidUsername] = useState(true);
  const [validPassword, setValidPassword] = useState(true);
  const [validInfo, setValidInfo] = useState(true);

  useEffect(() => {
    localStorage.setItem(
      "userData",
      JSON.stringify({
        name: name,
        username: username,
        password: password,
      })
    );
  }, [name, username, password]);

  const handleCreateAccount = (e) => {
    e.preventDefault();

    const errorCheck = {
      name: validName,
      username: validUsername,
      password: validPassword,
      accountInfo: validInfo,
    };

    if (name === "") {
      setValidName(false);
      errorCheck.name = false;
    } else {
      errorCheck.name = true;
    }

    if (username === "") {
      setValidUsername(false);
      errorCheck.username = false;
    } else {
      errorCheck.username = true;
    }

    if (password === "") {
      setValidPassword(false);
      errorCheck.password = false;
    } else {
      errorCheck.password = true;
    }

    if (!errorCheck.name || !errorCheck.username || !errorCheck.password) {
      setValidInfo(false);
      errorCheck.accountInfo = false;
      return;
    }

    navigate("/Home");
    sessionStorage.setItem("loggedIn", true);
  };

  return (
    <Wrapper>
      <div className="create-user-page">
        <div>
          <form className="create-user-form" onSubmit={(e) => handleCreateAccount(e)}>
            <p>Create an Account</p>
            <input
              className={validName ? "valid-user-input" : "invalid-user-input"}
              type="text"
              placeholder="Name"
              onChange={(event) => {
                setValidName(true);
                setName(event.target.value)}}
            />
            <input
              className={
                validUsername ? "valid-user-input" : "invalid-user-input"
              }
              type="username"
              placeholder="Username"
              onChange={(event) => {
                setValidUsername(true);
                setUsername(event.target.value)}}
            />
            <input
              className={
                validPassword ? "valid-user-input" : "invalid-user-input"
              }
              type="password"
              placeholder="Password"
              onChange={
                (event) => {
                setPassword(event.target.value)
                setValidPassword(true)}}
            />
            <button
              className="create-user-button"
              type="submit">
              Create Account
            </button>
          </form>
        </div>
      </div>
    </Wrapper>
  );
}
