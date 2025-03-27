//Create an input field and update the value .....

import { useState } from "react";
import './InputHandle.css';
function InputHandle(){
     
    // If we dont pass any argument then it will take undefined then it behaves like 
    // uncontrolled component and when we change the value then it changes from uncontrolled to 
    // controlled component whcih should not happen....

    // const[Txt, setTxt] = useState();

    // So, we will pass empty string initially so it won't behave like uncontrolled components...
    
    const[Txt, setTxt] = useState("");

    const handleChange = (e) => {
        setTxt(console.log(e.target.value));  // updating the value dynamically...
    }
    return(
        <>
        <div className="input-field">
        <input type="text" placeholder="Enter The Text ..." value={Txt}  onChange={handleChange}/>
        </div>
        </>
    )
}

export default InputHandle;


//Below i am writing about e.target.value -----------------------------------

// what is e?

//e stands for event which gets automatically passed to event handler when an event occurs and 
// contains the details about event that occured.

//What is e.target?

// e.target refers to the dom element that triggered the event in this case input is e.target itself.
//(e.target is an html element)

//what is the e.target.value?

// e.target.value refers to the current value of an input field and retrieve user input dynamically.