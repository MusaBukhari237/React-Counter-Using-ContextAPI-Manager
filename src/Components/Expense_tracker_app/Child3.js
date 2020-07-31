import React, { useReducer } from './node_modules/react';
import GlobalState from './transReducer';
import Button from './node_modules/@material-ui/core/Button';
import AddIcon from './node_modules/@material-ui/icons/Add';




function Child3(){

    let [count , setcount] = useReducer(GlobalState,5)

    function Add(){

        setcount('Add')

    };
    return(
        <div>
                <h6>{count}</h6>
        <Button className="buttons" variant="outlined" color="primary"  onClick={Add}> <AddIcon/> 1 in Counter :  </Button>
        
        </div>
    );
};

export default Child3;