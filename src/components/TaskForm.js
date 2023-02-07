import { useState } from "react"
import { useDispatch } from 'react-redux'
import { addTask } from '../features/tasks/taskSlice'
import { v4 as uuid } from 'uuid'
import { useNavigate, Link } from 'react-router-dom'

function TaskForm() {

  const [task, setTask] = useState({
    title: "",
    description: "",
    //completed: false
  })

  const dispatch = useDispatch()

  const navigate = useNavigate()

  const handleChange = (e) => {
    setTask({...task, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(addTask({
      id: uuid(), ...task
    }))
    navigate('/')
    //console.log(task)
  }

  return (
    <div>
      <header>
        <Link to="/">Task List</Link>
      </header>
      <form onSubmit={handleSubmit}>
        <input 
          type="text"
          name="title"
          placeholder="Title" 
          onChange={handleChange}
          value={task.title}
        />
        <textarea
          name="description" 
          placeholder="Description"
          onChange={handleChange}
          value={task.description}
        ></textarea>
        {/*
        <input 
          type="checkbox"
          name="completed"
          value={task.completed}
        />
        */}
        <button>Save</button>
      </form>
    </div>
  )
}

export default TaskForm