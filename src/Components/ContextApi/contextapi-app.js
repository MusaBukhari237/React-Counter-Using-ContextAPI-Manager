import React, { useState } from 'react';
import ContextApiParent from "./contextapi-parent";
import PassContext from './contextapi-value';

function ContectApiApp() {

    let counterval = useState(1); //[counterval,setcounterval]

  return (
    <PassContext.Provider value={counterval}>
    <div className="App">

    <ContextApiParent/>

    </div>
    </PassContext.Provider>
  );
  };


export default ContectApiApp;
