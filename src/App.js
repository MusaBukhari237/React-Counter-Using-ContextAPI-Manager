import React from 'react';
import './App.css';
import Food from './Components/food'

function App() {
  var x = "Chicken";
  var y = "Karahi";
  var xy = x + " " + y ;
  
  return (
    <div className="App">
      <h1>Hello Musa</h1>
      <Food foodname={xy}/>
    </div>
  );
};



export default App;
