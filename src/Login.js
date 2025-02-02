import { useState } from "react";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userName === "user" && password === "password") {
      setMessage("");
      setIsSubmitted(true);
    } else {
      setMessage("Invalid username or password");
      setIsSubmitted(false);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1> Login Page</h1>
      {isSubmitted ? (
        <p> Welcome, {userName} !</p>
      ) : (
        <form onSubmit={handleSubmit}>
          {message && <p>{message}</p>}
          <div>
            <label>Username</label>
            <br />
            <input
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              placeholder="username"
              id="username"
              required
            />
          </div>
          <br />
          <div>
            <label>Password</label>
            <br />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="password"
              id="password"
              required
            />
          </div>
          <br />
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
};
export default Login;
