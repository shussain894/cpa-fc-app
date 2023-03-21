import React, { useState } from 'react';

const Fixtures = ({ navigate }) => {

  const [opponent, setOpponent] = useState("");
  const [venue, setVenue] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(`${opponent}, ${venue}, ${date}`)
    setOpponent("")
    setVenue("")
    setDate("")
  }

  const Checkbox = ({ label }) => {

    const [isChecked, setIsChecked] = useState(false);

    return (
      <div>
        <label>
          <input type="checkbox" checked={isChecked} />
          <span>{label}</span>
        </label>
      </div>
    );
  };

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
            <input placeholder="Opponent" id="opponent" type='text' value={ opponent } onChange={handleOpponentChange}/>
            <input placeholder="Venue" id="venue" type='text' value={ venue } onChange={handleVenueChange}/>
            <input placeholder="Date" id="date" type='date' value={ date } onChange={handleDateChange}/>
            <input id='submit' type="submit" value="Submit"/> 
          </form>
        </div>
        <div>
        <span style={{ fontWeight: 'bold' }}>Your next fixture:</span>
          <p> Opponent: </p>
          <p> Venue: </p>
          <p> Date: </p>
          <div>
            <Checkbox label='Confirm for ' checked={true} />
          </div>
        </div>
      </body>  
    </>
    )
}

export default Fixtures