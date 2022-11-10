import React from "react";
import { Wrapper } from "./styles";

const ACCEPTABLE_LOGIN = { username: "changeMe", password: "changeMe" };

export default function LoginPage() {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleLogin = () => {
    if (
      username === ACCEPTABLE_LOGIN.username &&
      password === ACCEPTABLE_LOGIN.password
    ) {
      //do login stuff here, like redirect to inventory page
      alert("Login successful!");
    }
  };

  return (
    <Wrapper>
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
    </Wrapper>
  );
}
