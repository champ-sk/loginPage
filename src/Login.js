import { useState } from "react";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userName ==="user" && password ==="password") {
      setMessage("Welcome user!");
      setIsSubmitted(true);
    }else{
        setMessage("Invalid username or password");
        
    }
    setUserName("");
    setPassword("");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h1> Login Page</h1>
        {isSubmitted ? (<p>{message}</p>):(

<form onSubmit={handleSubmit}>
<div>
<p>{message}</p>
  <label>Username</label>
  <br />
  <input
    type="text"
    value={userName}
    onChange={(e) => setUserName(e.target.value)}
    placeholder="Enter username"
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
    placeholder="Enter password"
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
