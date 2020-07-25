import React from 'react';
import './App.css';
import ContextapiParent from "./Components/contextapi-parent";
import PassContext from './Components/context-api-value';

function App() {


  return (
    <PassContext.Provider value={'app musa'}>
    <div className="App">

    <ContextapiParent/>

    </div>
    </PassContext.Provider>
  );
  };


export default App;
