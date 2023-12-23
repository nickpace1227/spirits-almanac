import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {Wrapper} from './styles.js';

export default function CreateUser() {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const userData = {
      name: name,
      username: username,
      password: password,
    };

    useEffect(() => {
      localStorage.setItem('userData', JSON.stringify(userData));
    }, [userData]);

    const handleCreateAccount = () => {
        navigate("/LoginPage")
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
              className="create-user-input"
              type="text"
              placeholder="Name"
              onChange={(event) => setName(event.target.value)} />
            <input
              className="create-user-input"
              type="username"
              placeholder="Username"
              onChange={(event) => setUsername(event.target.value)}
            />
            <input
              className="create-user-input"
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