import React from 'react'
import type { todo } from '../model'


interface Props {
  tasks: todo[]
  setTask:React.Dispatch<React.SetStateAction<todo[]>>
}

const DoneList:React.FC<Props> = ({tasks , setTask}) => {

    const handleDelete = (id:number) => {
        setTask(tasks.filter(task => task.id !== id));
    };

 return (
    <div className='done-container'>
      <h1 className='done-header'>Done</h1>
      {
  tasks
    .filter(task => task.isDone)
    .map(task => (
      <div key={task.id} className="task">
        <p>{task.task}</p>
        <button
          className="delete-btn"
          onClick={() => handleDelete(task.id)}
        >
          X
        </button>

      </div>
    ))
}
    </div>
  )
}

export default DoneList
