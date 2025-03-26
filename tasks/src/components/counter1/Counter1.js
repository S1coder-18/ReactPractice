//This is why we use useState hook because it is tracked by react and whatever changes, it re-renders 
// into dom and ui.

import { useState } from 'react';

function Counter1(){

    const[count, setCount] = useState(0);

    const handleIncrement =() => {
        setCount(count+1);
    }

    const handleDecrement = () =>{
        setCount(count-1);
    }
    

    return(
        <>
        <h3>Count is :{count}</h3>
        <button onClick={handleIncrement}>Incremment</button>
        <button onClick={handleDecrement}>Decrement</button>
        </>
    )
}

export default Counter1;