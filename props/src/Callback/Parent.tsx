import { useCallback, useState } from "react";
import { Child } from "./Child";


export const Parent = () =>{
    const[count, setCount] = useState<number>(0);
    const[text, setText] = useState<string>("");
    console.log("Parent re-rendered");
    // const handleClick = () =>{
        
    //     console.log("Child button clicked!");
    // }
    const handleClick = useCallback(() =>{
        
        console.log("Child button clicked!");
    },[]);
    const handleClick1 = () =>{
        setCount(prev => prev+1);
    }
    return(
       <div>
       <p>Count : {count}</p>
       <button onClick={handleClick1}>Click Me</button>

       <input 
          type="text"
          value={text}
          placeholder="Enter Text..."
          onChange={(e)=>{setText(e.target.value)}}
        />  
        <Child onClick={handleClick}></Child>
       </div>
    )
}