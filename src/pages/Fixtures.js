import React, { useState } from 'react';

const Fixtures = ({ navigate }) => {

  const [opponent, setOpponent] = useState("");
  const [venue, setVenue] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(`${opponent}, ${venue}, ${date}`)
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
          <input placeholder="Opponent" id="opponent" type='text' value={ opponent } onChange={handleOpponentChange}/>
          <input placeholder="Venue" id="venue" type='text' value={ venue } onChange={handleVenueChange}/>
          <input placeholder="Date" id="date" type='date' value={ date } onChange={handleDateChange}/>
          <input id='submit' type="submit" value="Submit"/> 
          </form>
        </div>
      </body>  
    </>
    )
}

export default Fixtures