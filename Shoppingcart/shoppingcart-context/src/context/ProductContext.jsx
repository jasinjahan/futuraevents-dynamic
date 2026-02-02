import {createContext, useState} from "react";

 
export const ProductContext = createContext();

export  const ProductContextProvider = ({children})=>{

    const [cartItems , setCartItems ] = useState(JSON.parse(localStorage.getItem('cartItems')) || []);
     
    const addCartItem = (product)=>{

        const cartItemIndex = cartItems.findIndex((item)=> item.id === product.id);

        if(cartItemIndex !== -1 ){
            const updatedCartItems = [...cartItems];
            updatedCartItems[cartItemIndex].quantity++;
            setCartItems(updatedCartItems);

        }else{
            const updatedCartItems= [...cartItems, {...product,quantity:1}];
            setCartItems(updatedCartItems);
        }
        localStorage.setItem('cartItems', JSON.stringify(cartItems));


        

}

    return(
        <ProductContext.Provider value={{cartItems,addCartItem}}>
            {children}
        </ProductContext.Provider>
    )

}