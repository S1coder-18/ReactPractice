import { SideBar } from "./SideBar"
import type { User } from "./types"

//  { user: { name: string; age: number } } // We can use this as well instead of types.ts
export const DashBoard = ({user}: {user: User}) =>{

    return <SideBar user={user}></SideBar>
}