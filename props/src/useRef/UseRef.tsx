import { useEffect, useRef } from "react";
export const UseRef = () => {
    const inputRef = useRef<HTMLInputElement>(null);
    
    const handleClick = () =>{
        console.log("Input value :", inputRef.current?.value);
    }
    useEffect(()=>{
        inputRef.current?.focus
    },[]);

    return (
        <>
        <input type="text"
            ref={inputRef}
            placeholder="Enter the text..."
        />    
        <button type="submit" onClick={handleClick}>Submit</button>
        </>
    )

}


/**
 * 🧪 Mini Challenge: Build This
Create an input field that:

Auto-focuses on mount ✅

On click of a button, logs the input value using .current.value ✅
 */