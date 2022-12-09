import {configureStore} from "@reduxjs/toolkit";
import favReducer from "../features/favSlice"
import removeFav from "../features/favSlice"

const store = configureStore({
    reducer:{
        fav: favReducer,
        remove:removeFav
    }
})

export default store