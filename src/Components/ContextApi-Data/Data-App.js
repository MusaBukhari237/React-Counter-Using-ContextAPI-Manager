import React, { useState } from 'react';
import Child1 from './Child1';
import GlobalState from './GlobalState';



function App() {

    let Counter = useState(1);

    return (
        <GlobalState.Provider value={Counter}>
        <div>

            <h1>Counter : {Counter}</h1>
            <Child1/>

        </div>
        </GlobalState.Provider>
    );
};

export default App;
