import React, { useContext } from 'react';
import Inittranshistory from './transContext';


function App() {

    let transhistory = useContext(Inittranshistory);

    return (
        <div>
            <ul className="trans-list">
                {transhistory.map((transobj, ind) => {
                    return (
                        <li>
                            <span>{transobj.name}</span>
                            <span>{transobj.amount}</span>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default App;



