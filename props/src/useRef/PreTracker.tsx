import { useEffect, useRef, useState } from "react";

export const PrevTracker = () => {
    
    const[count, setCount] = useState<number>(0);
    let prevTracker = useRef<number | null>(null);
    
    // useEffect(()=>{                    //we are trackinf value on mount
    //     prevTracker.current = count;
    // },[count]);

    const handleIncrement = () =>{
        // setCount(count+1);  // This works fine but it doesn't gurrantee the ordering of state or side effect out of the setstate
        // prevTracker.current = count;

        setCount((prevCount)=>{
            prevTracker.current = prevCount;
            return prevCount+1;

        })
        //In this way we are assigning the value to prevTracker.current at the right time.
    }

    return(
        <>
        <p>Tracking the previousValue: {prevTracker.current}</p>
        <p>CUrrent Value: {count}</p>
        <button onClick={handleIncrement}>Increment</button>
        </>
    )



}



/**
 * 🧩 Challenge 1: Previous State Tracker
Track and display the previous value of a counter using useRef.

What to do:
Create a counter (useState).

Use a useRef to store the previous count.

Show both current and previous values.


 */