import React, {useState} from 'react';
import {Link, Redirect} from 'react-router-dom';

function Home({roll, setRoll}) {
  
  const [redirect, setRedirect] = useState(false)

  const handleSubmit = e => {
    e.preventDefault()

    let tempRoll = roll.limits[0];
    let newRegister = {}
    for(let i = 0; i < roll.limits[1] - roll.limits[0] + 1; i++) {
      newRegister[ tempRoll ] = {num: tempRoll, present: false}
      tempRoll++
    }
    roll.register = newRegister;

    setRoll(roll);
    setRedirect(true)
    console.log(redirect ,roll);

  }
  // const handleIncrement = (e) => {
  //   setTest( [test[0]+1] )
  // }

  return redirect? <Redirect to="/rollCall"/>:(
    <div>
     { //<p> Test: { test[0] } </p>
         //  <button onClick = { handleIncrement }>Increase</button>
       }
      <form onSubmit = { handleSubmit } className="limits">
        <input className="num-input"
          name="first" 
          type="number" 
          min="1" 
          placeholder="First roll no." 
          onChange = {e => roll.limits[0] = parseInt(e.target.value)}
          // onChange = {e => setRoll(1)}
          required/>
        <input className="num-input"
          name="last" 
          type="number" 
          min="2" 
          placeholder="Last roll no." 
          onChange = {e => roll.limits[1] = parseInt(e.target.value)}
          required/>
        <input type="submit" value="submit" className="submit"/>
      </form>
    </div>
  );
}

export default Home;
