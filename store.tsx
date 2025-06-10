import { configureStore} from "@reduxjs/toolkit";
import { addToCart } from "./cartSlice";
import {  selectCategories } from "./categorySlice";


export const store=configureStore({
  reducer:{
    cart:addToCart,
    category:selectCategories,
    
  }
});
