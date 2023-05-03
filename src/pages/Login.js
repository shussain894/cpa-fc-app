import React, { useState } from 'react';

const LoginForm = ({ navigate }) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [UserDoesntExistsErrorMessage, setUserDoesntExistsErrorMessage] = useState(''); // add error handling to html below
  const [EmptyFieldErrorMessage, setEmptyFieldErrorMessage] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(`${email}, ${password}`)

    let response = await fetch('/tokens', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: email, password: password })
    })

    if (email === '' || password === ''){
      console.log('empty field')
      navigate('/login')
      setEmptyFieldErrorMessage('Please enter both your password and email')
    } else if (response.status !== 201) {
      console.log("oops")
      navigate('/login')
      setUserDoesntExistsErrorMessage('This user is not registered - please signup first')
    } else{
      console.log("yay")
      let data = await response.json()
      window.localStorage.setItem("token", data.token)
      window.localStorage.setItem("user_id", data.user_id)
      navigate('/register');
    }
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