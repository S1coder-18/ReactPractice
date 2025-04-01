
import './App.css';
import Counter from './components/counter/Counter';
import Counter1 from './components/counter1/Counter1';
import Counter2 from './components/counter2/Counter2';
import Renderlist from './components/task2/Renderlist';
import InputHandle from './components/task3/InputHandle';
import Toggle from './components/task4/Toggle';
import ConditionalRen from './components/task6/ConditionalRen';
import StatementExpression from './components/tasks5/StatementExpression';
import myImage from './assests/Earth.jpg';
function App() {
  return (
    <div className="App">
      <h1>Ways of importing images</h1>
      {/* <Renderlist /> */}
      {/* <Counter1 /> */}
      {/* <Counter1 /> */}
      {/* <Counter2 /> */}
      {/* <InputHandle /> */}
      {/* <Toggle /> */}
      {/* <StatementExpression /> */}
      <ConditionalRen />
      <div className='img'>
      <img src={myImage} alt='myImage'/>
      </div>

      
      
    </div>
  );
}

export default App;

//1. I have added the image inside assets folder and assets folder i have created and 
// then imported the image from that folder and myImage is a variable that holds the path to the image file.
// I used the img tag and src attribute to show the image in the UI.
