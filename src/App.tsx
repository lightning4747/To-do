import { useState } from 'react';
import './App.css'
import InputField from './components/InputField';
import type { todo } from './model';
import TaskList from './components/TaskList';
import DoneList from './components/DoneList';


function App() {
  const [todo, setTodo] = useState<string>("");
  const [tasks, setTask] = useState<todo[]>([]);

  const handleadd = (e: React.FormEvent) => {
    e.preventDefault();

    if(todo) {
      setTask([...tasks, {id:Date.now(), task:todo, isDone:false}]);
      setTodo("");
    }

  }


  return (
   <div>
    <h1>Todo List</h1>
    <InputField todo={todo} setTodo={setTodo} handleadd={handleadd}/>
    <div className='container'>
    <TaskList tasks = {tasks} setTask= {setTask}/>
    <DoneList tasks = {tasks} setTask= {setTask}/>
    </div>
   </div>
  )
}

export default App
