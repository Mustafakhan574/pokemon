import { configureStore } from "@reduxjs/toolkit";
import cardslice from "./cardslice";
export const store = configureStore({
      reducer:{
          card:cardslice,
      }    
})