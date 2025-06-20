import type { User } from "./types"
import { UserProfile } from "./UserProfile"



export const SideBar = ({user}: {user: User}) =>{

    return <UserProfile user={user}/>
}