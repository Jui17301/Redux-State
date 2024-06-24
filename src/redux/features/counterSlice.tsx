
import { createSlice } from "@reduxjs/toolkit";


const initialState={count:0};

const counterSlice = createSlice({
  name:"counter",
  initialState,
  reducers:{
     increament:(state,action)=>{
       state.count = state.count+1
     },
     decreament:(state,action)=>{
      state.count = state.count-1
    }
  }
})

export const {decreament,increament} = counterSlice.actions;

export default counterSlice.reducer