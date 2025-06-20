import { useMemo, useState, type ChangeEvent } from "react"

export const Memo = () =>{
    const[num, setNum] = useState<number>(0);
    const [text, setText] = useState<string>("");
    // console.log("After Rendering...")
    //If i will do heavy operation then whenever the state changes it re-renders into the UI.
    const handleChange = (e: ChangeEvent<HTMLInputElement>) =>{
        setNum(Number(e.target.value));
        
    }
    const handleChange1 = (e: ChangeEvent<HTMLInputElement>) =>{
        
        setText(e.target.value);
    }

    const result = () =>{
        let res = 0;
        console.log("result function rendering...")
        for(let i=0; i<10000000; i++){
            res = num*2;
            console.log(res);
        }
        return res;

    }

    return(
        <>
        <input 
            type="number"
            value={num}
            placeholder="Enter number..."
            onChange={handleChange}
        />    

        <input 
            type="text"
            value={text}
            placeholder="Enter text"
            onChange={handleChange1}
        />    
        <p>The Memo Result is : {result()}</p>
        </>
    )
}