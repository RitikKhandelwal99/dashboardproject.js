import {createSlice} from '@reduxjs/toolkit'


const initialState =  ({
    fname: "",
    lname:"",
    email:"",
    phonenumber:"",
    address:""

})
const userSlice = createSlice({
    name: "detail",
    initialState,
    reducers: {
            AddTodo: (state,action) => {
            state.fname = action.payload.fname;
            state.lname = action.payload.lname;
            state.email = action.payload.email;
            state.phonenumber = action.payload.phonenumber;
            state.address = action.payload.address;
        }
    }
})
export const {AddTodo}  = userSlice.actions;
export default userSlice.reducer