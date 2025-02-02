import { useState } from "react";

const Login = ()=>{
    const [userName  , setUserName]  =useState("");
    const [password, setPassword] = useState("");
    const [isLoggedIn , setIsLoggedIn] = useState(false) ;

    const handleSubmit = (e)=>{
e.preventDefault();
if(!userName.trim() && !password.trim()){
    setIsLoggedIn(true) ;
}

    }

    return(
        <div>
            <h1>Login Page </h1>
{isLoggedIn? (
    <h2 className="text-xl font-bold">Welcome, {userName}!</h2>
):(
    <>
     <form onSubmit={handleSubmit}>
                <h4>UserName</h4>
                <input
                type="text"
                placeholder="username"
                onChange={(e)=>setUserName(e.target.value)}/>
                <h4>Password</h4>
                <input
                type="text"
                placeholder="password"
                onChange={(e)=>setPassword(e.target.value)}
                />
                <button type="submit">
                    Submit
                </button>

            </form>
    </>
)}
           
        </div>
    )
}
export default Login;
