import React, { useState } from 'react';

const SignUpForm = ({ navigate }) => {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(`${name}, ${email}, ${password} ${number}`)

    fetch('/users', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: email, password: password, name: name, number: number })
    })
    .then(response => {
      if(response.status === 201) {
        console.log(response.body)
        navigate('/login')
      }})
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

  const handleNumberChange = (event) => {
    setNumber(event.target.value)
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
          <input placeholder="Number" id="number" type='text' pattern="^[0-9\b]+$" value={ number } onChange={handleNumberChange}/>
          <input placeholder="Password" id="password" type='password' value={ password } onChange={handlePasswordChange}/>
          <input id='submit' type="submit" value="Submit"/> 
          </form>
        </div>
      </body>  
    </>
    )
}

export default SignUpForm