import { createSlice } from "@reduxjs/toolkit";
import { IoReturnDownBack } from "react-icons/io5";
const cardslice = createSlice({
          name:"card",
          initialState:[],
          reducers:{
           Add:(state,action)=>{
const existitem = state.find((item)=>item.id===action.payload.id);
if(existitem){
 return state.map((item)=>( item.id===action.payload.id?{...item,qty:item.qty+1}:item))}
          else{
                    state.push(action.payload)       
          }      
},               
          Remove:(state,action)=>{
                  return state.filter((item)=>{
                     return item.id!==action.payload     
                    })
          } ,
increment:(state,action)=>{
return state.map((item)=>
          item.id===action.payload?{...item,qty:item.qty+1}:item);
}  ,  
decrement:(state,action)=>{
          return state.map((item)=>
                    item.id===action.payload?{...item,qty:item.qty-1}:item);  
}
          }
})
export const {Add,Remove,increment,decrement} = cardslice.actions;
export default cardslice.reducer;