import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  {
    id: "1",
    title: "Task 1",
    description: "Desc Task 1",
    completed: false
  },
  {
    id: "2",
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
      console.log(state, action.payload)
      state.push(action.payload)
      //[...state, action.payload]
    }
  }
})

export const {addTask} = taskSlice.actions

export default taskSlice.reducer