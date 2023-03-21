import React, { useState } from 'react';

const LoginForm = ({ navigate }) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(`${email}, ${password}`)
  }

  const handleEmailChange = (event) => {
    setEmail(event.target.value)
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
  }

    return (
    <>
      <body>
        <h3> Login Page </h3>
        <form onSubmit={handleSubmit}>
        <input placeholder="Email" id="email" type='text' value={ email } onChange={handleEmailChange}/>
        <input placeholder="Password" id="password" type='password' value={ password } onChange={handlePasswordChange}/>
        <input id='submit' type="submit" value="Submit"/> 
        </form>
      </body>  
    </>
    )
}

export default LoginForm