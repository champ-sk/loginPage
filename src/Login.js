import { useState } from "react";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userName === "user" && password === "password") {
      setMessage("");
      setIsLoggedIn(true);
    } else {
      setMessage("Invalid username or password");
    }
  };

  return (
    <div className="login-container">
      <h1>Login Page</h1>
      {isLoggedIn && <p>Welcome, {userName}!</p>}
      <form onSubmit={handleSubmit} style={{ display: isLoggedIn ? "none" : "block" }}>
        {message && <p>{message}</p>}
        
        {/* ✅ FIX: Associate the label with input using htmlFor */}
        <div>
          <label htmlFor="username">Username</label>
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
          <label htmlFor="password">Password</label>
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
    </div>
  );
};

export default Login;
