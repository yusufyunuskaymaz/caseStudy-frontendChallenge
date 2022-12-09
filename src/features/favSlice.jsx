import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    fav: [],
}

const favSlice = createSlice({
    name :"fav",
    initialState,
    reducers:{
        setFav: (state, {payload}) => {
            state.fav = [...state.fav, payload]
        },
        removeFav : (state, {payload})=>{
            const index = state.fav.indexOf(payload);
            state.fav.splice(index,1)
        }
    }
})

export const {setFav, removeFav} = favSlice.actions
export default favSlice.reducer