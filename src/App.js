import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<TaskList/>}/>
          <Route path='/create-task' element={<TaskForm/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
