import React, { useEffect, useState } from 'react';

const Register = ({ navigate }) => {

  const [token, setToken] = useState(window.localStorage.getItem("token"));
  const [title, setTitle] = useState("");
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [address, setAddress] = useState("");
  const [group, setGroup] = useState("");
  const [school, setSchool] = useState("");
  const [relationship, setRelationship] = useState("");
  const [nokName, setNokName] = useState("");
  const [nokRelationship, setNokRelationship] = useState("");
  const [nokNumber, setNokNumber] = useState("");
  const [doctor, setDoctor] = useState("");
  const [surgery, setSurgery] = useState("");
  const [doctorNumber, setDoctorNumber] = useState("");
  const [registered, setRegistered] = useState(false);
  const [children, setChildren] = useState([]);
  const [user, setUser] = useState({});
  const [numberError, setNumberError] = useState("");
  const user_id = window.localStorage.getItem('user_id')

  useEffect (()=> {
    const userInfo = async () => {
      fetch('/users', {headers: {'User_ID': user_id}})
      .then(response => response.json())
      .then(res => setUser(res.user))
    }
    userInfo()
  })

  const handleSubmit = async (event) => {

    event.preventDefault();
    console.log(`${name}, ${dob}, ${address}, ${group}, ${school}, ${relationship}, ${nokName}, ${nokRelationship}, ${nokNumber}`)
    console.log(showAge(dob))

    if (/^\d{0,11}$/.test(nokNumber)) { 
      if (nokNumber.length === 11) { 

        const response = await fetch(`/users/${user_id}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
            // 'Access-Control-Allow-Origin': '*',
            // 'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Z-Key',
            // 'Access-Control-Allow-Methods': 'GET, HEAD, POST, PUT, DELETE, OPTIONS, PATCH',
            'Authorization': `Bearer ${token}`
          },
          body: JSON.stringify({ 
            name: name, dob: dob, address: address, group: group, school: school, relationship: relationship, nokName: nokName, nokRelationship: nokRelationship, nokNumber: nokNumber, doctor: doctor, doctorNumber: doctorNumber, surgery: surgery
          })
        })

        let data = await response.json()

          if (response.status !== 201) { // amend to add error messages
            console.log("child NOT added");
        } else { // should be === 201 
            console.log("child added");
            window.localStorage.setItem("token", data.token);
            setToken(window.localStorage.getItem("token"));
            setChildren(oldArray=>[...oldArray, data.child])
            setName("")
            setDob("")
            setAddress("")
            setGroup("")
            setSchool("")
            setRelationship("")
            setNokName("")
            setNokRelationship("")
            setNokNumber("")
            setDoctor("")
            setSurgery("")
            setDoctorNumber("")
            setRegistered(true)
          }
    }
    else{setNumberError('Phone number must be 11 digits')}
  }}

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

  const handleDoctor = (event) => {
    setDoctor(event.target.value)
  }

  const handleDoctorNumber = (event) => {
    setDoctorNumber(event.target.value)
  }

  const handleSurgery = (event) => {
    setSurgery(event.target.value)
  }

  const handleError = (event) => {
    setNumberError("")
  }

  return (
    <>
      <body>
        <form onSubmit={handleSubmit}>
          <input placeholder="Name" id="name" type='text' value={ name } onChange={handleNameChange}/>
          <input placeholder="DOB" id="dob" type='date' value={ dob } onChange={handleDobChange}/>
          <input placeholder="Address" id="address" type='text' value={ address } onChange={handleAddressChange}/>
          <input placeholder="Group" id="group" type='text' list ='groups' value={ group } onChange={handleGroupChange}/>
          <datalist id='groups'> 
          <option value="Shaz's U9s" />
          <option value="Faris's U9s" />
          <option value="Michael's U10s" />
          <option value="Suhail's U10s" />
          <option value="Rob's U11s" />
          <option value="Meer's U12s" />
          <option value="Amjid's U12s" />
          <option value="Pravin's U13s" />
          <option value="No group" />
          </datalist>
          <input placeholder="School" id="school" type='text' value={ school } onChange={handleSchoolChange}/>
          <input placeholder="Relationship To Child" id="relationship" type='text' value={ relationship } onChange={handleRelationshipChange}/>
          <input placeholder="Next Of Kin Name" id="nokName" type='text' value={ nokName } onChange={handleNokName}/>
          <input placeholder="Next Of Kin Relationship" id="nokRelationship" type='text' value={ nokRelationship } onChange={handleNokRelationship}/>
          <input placeholder="Next Of Kin Number" id="nokNumber" type='text' pattern="^[0-9\b]+$" value={ nokNumber } onChange={handleNokNumber} onClick={handleError}/>
          <input placeholder="Doctors Name" id="doctor" type='text' value={ doctor } onChange={handleDoctor}/>
          <input placeholder="Surgery Name" id="surgery" type='text' value={ surgery } onChange={handleSurgery}/>
          <input placeholder="Doctors Number" id="doctorNumber" type='text' value={ doctorNumber } onChange={handleDoctorNumber}/>
          <input id='submit' type="submit" value="Submit"/> 
        </form>
        {numberError && <p> {numberError} </p>}
        {registered && <div>
          <a> Congratulations! Your child has been registered </a>
          <button onClick={redirectHome}> Go to the homepage! </button>
        </div>}
        {user.child && <div>
          <a> Your registered children: </a>
          { user.child.map((child, index)=> {
            return <a key={index}> {child.name} </a>
          })}
        </div>}
      </body> 
    </>
  )
}

export default Register