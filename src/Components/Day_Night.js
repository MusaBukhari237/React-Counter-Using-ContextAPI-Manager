// Day Night With If else Component
import React , {useState} from "react";


function Day_Night() {
    let [islight,setislight] = useState(true);
    function Light() {
      setislight(!islight)
    }
  
    return (  
      <div className="App">

      <div className={`star ${islight ? "sun" : "moon"}`} ></div>
      <button className="day_night" onClick={Light}>Lets Change the Light</button>

      </div>
    );
  };

  

export default Day_Night

