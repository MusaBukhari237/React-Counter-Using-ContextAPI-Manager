// Counter With Passing Props Component
import React,{useState} from 'react';
import Count from './count.js'


function Counter() {
  let [count,setcount] = useState(0);
  function Add1(){
     setcount(++count)
    }
  function Minus1(){
    setcount(--count)
  }
  function Reset(){
    setcount(0)
   }
  return (
    <div className="App">
      <Count countid={count}/>
    <div class="buttons">
      <button onClick={Add1}>Add 1</button>
      <button onClick={Minus1}>Minus 1</button>
      <button onClick={Reset}>Reset</button>
    </div>
    </div>
  );
};

export default Counter;
