import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {Wrapper} from './styles.js';

export default function CreateUser() {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [validName, setValidName] = useState(true);
    const [validUsername, setValidUsername] = useState(true);
    const [validPassword, setValidPassword] = useState(true);
    const [validInfo, setValidInfo] = useState(true)

    const userData = {
      name: name,
      username: username,
      password: password,
    };

    useEffect(() => {
      localStorage.setItem('userData', JSON.stringify(userData));
    }, [userData]);

    const handleCreateAccount = () => {
      const errorCheck = {
        name: validName,
        username: validUsername,
        password: validPassword,
        accountInfo: validInfo,
      };

      if (name === "") {
        setValidName(false);
        errorCheck.name = false;
      }

      if (username === "") {
        setValidUsername(false);
        errorCheck.username = false;
      }

      if (password === "") {
        setValidPassword(false);
        errorCheck.password = false;
      }

      if (name !== "") {
        setValidName(true);
        errorCheck.name = true;
      }

      if (username !== "") {
        setValidUsername(true);
        errorCheck.username = true;
      }

      if (password !== "") {
        setValidPassword(true);
        errorCheck.password = true;
      }

      if (!errorCheck.name || !errorCheck.username || errorCheck.password) {
        setValidInfo(false);
        errorCheck.accountInfo = false;
      }
      
      if (errorCheck.name && errorCheck.email && errorCheck.password) {
        setValidInfo(true);
        }  

      if (errorCheck.accountInfo) {
        navigate("/LoginPage");
      }
    };

    const handleKeypress = e => {
        if (e.keyCode === 13) {
            handleCreateAccount();
        }
    };


    return (
      <Wrapper>
        <div className="create-user-page">
          <div>
            <form className="create-user-form" onKeyDown={handleKeypress}>
            <p>Create an Account</p>
            <input 
              className={validName ? "valid-user-input" : "invalid-user-input"}
              type="text"
              placeholder="Name"
              onChange={(event) => setName(event.target.value)} />
            <input
              className={validUsername ? "valid-user-input" : "invalid-user-input"}
              type="username"
              placeholder="Username"
              onChange={(event) => setUsername(event.target.value)}
            />
            <input
              className={validPassword ? "valid-user-input" : "invalid-user-input"}
              type="password"
              placeholder="Password"
              onChange={(event) => setPassword(event.target.value)}
            />
            <button className="create-user-button" type="button" onClick={handleCreateAccount}>Create Account</button>
            </form>
          </div>
        </div>
      </Wrapper>
    )
};