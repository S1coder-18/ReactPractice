
import './App.css';
import Counter from './components/counter/Counter';
import Counter1 from './components/counter1/Counter1';
import Counter2 from './components/counter2/Counter2';
import Renderlist from './components/task2/Renderlist';

function App() {
  return (
    <div className="App">
      <h1>Rendering list elements in the UI</h1>
      {/* <Renderlist /> */}
      {/* <Counter1 /> */}
      {/* <Counter1 /> */}
      <Counter2 />
    </div>
  );
}

export default App;
