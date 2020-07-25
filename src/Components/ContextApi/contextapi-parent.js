// Context Api And Pur Js Function Typing.
import React, {useContext } from  'react';
import ContextapiChild from './contextapi-child'
import Context_value from './contextapi-value'

const Parent = () => {
    // let myname = useContext(Context_name);
    let Counter = useContext(Context_value);

    function UpdateCounter(){
        // Counter[1](++Counter[0])
        Counter[1](++Counter[0]);
    };
    return (
        <div>

        <h2>I am Parent Component And i am Passing this Value '' to Child Component </h2>
        <ContextapiChild/>
        <button onClick={UpdateCounter}>Add 1 in Child Count From Parent</button>

        </div>
    );
};

export default Parent;
