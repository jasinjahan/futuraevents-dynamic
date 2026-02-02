import { createSlice } from "@reduxjs/toolkit"
import EditEvent from "../EditEvent";

const eventSlice = createSlice({
    name: "eventSlice",
    initialState: {
        events: JSON.parse(localStorage.getItem("events")) || [],
        error: null,
        loading: false,
        wishItems: JSON.parse(localStorage.getItem("wishItems")) || [],
    },
    reducers: {
        addEvents: (state, action) => {
            state.events.push(action.payload);
            localStorage.setItem('events', JSON.stringify(state.events));
        },
         setEvents: (state, action) => {
            state.events=action.payload;
            localStorage.setItem('events', JSON.stringify(state.events));
        },
      editEvent:(state , action)=>{
        const eventIndex = state.events.findIndex((pr)=> pr.id === action.payload.id);

        if(eventIndex !== -1){
            state.events[eventIndex] =action.payload;
                    localStorage.setItem('events' , JSON.stringify(state.events));

        }


     },
      deleteEvent:(state , action)=>{
        const eventIndex = state.events.findIndex((pr)=> pr.id === action.payload);

        if(eventIndex !== -1){
            state.events.splice(eventIndex,1);
                    localStorage.setItem('events' , JSON.stringify(state.events));

        }


     },
        addToWish: (state, action) => {
            const itemIndex = state.wishItems.findIndex((pr) => pr.id === action.payload.id);
            if (itemIndex !== -1) {
                state.wishItems[itemIndex].eventquantity++;

            } else {
                state.wishItems.push({...action.payload, eventquantity: 1});
            }
            localStorage.setItem("wishItems", JSON.stringify(state.wishItems));
    
        },
        
        incrementItemQuantity:(state ,action)=>{
            const itemIndex = state.wishItems.findIndex((pr) => pr.id ===action.payload);
            if(itemIndex !== -1){
                state.wishItems[itemIndex].eventquantity++;
                localStorage.setItem("wishItems", JSON.stringify(state.wishItems));

            }
        },

          decrementItemQuantity:(state ,action)=>{
            const itemIndex = state.wishItems.findIndex((pr) => pr.id ===action.payload);
            if(itemIndex !== -1){
                state.wishItems[itemIndex].eventquantity--;
                localStorage.setItem("wishItems", JSON.stringify(state.wishItems));

            }
        },

        
          removeWishItem:(state ,action)=>{
            const itemIndex = state.wishItems.findIndex((pr) => pr.id ===action.payload);
            if(itemIndex !== -1){
                state.wishItems.splice(itemIndex , 1);
                localStorage.setItem("wishItems", JSON.stringify(state.wishItems));

            }
        },
        


    }
});

export const {setEvents,deleteEvent,editEvent, addEvents ,addToWish,decrementItemQuantity,incrementItemQuantity,removeWishItem} = eventSlice.actions;

export default eventSlice.reducer;

