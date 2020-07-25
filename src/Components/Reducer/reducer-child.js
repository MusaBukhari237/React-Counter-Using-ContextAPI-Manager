import React,{useReducer} from 'react';
import ReducerValue from './reducer-value';


function ReducerChild(){
    let [state,dispatch] = useReducer(ReducerValue,0);
    function UpdateReduceCounter(){
        dispatch('INCREMENT');
        
        console.log(state)
        };

    return(
        <div>
        <button onClick={UpdateReduceCounter}>Add 1 in Reduce App Counter</button>
        </div>
    );

};


export default ReducerChild;