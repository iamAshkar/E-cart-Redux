import { configureStore } from "@reduxjs/toolkit";
import wishlist from "./slice/wishlist";
import cartSlice from "./slice/cartSlice";

export const store = configureStore({
    reducer: { 
        wishlistReducer:wishlist,
        cartReducer:cartSlice

    }
});