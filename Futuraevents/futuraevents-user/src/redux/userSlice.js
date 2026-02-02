import { createSlice } from "@reduxjs/toolkit"


const initialState={

    users:JSON.parse(localStorage.getItem("users")) ||[],
    user:JSON.parse(localStorage.getItem("user")) || null,
    isAuthenticated:JSON.parse (localStorage.getItem("isAuthenticated")) || false,
    loading:false,
    error:null

 }


 const userSlice = createSlice({
    name:"userSlice",
    initialState,
    reducers:{
        userRegister:(state,action)=>{
            state.users.push(action.payload);
            localStorage.setItem("users",JSON.stringify( state.users));

        },
        userLogin:(state, action)=>{
            state.isAuthenticated=true;
            state.user = action.payload;
            localStorage.setItem("isAuthenticated", JSON.stringify(state.isAuthenticated));
            localStorage.setItem("user", JSON.stringify(state.user));
        },
         userLogout:(state, action)=>{
            state.isAuthenticated=false;
            state.user =null;
            localStorage.setItem("isAuthenticated", JSON.stringify(state.isAuthenticated));
            localStorage.setItem("user", JSON.stringify(state.user));
         
    }


 }});



export const{userRegister,userLogin , userLogout}= userSlice.actions;
export default userSlice.reducer;
