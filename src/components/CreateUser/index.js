import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function CreateUser() {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    
    const newUser = {
      name: name,
      username: username,
      password: password,
    };

    useEffect(() => {
      localStorage.setItem(newUser, JSON.stringify({newUser}));
    }, [name]);

    const handleCreateAccount = () => {
        navigate("/LoginPage")
    }

    const handleKeypress = e => {
        if (e.keyCode === 13) {
            handleCreateAccount();
        }
    };


    return (
        <form onKeyDown={handleKeypress}>
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
        <button type="button" onClick={handleCreateAccount}>Create Account</button>
        </form>
    )
};