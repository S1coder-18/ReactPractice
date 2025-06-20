import type React from "react"


export const User = ({children} : {children : React.ReactNode}) =>{
    
    return(
        <>
        <p>Example of Props.children{children}</p>
        </>
    )
}