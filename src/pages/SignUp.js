import React, { useState } from 'react';

const SignUpForm = ({ navigate }) => {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [numberError, setNumberError] = useState("");
  const [UserExistsErrorMessage, setUserExistsErrorMessage] = useState('');
  const [EmptyFieldErrorMessage, setEmptyFieldErrorMessage] = useState('')
  const [GeneralErrorMessage, setGeneralErrorMessage] = useState('')


  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(`${title} ${name}, ${email}, ${password} ${number}`)

    if (/^\d{0,11}$/.test(number)) { // Only allow up to 11 digits
      if (number.length === 11) { // Only update state if input is exactly 11 digits
        fetch('/users', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email: email, password: password, name: name, number: number, title: title})
        })
        .then(response => {
          if(response.status === 201) {
            console.log(response.body)
            navigate('/login')
          } else if (email === '' || password === '' || name === '' || title === '' || number === '') {
            console.log(response.body)
            setEmptyFieldErrorMessage('All fields are required - please try again')
  
          } else if (response.status === 400){
            console.log(response.body)
            navigate('/');
            setUserExistsErrorMessage('That user already exists - Please create a new account or login');
            console.log(response.json().error)
          } else {
            console.log(response)
            navigate('/');
            setGeneralErrorMessage("Oops that didn't work. Please try again")
          }
        })
  }
    else{setNumberError('Phone number must be 11 digits')}
}}

  const handleEmailChange = (event) => {
    setEmail(event.target.value)
  }

  const handleTitleChange = (event) => {
    setTitle(event.target.value)
  }

  const handleNameChange = (event) => {
    setName(event.target.value)
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNumber(event.target.value);
  }

  const handleError = (event) => {
    setNumberError("")
    setGeneralErrorMessage('')
    setUserExistsErrorMessage('')
    setEmptyFieldErrorMessage('')
  }

    return (
    <>
      <body>
        <div className="content">
          <h2 className='title'>  Welcome to CPA FC! </h2>
          <div> Already have an account? </div>
          <a href="../login">login here</a>
         
          <form onSubmit={handleSubmit}>
          <input placeholder="Title" id="title" type='text' list='titles' value={ title } onChange={handleTitleChange} onClick={handleError}/>
          <datalist id='titles'> 
          <option value="Mr" />
          <option value="Mrs" />
          <option value="Miss" />
          <option value="Ms" />
          </datalist>
          <input placeholder="Full Name" id="name" type='text' value={ name } onChange={handleNameChange} onClick={handleError}/>
          <input placeholder="Email" id="email" type='text' value={ email } onChange={handleEmailChange} onClick={handleError}/>
          <input placeholder="Number" id="number" type='text' pattern="^[0-9\b]+$" value={ number } onChange={handleNumberChange} onClick={handleError}/>
          <input placeholder="Password" id="password" type='password' value={ password } onChange={handlePasswordChange}/>
          <input id='submit' type="submit" value="Submit"/> 
          </form>
          <div className='errorMessages'>
            {UserExistsErrorMessage && (<p className="error"> {UserExistsErrorMessage} </p>)}
            {EmptyFieldErrorMessage && (<p className="error"> {EmptyFieldErrorMessage} </p>)}
            {GeneralErrorMessage && (<p className="error"> {GeneralErrorMessage} </p>)}
            {numberError && <p> {numberError} </p>}
          </div>
        </div>
      </body>  
    </>
    )
}

export default SignUpForm