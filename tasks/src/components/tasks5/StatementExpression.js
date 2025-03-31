
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

function StatementExpression(){

    

    return(
        <>
        {
            (()=>{
                let name = "Sachin";
                return <h1>{name}</h1>;
            })()
        }
        </>
    ) 


}

export default StatementExpression;
