import {createSlice} from '@reduxjs/toolkit'



const initialState = ({
    organizationname:"",
    companyname: "",
    startyear:"",
    endyear:""
})
const workexpSlice = createSlice({
    name: "dot",
    initialState,
    reducers: {
        work: (state,action) => {
            state.organizationname = action.payload.organizationname;
            state.companyname = action.payload.companyname;
            state.startyear = action.payload.startyear;
            state.endyear = action.payload.endyear
        }
    }

})
export const {work} = workexpSlice.actions;
export default workexpSlice.reducer