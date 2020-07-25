import React,{useContext} from 'react';
import Context_value from './context-api-value'

function Child(props){
    // let myname = useContext(Context_value);
    let Count = useContext(Context_value);
    console.log(Count);

    function AddinCount(){

        Count[1](++Count[0]);

    };

    return (
        <div>
            {/* <h3>I am a Child Component and My Name is {myname}</h3> */}
            <h4>Count : {Count[0]}</h4>
            <button onClick={AddinCount}>Add 1 in Count</button>
        </div>
    );
};

export default Child;


