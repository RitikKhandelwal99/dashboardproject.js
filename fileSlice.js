import {createSlice} from '@reduxjs/toolkit'


const initialState = () => ({
  degree: "",
  university: "",
  institutename: "",
  startyear: "",
  endyear: ""
})

const fileSlice = createSlice({
    name: "file",
    initialState,
    reducers: {
        Qualification : (state,action) => {
          state.degree = action.payload.degree;
          state.university = action.payload.university;
          state.institutename = action.payload.institutename;
          state.startyear= action.payload.startyear;
          state.endyear = action.payload.endyear
        }
    }
})
export const {Qualification} = fileSlice.actions
export default fileSlice.reducer;