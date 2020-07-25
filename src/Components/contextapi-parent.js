// Context Api And Pur Js Function Typing.
import React from  'react';
import Context_api_Child from './contextapi-child'
// import Context_name from './context-api-value'

const Parent = (props) => {
    // let myname = useContext(Context_name);
    return (
        <div>

        <h2>I am Parent Component And i am Passing this Value '{props.myname}' to Child Component </h2>
        <Context_api_Child/>

        </div>
    );
};

export default Parent;
