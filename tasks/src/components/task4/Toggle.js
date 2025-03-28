import { useState } from "react";
import './toggle.css';
function Toggle(){

    const[isVisible, setIsVisibility] = useState(true);

    const toggle = () =>{
        setIsVisibility(!isVisible); //set isVisible to is not isVisible...
    }

    //If we will try to do this ...
    // isvisible = false pr true ... will give error(assignment to constant variable).
    // here isvisible is read-only so we can't assign value like this.


    // const value = () =>{
    //     return isVisible ? "Show" : "Hide";  
    // } 
    // we can use this way as well, by returning the value and calling it from jsx syantax (value()) 

    return (
        <>
        <div className="btn">
        <button className="btn-btn" onClick={toggle}>{isVisible ? "Show" : "Hide"}</button>  
        <div className="txt">{isVisible && <p>This is hidden text!.</p>}</div>
        </div>
        </>
    )

}

export default Toggle;