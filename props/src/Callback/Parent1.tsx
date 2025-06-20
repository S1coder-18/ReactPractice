import { useCallback, useState } from "react";
import { Child1 } from "./Child1";
import { Child2 } from "./Child2";
import './CSS/Parent1.css';
export const Parent1 = () => {
  const [count, setCount] = useState<number>(0);
  const [isTheme, setTheme] = useState<boolean>(false);

  console.log("Parent Component Re-render");

//   const handleCounter = () => {
//     setCount((prev) => prev + 1);
//     console.log("Child1 Re-render");

//   };
  
  const handleCounter = useCallback(()=>{
    setCount((prev) => prev + 1);
    console.log("Parent Child - 1");
  },[count])





  //We can use useMemo() to prevent re-render when we return non-primitve like obj,array,functions.
  // const handleCounter = useMemo(()=>{
  //   // setCount((prev) => prev + 1);
    
  //   return function(){
  //     setCount((prev) => prev + 1);
  //   }
  // }, [count]);

 // When we pass just primitve then it even wont render the child component once...
//  const handleCounter = useMemo(()=>{
//     // setCount((prev) => prev + 1);
//     console.log("123")
//     return count;
//     // return function(){
//     //   setCount((prev) => prev + 1);
//     // }
//   }, [count]);





//   const handleTheme = () => {
//     setTheme((prev) => !prev); // toggle boolean
//     console.log("Child2 Re-render");
//   };


  const handleTheme = useCallback(()=>{
    setTheme((prev) => !prev); // toggle boolean
    console.log("Parent Child - 2");
  },[]);

  return (
  <div className="container">
    <h2>Count: {count}</h2>
    <h3 className={isTheme ? "theme-black" : "theme-grey"}>
      Theme: {isTheme ? "Black" : "Grey"}
    </h3>

    <button onClick={handleCounter}>Increment</button>
    <button onClick={handleTheme}>Change Theme</button>

    <Child1 onClick={handleCounter} />
    <Child2 onClick={handleTheme} />
  </div>
);
}




/**
 * 🧠 Question 2: Tricky UseCallback Scenario
You have:

A Parent component that contains two buttons:

One to increment a counter

One to change the theme

You also have two child components:

One shows the count

One shows the theme

You're passing functions (increment and toggleTheme) as props to the children.

🧨 You notice that even when only the count is changing, the theme child is also re-rendering.
 */