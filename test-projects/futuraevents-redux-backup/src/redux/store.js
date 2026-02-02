import { configureStore } from "@reduxjs/toolkit";
import eventReducer from "./eventSlice"



const store  =configureStore({
    reducer:{
    eventState : eventReducer,
  
    }
});

export default store;
