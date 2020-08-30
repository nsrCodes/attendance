import React, {useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import './App.css';

import Top from './components/top';
import Home from './components/home';
import RollCall from './components/rollCall';
import End from './components/end'

function App() {
  const [ roll , setRoll ] = useState({
    limits: [1,45],
    register: {}
  })
  const [ absent , setAbsent ] = useState([])
  const [ test , setTest ] = useState([0])
  return (  
     <div> 
      <Top />
      <Router>
        
          <Route 
            path='/' exact 
            component={() => 
              <Home 
                roll = {roll} 
                setRoll = { (roll) => setRoll(roll) }
                test = {test} 
                setTest = { (test) => setTest(test)}  />}
          />
          <Route 
            path = '/rollCall' exact
            component = { () => 
              <RollCall 
                roll = { roll } 
                setRoll = { (roll) => setRoll(roll) }
                setAbsent = { (absent) => setAbsent(absent) }
              />} 
          />
        
      </Router>
    </div>
  );
}

export default App;
