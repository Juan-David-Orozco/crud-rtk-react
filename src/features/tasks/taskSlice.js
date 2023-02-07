import { createSlice } from '@reduxjs/toolkit'
import { v4 as uuid } from 'uuid'

const initialState = [
  {
    id:  uuid(),
    title: "Task 1",
    description: "Desc Task 1",
    completed: false
  },
  {
    id:  uuid(),
    title: "Task 2",
    description: "Desc Task 2",
    completed: false
  }
]

export const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload)
      //[...state, action.payload]
    },
    deleteTask: (state, action) => {
      const task = state.find(task => task.id === action.payload)
      if(task) {
        state.splice(state.indexOf(task), 1)
      }
    }
  }
})

export const {addTask, deleteTask} = taskSlice.actions

export default taskSlice.reducer