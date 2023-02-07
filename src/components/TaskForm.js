import { useState, useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { addTask, updateTask } from '../features/tasks/taskSlice'
import { v4 as uuid } from 'uuid'
import { useNavigate, Link, useParams } from 'react-router-dom'

function TaskForm() {

  const [task, setTask] = useState({
    title: "",
    description: "",
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
      setTask(tasks.find(task => task.id === params.id))
    }
  }, [params.id, tasks])

  return (
    <div>
      <header className="mb-3">
        <Link to="/" className="bg-gray-600 px-2 py-1 rounded-sm text-sm" >Task List</Link>
      </header>
      <form onSubmit={handleSubmit} className='bg-zinc-800 max-w-sm p-4'>
        <label htmlFor="title" className="block text-xs font-bold mb-2">Task:</label>
        <input
          type="text"
          name="title"
          placeholder="Title" 
          onChange={handleChange}
          value={task.title}
          className="w-full p-2 rounded-md bg-zinc-600 mb-2"
        />
        <label htmlFor="description" className="block text-xs font-bold mb-2">Description:</label>
        <textarea
          name="description" 
          placeholder="Description"
          onChange={handleChange}
          value={task.description}
          className="w-full p-2 rounded-md bg-zinc-600 mb-2"
        ></textarea>
        <button className="bg-indigo-600 px-2 py-1 rounded-sm text-sm">Save</button>
      </form>
    </div>
  )
}

export default TaskForm