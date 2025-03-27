// Here , I want to tell you about useState --> 
// It returns two values in a pair , first one is variable(count) and 
// second one is setCount to update the count and you know there is catch that setUpdate is asynchronous
// It will update the value only once.

import { useState } from 'react';

function Counter2(){

    const[count, setCount] = useState(0);
  
    //See here it will update the value once...
    // const handleIncrement =() => {
    //     setCount(count+1); //written 3 times , update only once 
    //     setCount(count+1);
    //     setCount(count+1);
        
    // }

    //Now, How you can solve this , we can solve this by using functional updates...see below in the code
     
    const handleIncrement =() => { //written 3 times , updates 3 times.... 
        setCount(prev => prev+1); // prev = 0 so count =1 
        setCount(prev => prev+1); // prev =1 so count =2
        setCount(prev => prev+1); // prev =2 so count =3
        
    }


    //Here, I am handling the case if we count>0 then only it should decrement the value by 1.
    //This case is handling negative values.
    const handleDecrement = () =>{
        if(count>0){
            setCount(prev => prev-1);
        }
    }
    

    return(
        <>
        <h3>Count is :{count}</h3>
        <button onClick={handleIncrement}>Incremment</button>
        <button onClick={handleDecrement}>Decrement</button>
        </>
    )
}

export default Counter2;