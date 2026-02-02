import { configureStore } from "@reduxjs/toolkit";
import eventReducer from "./eventSlice"
import userReducer from "./userSlice"


const store  =configureStore({
    reducer:{
    eventState : eventReducer,
    userState:userReducer
    }
});

export default store;
