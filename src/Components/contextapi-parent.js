// Context Api And Pur Js Function Typing.
import React from  'react';
import ContextapiChild from './contextapi-child'
// import Context_name from './context-api-value'

const Parent = (props) => {
    // let myname = useContext(Context_name);
    return (
        <div>

        <h2>I am Parent Component And i am Passing this Value '{props.myname}' to Child Component </h2>
        <ContextapiChild/>

        </div>
    );
};

export default Parent;
