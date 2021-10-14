// Context Api And Pur Js Function Typing.
import React from 'react';
import name from "./data";


const Child2 = () => {
    

    return (
        <name.Consumer>
            {(name) => (<div>
                <h2>I am Child2 Component Value= "{name}"</h2>
                </div>
                )}
        </name.Consumer>
    );
};

export default Child2;
