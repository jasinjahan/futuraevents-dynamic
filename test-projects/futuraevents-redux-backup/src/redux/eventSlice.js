import { createSlice } from "@reduxjs/toolkit"

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
        },
        addToWish: (state, action) => {
            const itemIndex = state.wishItems.findIndex((pr) => pr.id === action.payload.id);
            if (itemIndex !== -1) {
                state.wishItems[itemIndex].quantity++;

            } else {
                state.wishItems.push({...action.payload, quantity: 1});
            }
            localStorage.setItem("wishItems", JSON.stringify(state.wishItems));
    
        }


    }
});

export const { addEvents ,addToWish} = eventSlice.actions;

export default eventSlice.reducer;





