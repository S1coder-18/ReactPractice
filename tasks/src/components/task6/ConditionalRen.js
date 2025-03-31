//This will show welcome user when user was loggedin by default user is not loggedIn
//So make the user login we have created button in which we are setting the default false to true ...
//when that value become true user will LoggedIn.
// import { useState } from "react"

// function ConditionalRen(){

//     const[isLoggedIn, setIsLoggedIn] = useState(false);

//     return(
//         <>
//         {
//             isLoggedIn ? <h2>Welcome !user</h2> : 
//             <button onClick={()=>{setIsLoggedIn(true)}}>LogIn</button>
//         }
//         </>
//     )
// }

// export default ConditionalRen;


//We can make it as toggle as well ................. see how ,
//Nothing just, Whenever user clicks button and he is not loggedin then he will lgoin other wise
//He is loggedIn already then he will loggedOut. 
//Inside ternary o/p we will pass one another button instead of  welcome user message.
import { useState } from "react"
import './ren.css';
function ConditionalRen(){

    const[isLoggedIn, setIsLoggedIn] = useState(false);

    return(
        <>
        
        {
            isLoggedIn ? <button onClick={()=>{setIsLoggedIn(false)}}>LogOut</button>: 
            <button onClick={()=>{setIsLoggedIn(true)}}>LogIn</button>
        }
        
        <h2>{isLoggedIn ? "User is Logged In" : "Please Login to continue!."}</h2>
       
        </>
    )
}

export default ConditionalRen;

//Have you seen what i did, I just did conditional rendering.