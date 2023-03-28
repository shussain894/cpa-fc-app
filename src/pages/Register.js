import React, { useState } from 'react';

const Register = ({ navigate, token, setToken }) => {

  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [address, setAddress] = useState("");
  const [group, setGroup] = useState("");
  const [school, setSchool] = useState("");
  const [relationship, setRelationship] = useState("");
  const [nokName, setNokName] = useState("");
  const [nokRelationship, setNokRelationship] = useState("");
  const [nokNumber, setNokNumber] = useState("");
  const [registered, setRegistered] = useState(false);
  const [children, setChildren] = useState([]);
  const user_id = window.localStorage.getItem('user_id')

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(`${name}, ${dob}, ${address}, ${group}, ${school}, ${relationship}, ${nokName}, ${nokRelationship}, ${nokNumber}`)
    console.log(showAge(dob))

    fetch(`/users/${user_id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        // 'Access-Control-Allow-Origin': '*',
        // 'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Z-Key',
        // 'Access-Control-Allow-Methods': 'GET, HEAD, POST, PUT, DELETE, OPTIONS, PATCH',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({ 
        name: name, dob: dob, address: address, group: group, school: school, relationship: relationship, nokName: nokName, nokRelationship: nokRelationship, nokNumber: nokNumber 
      })
    })

    let data = await response.json()

      if (response.status !== 201) {
        console.log("child NOT added");
    } else {
        console.log("child added");
        window.localStorage.setItem("token", data.token);
        setToken(window.localStorage.getItem("token"));
        setChildren(oldArray=>[...oldArray, data.child])
      }

    setName("")
    setDob("")
    setAddress("")
    setGroup("")
    setSchool("")
    setRelationship("")
    setNokName("")
    setNokRelationship("")
    setNokNumber("")
    setRegistered(true)
  }

  const hideConfirmation = () => {
    setRegistered(false)
  }

  const showAge = (dob) => {
    const dobDate = new Date(dob)
    const difference = Date.now() - dobDate
    const date = new Date(difference)
    const age = date.getFullYear() - 1970
    return age 
  }

  const redirectHome = () => {
    navigate('/home')
  }

  const handleNameChange = (event) => {
    setName(event.target.value)
  }

  const handleDobChange = (event) => {
    setDob(event.target.value)
  }

  const handleAddressChange = (event) => {
    setAddress(event.target.value)
  }

  const handleGroupChange = (event) => {
    setGroup(event.target.value)
  }

  const handleSchoolChange = (event) => {
    setSchool(event.target.value)
  }

  const handleRelationshipChange = (event) => {
    setRelationship(event.target.value)
  }

  const handleNokName = (event) => {
    setNokName(event.target.value)
  }

  const handleNokRelationship = (event) => {
    setNokRelationship(event.target.value)
  }

  const handleNokNumber = (event) => {
    setNokNumber(event.target.value)
  }

  return (
    <>
      <body>
        <form onSubmit={handleSubmit}>
          <input placeholder="Name" id="name" type='text' value={ name } onChange={handleNameChange}/>
          <input placeholder="DOB" id="dob" type='date' value={ dob } onChange={handleDobChange}/>
          <input placeholder="Address" id="address" type='text' value={ address } onChange={handleAddressChange}/>
          <input placeholder="Group" id="group" type='text' list ='groups' value={ group } onChange={handleGroupChange}/>
          <input placeholder="School" id="school" type='text' value={ school } onChange={handleSchoolChange}/>
          <input placeholder="Relationship to child" id="relationship" type='text' value={ relationship } onChange={handleRelationshipChange}/>
          <input placeholder="Next Of Kin Name" id="nokName" type='text' value={ nokName } onChange={handleNokName}/>
          <input placeholder="Next Of Kin Relationship" id="nokRelationship" type='text' value={ nokRelationship } onChange={handleNokRelationship}/>
          <input placeholder="Next Of Kin Number" id="nokNumber" type='text' pattern="^[0-9\b]+$" value={ nokNumber } onChange={handleNokNumber}/>
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
        <div>
          <a> Your registered children: </a>
        </div>
      </body> 
    </>
  )
}

export default Register