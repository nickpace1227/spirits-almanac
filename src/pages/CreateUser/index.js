import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function CreateUser() {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleCreateAccount = () => {
        const newUser = {
            name: name,
            username: username,
            password: password,
        }

        localStorage.setItem('userData', JSON.stringify([...userData, newUser]));
        navigate("/LoginPage")
    }

    const handleKeypress = e => {
        if (e.keyCode === 13) {
            handleCreateAccount();
        }
    };


    return (
        <form onKeyPress={handleKeypress}>
        <p>Create an Account</p>
        <input 
          type="text"
          placeholder="Name"
          onChange={(event) => setName(event.target.value)} />
          <br/>
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
        <button type="button" onClick={handleCreateAccount}>Login</button>
        </form>
    )
}