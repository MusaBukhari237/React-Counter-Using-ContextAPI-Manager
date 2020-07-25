import React, { useReducer } from 'react';
import ReducerParent from './reducer-parent';
import ReducerValue from './reducer-value';

function ReducerApp(){

    let [state,dispatch] = useReducer(ReducerValue, 2);
    // console.log(state);
    function UpdateReduceCounter(){
        dispatch('INCREMENT');
    };
    return(
        <div>
            <h3>Counter : {state}</h3>
            {/* <ReducerParent/> */}
            <button onClick={UpdateReduceCounter}>Add 1 </button>

        </div>
    );

};

export default ReducerApp;