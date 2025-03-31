
//Here , we are about js expression and statement and how we can write inside jsx.

function StatementExpression(){

    

    return(
        <>
        {let name = "Sachin"}
        <h1>{name}</h1>
        </>
    ) 


}

export default StatementExpression;

//1. When we declare variable outside then we can use this inside jsx.
//2. If we declare the variable inside the jsx then it gives the syntax error.
