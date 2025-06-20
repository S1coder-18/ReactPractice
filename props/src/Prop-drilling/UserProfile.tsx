import type { User } from "./types"


export const UserProfile = ({user}: {user: User}) =>{
     
    return (
        <>
        <h1>Exampleof prop-drilling</h1>
        <h2>Welcome, {user.name} and age is {user.age}</h2> 
        </>
    )
}