import {createSlice} from '@reduxjs/toolkit'



const initialState = ({

    javascript:"",
    python: "",
    node:"",
    react:""
})
const keySlice = createSlice({
    name: "keys",
    initialState,
    reducers: {
        skilled: (state,action) => {
            
            state.javascript = action.payload.javascript;
            state.python = action.payload.python;
            state.node = action.payload.node;
            state.react = action.payload.react
        }
    }

})
export const {skilled} = keySlice.actions;
export default keySlice.reducer