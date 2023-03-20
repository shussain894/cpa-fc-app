import React, { useState } from 'react';

const Register = ({ navigate }) => {

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [address, setAddress] = useState("");
  const [group, setGroup] = useState("");
  const [registered, setRegistered] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(`${name}, ${age}, ${address}, ${group}`)
    setName("")
    setAge("")
    setAddress("")
    setGroup("")
    setRegistered(true)
    console.log(registered)
  }

  const hideConfirmation = () => {
    setRegistered(false)
  }

  const redirectHome = () => {
    navigate('/home')
  }

  const handleNameChange = (event) => {
    setName(event.target.value)
  }

  const handleAgeChange = (event) => {
    setAge(event.target.value)
  }

  const handleAddressChange = (event) => {
    setAddress(event.target.value)
  }

  const handleGroupChange = (event) => {
    setGroup(event.target.value)
  }

  return (
    <>
      <body>
        <form onSubmit={handleSubmit}>
          <input placeholder="Name" id="name" type='text' value={ name } onChange={handleNameChange}/>
          <input placeholder="Age" id="age" type='text' pattern='[0-9]*' value={ age } onChange={handleAgeChange}/>
          <input placeholder="Address" id="address" type='text' value={ address } onChange={handleAddressChange}/>
          <input placeholder="Group" id="group" type='text' list ='groups' value={ group } onChange={handleGroupChange}/>
          <datalist id='groups'> 
          <option value="Shaz's U9s" />
          <option value="Michael's U10s" />
          <option value="Shah's U10s" />
          <option value="Rob's U12s" />
          </datalist>
          <input id='submit' type="submit" value="Submit"/> 
        </form>
        {registered && <div>
          <a> Congratulations! Your child has been registered </a>
          <button onClick={hideConfirmation}> Register another child </button>
          <button onClick={redirectHome}> Go to the homepage! </button>
        </div>}
      </body> 
    </>
  )
}

export default Register