import {createSlice} from "@reduxjs/toolkit"

const productSlice = createSlice ({
    name:"productSlice",
    initialState:{

        products:JSON.parse(localStorage.getItem("products")) || [],
        error :null ,
        loading : false

    },
    reducers:{
     addProducts:(state ,action)=>{
        state.products.push(action.payload);

     }
    }
});

export const {addproducts} = productSlice.actions;

export default productSlice.reducer; 
