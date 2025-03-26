
import './App.css';
import Counter from './components/counter/Counter';
import Counter1 from './components/counter1/Counter1';

import Renderlist from './components/task2/Renderlist';

function App() {
  return (
    <div className="App">
      <h1>Rendering list elements in the UI</h1>
      <Renderlist />
      {/* <Counter1 /> */}
    </div>
  );
}

export default App;
