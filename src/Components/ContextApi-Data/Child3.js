import React, { useContext } from 'react';
import GlobalState from './GlobalState';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';




function Child3(){

    let counter = useContext(GlobalState);
    function Add(){
        counter[1](++counter[0]);
    };
    return(
        <div>
        <Button className="buttons" variant="outlined" color="primary"  onClick={Add}> <AddIcon/> 1 in Counter : {counter[0] + 1} </Button>
        </div>
    );
};

export default Child3;