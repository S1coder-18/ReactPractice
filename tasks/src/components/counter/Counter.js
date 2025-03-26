//Created counter using local js variables ...
//When we use local variables, React will update the value in memory but it doesn't track the 
// //local variable it won't re-render in UI.
// Thats why we need state variables(useState hook to manage the state). 
function Counter(){

    let count = 0;

    function increment(){
        count++;
        console.log(count);
    }

    return (
        <>
        <h3>Count : {count}</h3>
        <button onClick={increment}>Increment</button>
        </>
    )
}
export default Counter;