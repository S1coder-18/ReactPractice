
// import Counter from "./Components/Counter"
// import { Fetch } from "./FetchData/Fetch"
// import { User } from "./FetchData/User"
// import { Controlled } from "./Formhandling/Controlled"
// import { AddTask } from "./Todo/AddTask"
// import { PrevTracker } from "./useRef/PreTracker"
// import { UnControlled } from "./useRef/UnControlled"
// import { UseRef } from "./useRef/UseRef"

// import { Parent } from "./Callback/Parent"
// import { Parent1 } from "./Callback/Parent1"
import { CommonState } from "./LiftingStateUp/CommonState";
import { DashBoard } from "./Prop-drilling/DashBoard";
// import { User } from "./PropsChildren/User"
// import { Memo } from "./Components1/Memo"
// import { Memoized } from "./Components1/Memoized"
function App() {
  const user = {name:"Sachin Gupta ", age:24}; 
  return (
    <>
      <div>
        {/* <Counter */}
        {/* <Fetch /> */}
        {/* <User /> */}
        {/* <Controlled /> */}
        {/* <AddTask /> */}
        {/* <UseRef />
        <PrevTracker />
        <UnControlled /> */}
        {/* <Memo /> */}
        {/* <Memoized /> */}
        {/* <Parent /> */}
        {/* <Parent1 /> */}
        {/* <User>
             <h1>Children Props.....</h1>  // Example of prop drilling 
        </User> */}

        {/* Prop Drilling Example  */}
        {/* <DashBoard user={user}></DashBoard>   */}

        <CommonState />

      </div>
    </>
  )
}

export default App
