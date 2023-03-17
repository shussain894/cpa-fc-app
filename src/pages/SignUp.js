import React, { useState } from 'react';

const SignUpForm = ({ navigate }) => {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(`${name}, ${email}, ${password}`)
  }

  const handleEmailChange = (event) => {
    setEmail(event.target.value)
  }

  const handleNameChange = (event) => {
    setName(event.target.value)
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
  }

    return (
    <>
      <body>
        <div className="content">
          <h2 className='title'>  Welcome to CPA FC! </h2>
          <div> Already have an account? </div>
          <a href="../login">login here</a>
         
          <form onSubmit={handleSubmit}>
          <input placeholder="Full Name" id="name" type='text' value={ name } onChange={handleNameChange}/>
          <input placeholder="Email" id="email" type='text' value={ email } onChange={handleEmailChange}/>
          <input placeholder="Password" id="password" type='password' value={ password } onChange={handlePasswordChange}/>
          <input id='submit' type="submit" value="Submit"/> 
          </form>
        </div>
      </body>  
    </>
    )
}

export default SignUpForm