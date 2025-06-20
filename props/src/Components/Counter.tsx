import { useState } from "react";
import './Counter.css'

function Counter(){

    const[count, setCount] = useState(0);
    const[prevCount, setPrevCount] = useState(0);
    
    const handleIncrement = () => {
        setPrevCount(count);
        setCount(count + 1);
    }

    const handleDecrement = () =>{
        setPrevCount(count);
        setCount(count-1);
    }

    const handleReset = () =>{
        setPrevCount(count);
        setCount(0);
    }
    return(
        <>
        <p>Count : {count}</p>
        <p>Prev - Count : {prevCount}</p>
        <button className="btn-in" onClick={handleIncrement}>Increment</button>
        <button className="btn-dec" onClick={handleDecrement}>Decrement</button>
        <button className="btn-res" onClick={handleReset}>Reset</button>
        </>
    )
}

export default Counter;