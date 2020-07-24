import React,{useState} from 'react';
import './App.css';
import Food from './Components/food'

function App() {

  return (
    let [count,setcount] = useState(1)
    <div className="App">
      <h1>Hello Musa</h1>
      <Food foodname={xy}/>
      <button onclick={() => setcount(++count)}>Hello Lets Add 1</button>
    </div>
  );
};



export default App;
