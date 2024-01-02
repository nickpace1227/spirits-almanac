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

  // XXXXXX changed your formatting so that you aren't ALWAYS setting the local storage, but now only when user data changes
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

  // XXXXXX I reworked your logic a bit. but I really don't like the setValidXXX(true) in here.
  // what I would rather do is edit the onChange handlers below for each input to set the field to valid when the user starts typing in it.
  // that way you can remove the setValidXXX(true) from here and just have it in the onChange handlers.
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
    } else {
      setValidName(true);
      errorCheck.name = true;
    }

    if (username === "") {
      setValidUsername(false);
      errorCheck.username = false;
    } else {
      setValidUsername(true);
      errorCheck.username = true;
    }

    if (password === "") {
      setValidPassword(false);
      errorCheck.password = false;
    } else {
      setValidPassword(true);
      errorCheck.password = true;
    }

    if (!errorCheck.name || !errorCheck.username || !errorCheck.password) {
      setValidInfo(false);
      errorCheck.accountInfo = false;
      return;
    }

    navigate("/LoginPage");
    // XXXXXX as part of this action I would go ahead and do all your "login steps" so that a user doesnt have to re-input all their shit.
  };

  const handleKeypress = (e) => {
    if (e.keyCode === 13) {
      handleCreateAccount();
    }
  };

  return (
    <Wrapper>
      <div className="create-user-page">
        <div>
          {/* XXXXXX can change the onKeyDown onSubmit={handleCreateAccount} which has a built in keypress handler, and then you can delete this function*/}
          <form className="create-user-form" onKeyDown={handleKeypress}>
            <p>Create an Account</p>
            <input
              className={validName ? "valid-user-input" : "invalid-user-input"}
              type="text"
              placeholder="Name"
              onChange={(event) => setName(event.target.value)}
            />
            <input
              className={
                validUsername ? "valid-user-input" : "invalid-user-input"
              }
              type="username"
              placeholder="Username"
              onChange={(event) => setUsername(event.target.value)}
            />
            <input
              className={
                validPassword ? "valid-user-input" : "invalid-user-input"
              }
              type="password"
              placeholder="Password"
              onChange={(event) => setPassword(event.target.value)}
            />
            {/* XXXXXX change type to +submit" and delete the onClick handler */}
            <button
              className="create-user-button"
              type="button"
              onClick={handleCreateAccount}
            >
              Create Account
            </button>
          </form>
        </div>
      </div>
    </Wrapper>
  );
}
