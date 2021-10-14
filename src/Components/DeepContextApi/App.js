// Context Api And Pur Js Function Typing.
import React from  'react';
import Child1 from './Child1';
import Child2 from './Child2';
import name from "./data";

const Parent = () => {

    return (
        <div>

        <h2>I am Parent Component</h2>
        <Child1/>
        <name.Provider value="musa">
        <Child2></Child2>
        </name.Provider>
        </div>
        
        
    );
    
};

export default Parent;
