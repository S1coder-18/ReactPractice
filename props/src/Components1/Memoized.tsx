import { useMemo, useState, type ChangeEvent } from "react";


export const Memoized = () =>{
    const[num, setNum] = useState<number>(0);
    const[text, setText] = useState<string>("");
    console.log("After Rendering...")
    //If i will do heavy operation then whenever the state changes it re-renders into the UI.
    const handleChange = (e: ChangeEvent<HTMLInputElement>) =>{
        setNum(Number(e.target.value));
    }
    const handleChange1 = (e: ChangeEvent<HTMLInputElement>) =>{
        setText((e.target.value));
    }

    
    const result = useMemo(()=>{
        
        let res = 1;
        console.log("UseMemo");
        for(let i=0; i<1000000000; i++){
            res = num*2;
        }
        return res;
    },[num]);

    //undefined as any or we dont [] -- then it re-rendes whenever the state and props changes
    

    return(
        <>
        <input 
            type="number"
            value={num}
            placeholder="Enter Text..."
            onChange={handleChange}
        />    
        <input 
            type="text"
            value={text}
            placeholder="Enter text"
            onChange={handleChange1}
        />  
        <p>The Result is : {result}</p>
        </>
    )
}