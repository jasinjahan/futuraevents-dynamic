import {configureStore} from "@reduxjs/toolkit";
import productReducer from "./productSlice"


const store =configureStore({
    reducer:{
       
        productState : productReducer

    }
});

export default store ;