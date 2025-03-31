//This will show welcome user when user was loggedin by default user is not loggedIn
//So make the user login we have created button in which we are setting the default false to true ...
//when that value become true user will goggedIn.
import { useState } from "react"

function ConditionalRen(){

    const[isLoggedIn, setIsLoggedIn] = useState(false);

    return(
        <>
        {
            isLoggedIn ? <h2>Welcome !user</h2> : 
            <button onClick={()=>{setIsLoggedIn(true)}}>LogIn</button>
        }
        </>
    )
}

export default ConditionalRen;