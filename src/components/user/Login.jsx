import React, {useState} from "react"

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) =>{
    e.preventDefault()
    console.log(email);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label for ="email">Email</label> 
        <input type='email' value={email} placeholder='exampleemail@gmail.com' id="email" name="email"/>
        <label for ="password">Password</label> 
        <input type='password' value={password} placeholder='********' id="password" name="password"/>
        <button type="submit">Log In</button>
      </form>
      <button>Don't have an account?Register Here.</button>
    </>
)}


