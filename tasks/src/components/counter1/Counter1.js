//Here, I am handling the case if we count>0 then only it should decrement the value by 1.
//This case is handling negative values.

import { useState } from 'react';

function Counter1(){

    const[count, setCount] = useState(0);

    const handleIncrement =() => {
        setCount(count+1);
        
    }

    //Here, I am handling the case if we count>0 then only it should decrement the value by 1.
    //This case is handling negative values.
    const handleDecrement = () =>{
        if(count>0){
            setCount(count-1);
        }
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