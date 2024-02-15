// here we define action and redux

import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name:"counterAPP",
    initialState:{
        value:0
    },
    reducers:{
        //action are created inside this reducers key actions are logic to update data
        increment:(state,action)=>{
            console.log("==action==",action)
            
                state.value=state.value+action.payload;
        
            
        },
        decrement:(state,action)=>{
            console.log("==action==",action)
                state.value=state.value-action.payload;
            
            
        },
        reset:(state)=>{
            state.value=0
        }
    }
})

export const {increment,decrement,reset} = counterSlice.actions;
export default counterSlice.reducer;