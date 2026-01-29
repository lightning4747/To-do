import React from 'react'
import { type todo} from '../model';
import '../App'

interface Props {
  tasks: todo[]
  setTask:React.Dispatch<React.SetStateAction<todo[]>>
}

const TaskList:React.FC<Props> = ({ tasks , setTask}) => {

  const handleDelete = (id:number) => {
    setTask(tasks.filter((task) => task.id !== id));
  };

  const handleDone = (id: number) => {
  setTask(prev =>
    prev.map(task =>
      task.id === id ? { ...task, isDone: true } : task
    )
  );
};


  return (
    <div className='tasks-container'>
      <h1 className='tasks-header'>Tasks</h1>
      {
  tasks
    .filter(task => !task.isDone)
    .map(task => (
      <div key={task.id} className="task">
        <p>{task.task}</p>
        <button
          className="delete-btn"
          onClick={() => handleDelete(task.id)}
        >
          X
        </button>
        <button
          className="done-btn"
          onClick={() => handleDone(task.id)}
        >
          ✓
        </button>
      </div>
    ))
}

    </div>
  )
}

export default TaskList

