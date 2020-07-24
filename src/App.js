import React,{useState} from 'react';
import './App.css';
// import Food from './Components/food'

function App() {
  let [count,setcount] = useState(3);

  return (
    <div className="App">
      <h1>Count : {count}</h1>

      <button onClick={
        () => setcount(++count)}>Hello Lets Add 1</button>
    </div>
  );
};



export default App;
