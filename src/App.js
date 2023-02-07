import './App.css';
import { useSelector } from 'react-redux'

function App() {

  const tasksState = useSelector(state => state.tasks)
  console.log(tasksState)

  return (
    <div className="App">
      <h1>hello world</h1>
    </div>
  );
}

export default App;
