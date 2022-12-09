import {configureStore} from "@reduxjs/toolkit";
import favReducer from "../features/favSlice"

const store = configureStore({
    reducer:{
        fav: favReducer
    }
})

export default store