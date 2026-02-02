import {createSlice} from "@reduxjs/toolkit"

const productSlice = createSlice ({
    name:"productSlice",
    initialState:{

        products:JSON.parse(localStorage.getItem("products")) || [],
        error :null ,
        loading : false ,
        cartItems :JSON.parse(localStorage.getItem("cartItems")) || [],

    },
    reducers:{
     addProducts:(state ,action)=>{
        state.products.push(action.payload);
        localStorage.setItem('products' , JSON.stringify(state.products));
     },
     setProducts:(state ,action)=>{
        state.products = action.payload;
        localStorage.setItem('products' , JSON.stringify(state.products));
     },
     
     editProduct:(state , action)=>{
        const productIndex = state.products.findIndex((pr)=> pr.id === action.payload.id);

        if(productIndex !== -1){
            state.products[productIndex] =action.payload;
                    localStorage.setItem('products' , JSON.stringify(state.products));

        }


     },
      deleteProduct:(state , action)=>{
        const productIndex = state.products.findIndex((pr)=> pr.id === action.payload);

        if(productIndex !== -1){
            state.products.splice(productIndex , 1);
                    localStorage.setItem('products' , JSON.stringify(state.products));

        }


     },
     addToCart : (state,action)=>{
        const itemIndex = state.cartItems.findIndex((pr)=>pr.id === action.payload.id);
        if(itemIndex !== -1){
            state.cartItems[itemIndex].quantity++;
        }else{
            state.cartItems.push({...action.payload,quantity:1});

        }
          localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        },

        incrementItemQuantity:(state ,action)=>{
            const itemIndex = state.cartItems.findIndex((pr) => pr.id ===action.payload);
            if(itemIndex !== -1){
                state.cartItems[itemIndex].quantity++;
                localStorage.setItem("cartItems", JSON.stringify(state.cartItems));

            }
        },

          decrementItemQuantity:(state ,action)=>{
            const itemIndex = state.cartItems.findIndex((pr) => pr.id ===action.payload);
            if(itemIndex !== -1){
                state.cartItems[itemIndex].quantity--;
                localStorage.setItem("cartItems", JSON.stringify(state.cartItems));

            }
        },

        
          removeCartItem:(state ,action)=>{
            const itemIndex = state.cartItems.findIndex((pr) => pr.id ===action.payload);
            if(itemIndex !== -1){
                state.cartItems.splice(itemIndex , 1);
                localStorage.setItem("cartItems", JSON.stringify(state.cartItems));

            }
        },


        

      

     

    }

});

export const {deleteProduct,addProducts,addToCart ,editProduct, incrementItemQuantity , decrementItemQuantity ,removeCartItem, setProducts} = productSlice.actions;

export default productSlice.reducer; 
