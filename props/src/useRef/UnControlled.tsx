import { useRef } from "react"


export const UnControlled = () =>{

    let inputRef = useRef<HTMLInputElement>(null);

    const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) =>{
        e.preventDefault();
        console.log(inputRef.current?.value);

        if(inputRef.current){   //It will always reset the input box after submitting the value.
            inputRef.current.value = "";
        }
        
    }

    return(
        <>
        <form onSubmit={handleSubmit}>
        <input 
           type="text"
           ref={inputRef}
           placeholder="Enter text..."

        />   
        <button type="submit" ></button>
        </form>
        </>
    )

}

/**
 * 📝 Challenge 4: Uncontrolled Form
Build a form with an input field but do NOT use useState.

What to do:
Use only useRef to get the value of input on submit.

No controlled input (no value, no onChange).
 */