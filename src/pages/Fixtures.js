import React, { useState } from 'react';

const Fixtures = ({ navigate }) => {

  const [group, setGroup] = useState("");
  const [opponent, setOpponent] = useState("");
  const [venue, setVenue] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(`${opponent}, ${venue}, ${date}`)
    setGroup("")
    setOpponent("")
    setVenue("")
    setDate("")
  }

  const Checkbox = ({ label, checked }) => {

    const defaultChecked = checked ? checked : false 
    const [isChecked, setIsChecked] = useState(defaultChecked);

    const handleAvailabilityChange = () => {
      setIsChecked((prev) => !prev)
      // this will add confirmed child to database
    }

    return (
      <div>
        <label>
          <input type="checkbox" checked={isChecked} onChange={handleAvailabilityChange}/>
          <span>{label}</span>
        </label>
      </div>
    );
  };

  const handleGroupChange = (event) => {
    setGroup(event.target.value)
  }

  const handleOpponentChange = (event) => {
    setOpponent(event.target.value)
  }

  const handleVenueChange = (event) => {
    setVenue(event.target.value)
  }

  const handleDateChange = (event) => {
    setDate(event.target.value)
  }

  return (
    <>
      <body>
        <div className="content">
          <h2 className='title'>  Welcome to CPA FC Fixtures! </h2>
         
          <form onSubmit={handleSubmit}>
            <h3> Add a new fixture! </h3>
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
              </datalist>
            <input placeholder="Opponent" id="opponent" type='text' value={ opponent } onChange={handleOpponentChange}/>
            <input placeholder="Venue" id="venue" type='text' value={ venue } onChange={handleVenueChange}/>
            <input placeholder="Date" id="date" type='date' value={ date } onChange={handleDateChange}/>
            <input id='submit' type="submit" value="Submit"/> 
          </form>
        </div>
        <div>
        <span style={{ fontWeight: 'bold' }}>Your next fixture:</span>
          <p> Team: </p>
          <p> Opponent: </p>
          <p> Venue: </p>
          <p> Date: </p>
          <div>
            <Checkbox label='Confirm for ' checked={false} />
          </div>
        </div>
        <div>
        <span style={{ fontWeight: 'bold' }}>Results:</span>
        </div>
      </body>  
  </>
    )
}

export default Fixtures