import React, { createContext, useReducer } from 'react';
import TransReducer from './transReducer'

let inittranshistory = [
    { name: "Salary", amount: 30000 },
    { name: "Gas Bill", amount: 3000 },
    { name: "Store", amount: 200 }
];

let inittrans = createContext(inittranshistory);
export default inittrans;

let [state,dispatch] = useReducer(TransReducer , inittranshistory);

