// How we will render list elements in the UI (Display a List of Items).
//You have given list below -->
import './Renderlist.css';
const fruits = ["Sachin", "Ragni", "Raj", "Harshita", "Ananya", "Riya"];


function Renderlist(){
    
    return(
        <div className="container">
        <ol className='fruit-list'>
        {
            fruits.map((fruit,index)=>(
                <li key={index}>{fruit}</li>
            ))
        }
        </ol>
        </div>
    )
}

export default Renderlist;