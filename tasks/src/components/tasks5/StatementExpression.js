
//Here , we are about js expression and statement and how we can write inside jsx.

// function StatementExpression(){

//     let name = "Sachin";

//     return(
//         <>
//         <h1>{name}</h1>
//         </>
//     ) 


// }

// export default StatementExpression;

//1. When we declare variable outside then we can use this inside jsx.
//2. If we declare the variable inside the jsx then it gives the syntax error.


//3. If we want to decalre the variable inside jsx then there is case we can declare using IIFE because 
// it invokes immediately and return the jsx inside jsx. Let's see how --->

// function StatementExpression(){

    

//     return(
//         <>
//         {
//             (()=>{
//                 let name = "Sachin";
//                 return <h1>{name}</h1>;
//             })()
//         }
//         </>
//     ) 


// }

// export default StatementExpression;

//4. And if no return statment , nothing will display in the UI>

// function StatementExpression(){

    

//     return(
//         <>
//         {
//             (()=>{
//                 let name = "Sachin";
                
//             })()
//         }
//         </>
//     ) 


// }

// export default StatementExpression;


//5. We can't do in this way, It gives syntax error because we can't return like this 
//FUnction declaration is an statement , because it doesn't returnt he value directly.
// function StatementExpression(){

    

//     return(
//         <>
//         {
//             function add(){
//                 let name = "Sachin "
//                 return name;
//             }
//             return <h1>{add()}</h1>
//         }
//         </>
//     ) 


// }

// export default StatementExpression;

//5. Instead of that we can write like this  ... It will work properly.
//Why it is working because --> We are returing jsx inside jsx so it works fine coz of IIFE it invokes immediately.

// function StatementExpression(){

    

//     return(
//         <>
//         {
//             (()=>{
//                 function add(){
//                     let name = "Sachin "
//                     return name;
//                 }
//                 return <h1>{add()}</h1>
//             })()
//         }
//         </>
//     ) 


// }

// export default StatementExpression;

//6.There are other ways as well , They are lil similar like IIFE ... we can use Anonymous function 
//The function is an anonymous function expression.It is immediately invoked to return JSX.


// function StatementExpression(){

    

//     return(
//         <>
//         {
//             (function(){
//                 let name = "Raj";
//                 return <h1>{name}</h1>
//             })()
//         }
//         </>
//     ) 


// }

// export default StatementExpression;

//7. Also we can use function constructor, Why it will work because function constructor 
//creates function at runtime.It returns jsx as string which react can interpret directly.
//And we will wrap in side any tag then tag also will be shown in the UI because of string returns.

function StatementExpression(){

    

    return(
        <>
        {
            new Function("return 'Harshitha'")()
        }
        </>
    ) 


}

export default StatementExpression;

