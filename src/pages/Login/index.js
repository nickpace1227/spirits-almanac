import React from "react";
import { Wrapper } from "./styles";
import {useNavigate, Link} from "react-router-dom";

const ACCEPTABLE_LOGIN = { username: "changeMe", password: "changeMe" };

export default function LoginPage() {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const navigate = useNavigate();
  const refreshPage = () => {
    window.location.reload(false)
  }

  const handleLogin = () => {
    if (
      username === ACCEPTABLE_LOGIN.username &&
      password === ACCEPTABLE_LOGIN.password
    ) {
      //do login stuff here, like redirect to inventory page
      navigate("/landing")
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
      <form onKeyPress={handleKeypress}>
      <p>Login</p>
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
      <button onClick={handleLogin}>Login</button>
      </form>
      <h3>Don't have an account? Click <Link to="/CreateUser">Here!</Link></h3>
    </Wrapper>
  );
}
