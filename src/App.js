import React, { useState } from 'react';
import './App.css';
import ContextapiParent from "./Components/contextapi-parent";
import PassContext from './Components/context-api-value';

function App() {

    let counterval = useState(6) //[counterval,setcounterval]

  return (
    <PassContext.Provider value={counterval}>
    <div className="App">

    <ContextapiParent/>

    </div>
    </PassContext.Provider>
  );
  };


export default App;
