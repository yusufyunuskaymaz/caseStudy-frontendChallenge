import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    fav: 0,
}

const favSlice = createSlice({
    name :"fav",
    initialState,
    reducers:{
        setFav: (state) => {
            state.fav = state.fav + 1
        }
    }
})

export const {setFav} = favSlice.actions
export default favSlice.reducer