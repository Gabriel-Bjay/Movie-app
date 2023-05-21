import React, {useState} from "react"
import { signInWithEmailAndPassword } from 'firebase/auth'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import "./style.css"
import {auth} from "../../firebase"
import {  useNavigate } from 'react-router-dom'


export const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const signIn = (e) =>{
    e.preventDefault();
    signInWithEmailAndPassword(auth,email, password)
      .then(()=>{
        navigate('/')
      }).catch((error)=>{
        console.log(error);
    })
}

  const signUp = (e) =>{
    e.preventDefault();
    createUserWithEmailAndPassword(auth,email, password)
      .then(()=>{
        navigate('/')
      }).catch((error)=>{
        console.log(error);
    })
}

  return (
    <div className="App">
      <div className="auth-form-container">
          <h2>Login</h2>
          <form className="login-form">
            <label htmlFor ="email">Email</label> 
            <input type='email' onChange={(e) =>setEmail(e.target.value)} value={email} placeholder='exampleemail@gmail.com' id="email" name="email"/>
            <label htmlFor ="password">Password</label> 
            <input type='password' onChange={(e) =>setPassword(e.target.value) } value={password} placeholder='********' id="password" name="password"/>
            <button type="submit" onClick={signIn}>Log In</button>
          </form>
          <button className='login-registerButton' onClick={signUp}>Create your account</button>
      </div>
    </div>
    
)}

