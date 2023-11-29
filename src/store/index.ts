import { configureStore } from "@reduxjs/toolkit";
import globalSlice from "./features/modeSlice";




const store = configureStore({
    reducer:{
        mode: globalSlice.reducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store;