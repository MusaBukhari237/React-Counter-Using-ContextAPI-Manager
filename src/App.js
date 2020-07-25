import React from 'react';
import './App.css';
import Context_api_Parent from "./Components/contextapi-parent";
import PassContext from './Components/context-api-value';

function App() {


  return (
    <PassContext.Provider value={'app musa'}>
    <div className="App">

    <Context_api_Parent/>

    </div>
    </PassContext.Provider>
  );
  };


export default App;
