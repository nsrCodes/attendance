import React, { useState, useEffect } from 'react';
import { Redirect, Link } from 'react-router-dom';

import Num from './num';


function RollCall({roll, setRoll}) {

  const [redirect, setRedirect] = useState(false)
  const [absent, setAbsent] = useState([])

  let rows = [];
  for (let tempRoll = roll.limits[0]; tempRoll <= roll.limits[1]; tempRoll++) {
    rows.push(tempRoll)
  }


  const handleSubmit = e => {
    e.preventDefault()
    
    let absent = [];
    for (let i = 0; i < rows.length; i++) {
      if( !roll.register[ rows[i] ].present )
        {absent.push(rows[i])}
    }

    setAbsent(absent)
    alert(`Absent numbers are ${absent}`)

  }

  const handleClick  = (rollNum) => {
    console.log(rollNum)
    let newRoll = roll;
    newRoll.register[ rollNum ].present = !newRoll.register[ rollNum ].present

    setRoll(newRoll)
  }

  
  // redirect? <Redirect push to="/rollCall/end"/>:

  return (
    <div id="roll">
      <div className = "register">
        {rows.map( number => 
          <Num 
            key = {number}
            data = {roll.register[ number ]}
            raiseClick = { (rollNum) => handleClick(rollNum) }
        />
        )}
      </div>

      <div className="buttons">
      <button id="submit" onClick= { handleSubmit }> SUBMIT </button>
      <button id="home"> <Link to = "/"> Home </Link> </button>
      </div>
    </div>
  );
}

export default RollCall;