import React, {useState} from "react"
import "./style.css"

export const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) =>{
    e.preventDefault()
    console.log(email);
  }

  return (
    <div className="App">
      <div className="auth-form-container">
          <h2>Login</h2>
          <form onSubmit={handleSubmit} className="login-form">
            <label htmlFor ="email">Email</label> 
            <input type='email' value={email} placeholder='exampleemail@gmail.com' id="email" name="email"/>
            <label htmlFor ="password">Password</label> 
            <input type='password' value={password} placeholder='********' id="password" name="password"/>
            <button type="submit">Log In</button>
          </form>
          <button className="link-button" onClick={()=> props.onFormSwitch('register') }>Don't have an account?Register Here.</button>
      </div>
    </div>
    
)}

