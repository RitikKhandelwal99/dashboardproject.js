import {configureStore} from '@reduxjs/toolkit'
import userSlice from '../Reducers/userSlice'

import fileSlice from '../Reducers/fileSlice'
import workSlice from  '../Reducers/workexpSlice'
import keySlice from '../Reducers/keySlice'

const store = configureStore({
    reducer: {
        detail: userSlice,
        file: fileSlice,
        dot: workSlice,
        keys: keySlice
    }
})
export default store