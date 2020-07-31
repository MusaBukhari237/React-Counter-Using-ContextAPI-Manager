import React, { useContext, useReducer } from 'react';
import GlobalState from './GlobalState';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';


function Child3() {

    let [count,setcount] = useReducer(GlobalState , 40);
    function Add() {

        setcount('Add')

    };
    return (
        <div>
            <h6>{count}</h6>
            <Button className="buttons" variant="outlined" color="primary" onClick={Add}> <AddIcon /> 1 in Counter : {count} </Button>

        </div>
    );
};

export default Child3;