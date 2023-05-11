import React, {useState} from 'react'

export const Register = (props) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(username, password, email);
    }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor='name' >Name</label>
        <input type='text' value={username} placeholder='Enter Username...' id='name'/>
        <label htmlFor ="email">Email</label> 
        <input type='email' value={email} placeholder='exampleemail@gmail.com' id="email" name="email"/>
        <label htmlFor ="password">Password</label> 
        <input type='password' value={password} placeholder='********' id="password" name="password"/>
        <button type="submit">Log In</button>
      </form>
      <button onClick={()=>props.onFormSwitch('login')}>Already have an account?Login Here.</button>
    </>
  )
}
