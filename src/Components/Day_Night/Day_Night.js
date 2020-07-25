// Day Night With If else Component
import React , {useState} from "react";


function Day_Night() {
    let [light,setlight] = useState(true);
    function Light() {
      setlight(!light)
      
    }
  
    return (  
      <div className="App">

  <div className={`star ${light ? "sun" : "moon"}`} ></div>
      <button className="day_night" onClick={Light}>{`Turn into ${light ? 'Night' : 'Day'}`}</button>

      </div>
    );
  };

  

export default Day_Night

