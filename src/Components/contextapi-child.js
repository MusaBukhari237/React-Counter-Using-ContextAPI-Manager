import React,{useContext} from 'react';
import context_name from './context-api-value'

function Child(props){
    let myname = useContext(context_name);
    return (
        <div>
            <h3>I am a Child Component and My Name is {myname}</h3>
        </div>
    );
};

export default Child;


