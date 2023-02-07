import { useState, useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { addTask, updateTask } from '../features/tasks/taskSlice'
import { v4 as uuid } from 'uuid'
import { useNavigate, Link, useParams } from 'react-router-dom'

function TaskForm() {

  const [task, setTask] = useState({
    title: "",
    description: "",
    //completed: false
  })

  const tasks = useSelector(state => state.tasks)

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const params = useParams()

  const handleChange = (e) => {
    setTask({...task, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if(params.id){
      dispatch(updateTask(task))
    } else {
      dispatch(addTask({
        id: uuid(), ...task
      }))
    }

    navigate('/')
  }

  useEffect(() => {
    if(params.id){
      console.log("edit")
      setTask(tasks.find(task => task.id === params.id))
      //console.log(task)
    } else {
      console.log("create")
    }
  }, [])

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